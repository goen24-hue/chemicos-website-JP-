export default function HandcraftedSection() {
  return (
    <section className="w-full bg-[#f5f0e8] py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="border-l-2 border-[#c8b99a] pl-6">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8a7e6e] mb-3 font-light">
            Handcrafted Crop
          </p>
          <p className="font-serif text-base text-[#2c2c2c] font-light leading-relaxed max-w-sm">
            We have handpicked the ten best-selling formulations to create a curated selection of our most beloved products, chosen for their exceptional quality and enduring appeal.
          </p>
        </div>
        <div className="border-l-2 border-[#c8b99a] pl-6">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8a7e6e] mb-3 font-light">
            Leaving Firmly Approved
          </p>
          <p className="font-serif text-base text-[#2c2c2c] font-light leading-relaxed max-w-sm">
            Our formulations are developed with the finest botanical ingredients, leaving firmly approved by our team of experts and loved by our customers around the world.
          </p>
        </div>
      </div>
    </section>
  );
}
