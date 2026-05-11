export default function QuoteSection() {
  return (
    <section className="w-full bg-[#2e2a22] py-16 px-6 md:px-10 lg:px-16 text-center">
      <blockquote className="font-serif text-xl md:text-2xl text-[#d4c9b0] font-light italic leading-relaxed max-w-2xl mx-auto mb-4">
        &ldquo;Your best and wisest refuge from all troubles is in your science.&rdquo;
      </blockquote>
      <cite className="text-xs tracking-[0.3em] uppercase text-[#8a7e6e] font-light not-italic">
        Ada Lovelace
      </cite>
    </section>
  );
}
