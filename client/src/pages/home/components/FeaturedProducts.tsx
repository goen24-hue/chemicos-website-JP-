import { useState } from "react";
import { featuredProducts } from "@/mocks/products";

export default function FeaturedProducts() {
  const [addedId, setAddedId] = useState<number | null>(null);

  const handleAdd = (id: number) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="w-full bg-[#f5f0e8] py-20 px-6 md:px-10 lg:px-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#8a7e6e] mb-3 font-light">
            New & Notable
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] font-light leading-snug">
            New and notable
          </h2>
          <p className="text-sm text-[#6b6055] font-light mt-2 max-w-md leading-relaxed">
            A collection of longstanding formulations and well-chosen gifts to make for a memorable gift.
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-[#2c2c2c] border-b border-[#2c2c2c] pb-0.5 hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap">
          View all
          <i className="ri-arrow-right-line text-sm"></i>
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative bg-[#ede8df] overflow-hidden mb-4" style={{ aspectRatio: "4/5" }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs tracking-widest uppercase text-[#6b6055] font-light bg-[#f5f0e8]/80 px-2 py-1">
                  {product.tag}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs tracking-widest uppercase text-[#8a7e6e] mb-1 font-light">
                  {product.category}
                </p>
                <h3 className="font-serif text-base text-[#2c2c2c] font-light leading-snug mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-[#8a7e6e] font-light">{product.size}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#2c2c2c] font-light">{product.price}</p>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => handleAdd(product.id)}
              className={`mt-3 w-full py-2.5 text-xs tracking-widest uppercase font-light border transition-all duration-300 cursor-pointer whitespace-nowrap ${
                addedId === product.id
                  ? "bg-[#2c2c2c] text-[#f5f0e8] border-[#2c2c2c]"
                  : "border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-[#f5f0e8]"
              }`}
            >
              {addedId === product.id ? "Added" : "Add to cart"}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex md:hidden justify-center">
        <button className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#2c2c2c] border-b border-[#2c2c2c] pb-0.5 hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap">
          View all
          <i className="ri-arrow-right-line text-sm"></i>
        </button>
      </div>
    </section>
  );
}
