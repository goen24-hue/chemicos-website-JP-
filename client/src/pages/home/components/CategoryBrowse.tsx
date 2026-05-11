import { categories } from "@/mocks/products";

export default function CategoryBrowse() {
  return (
    <section className="w-full bg-[#eee9e0] py-20 px-6 md:px-10 lg:px-16">
      <div className="mb-10">
        <p className="text-xs tracking-[0.3em] uppercase text-[#8a7e6e] mb-3 font-light">
          Explore
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] font-light">
          Browse by category
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-3" style={{ aspectRatio: "1/1" }}>
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>
            <p className="font-serif text-sm text-[#2c2c2c] font-light tracking-wide">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
