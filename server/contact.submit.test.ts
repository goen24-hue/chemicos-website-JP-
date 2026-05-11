import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// notifyOwner를 모킹하여 외부 API 호출 없이 테스트
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("필수 항목이 모두 입력되면 성공을 반환한다", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "山田 太郎",
      email: "test@example.com",
      message: "テスト送信です。",
    });

    expect(result).toEqual({ success: true });
  });

  it("이름이 없으면 유효성 검사 오류가 발생한다", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "test@example.com",
        message: "テスト送信です。",
      })
    ).rejects.toThrow();
  });

  it("이메일 형식이 잘못되면 유효성 검사 오류가 발생한다", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "山田 太郎",
        email: "not-an-email",
        message: "テスト送信です。",
      })
    ).rejects.toThrow();
  });

  it("선택 항목(회사명, 제품)을 포함해도 성공을 반환한다", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      company: "株式会社テスト",
      name: "山田 太郎",
      email: "test@example.com",
      product: "eyeliner",
      message: "アイライナーについてご相談したいです。",
    });

    expect(result).toEqual({ success: true });
  });
});
