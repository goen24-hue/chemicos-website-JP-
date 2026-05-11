import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { ENV } from "./_core/env";
import { z } from "zod";

const contactSchema = z.object({
  company: z.string().max(200).optional(),
  name: z.string().min(1, "お名前は必須です").max(100),
  email: z.string().email("正しいメールアドレスを入力してください").max(320),
  product: z.string().max(50).optional(),
  message: z.string().min(1, "ご相談内容は必須です").max(500),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(contactSchema)
      .mutation(async ({ input }) => {
        const productLabel: Record<string, string> = {
          eyeliner: "アイライナー",
          mascara: "マスカラ",
          brow: "アイブロウ",
          lip: "リップ",
          other: "その他・複数",
        };

        const productText = input.product
          ? productLabel[input.product] ?? input.product
          : "未選択";

        const emailBody = [
          "【お問い合わせフォーム】新しいメッセージが届きました",
          "",
          `会社名　　: ${input.company || "（未入力）"}`,
          `お名前　　: ${input.name}`,
          `メール　　: ${input.email}`,
          `製品カテゴリ: ${productText}`,
          "",
          "【ご相談内容】",
          input.message,
        ].join("\n");

        // 1. Manus オーナー通知（常時）
        await notifyOwner({
          title: `【お問い合わせ】${input.name}様より`,
          content: emailBody,
        });

        // 2. 設定済みメールアドレスへの転送（CONTACT_EMAIL が設定されている場合）
        if (ENV.contactEmail && ENV.forgeApiUrl && ENV.forgeApiKey) {
          try {
            const emailEndpoint = new URL(
              "webdevtoken.v1.WebDevService/SendEmail",
              ENV.forgeApiUrl.endsWith("/") ? ENV.forgeApiUrl : `${ENV.forgeApiUrl}/`
            ).toString();

            await fetch(emailEndpoint, {
              method: "POST",
              headers: {
                accept: "application/json",
                authorization: `Bearer ${ENV.forgeApiKey}`,
                "content-type": "application/json",
                "connect-protocol-version": "1",
              },
              body: JSON.stringify({
                to: ENV.contactEmail,
                subject: `【お問い合わせ】${input.name}様より`,
                text: emailBody,
              }),
            });
          } catch (err) {
            // メール送信失敗はサイレントに処理（通知は既に送信済み）
            console.warn("[Contact] Email send failed:", err);
          }
        }

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
