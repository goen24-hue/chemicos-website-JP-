import { editorialArticles } from "@/mocks/products";

export default function EditorialSection() {
  return (
    <section className="w-full bg-[#f5f0e8] py-20 px-6 md:px-10 lg:px-16">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#8a7e6e] mb-3 font-light">
            Stories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] font-light">
            Recommended reading
          </h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-[#2c2c2c] border-b border-[#2c2c2c] pb-0.5 hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap">
          View all
          <i className="ri-arrow-right-line text-sm"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {editorialArticles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4" style={{ aspectRatio: "3/2" }}>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-xs tracking-widest uppercase text-[#8a7e6e] mb-2 font-light">
              {article.label}
            </p>
            <h3 className="font-serif text-base text-[#2c2c2c] font-light leading-snug mb-2 group-hover:opacity-70 transition-opacity">
              {article.title}
            </h3>
            <p className="text-xs text-[#8a7e6e] font-light">{article.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
