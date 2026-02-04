import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">

      <header className="flex justify-between items-center px-10 py-5 border-b">
        <Image src="/logo-new.png" alt="Advantage Growth" width={160} height={50} />
        <nav className="space-x-6 font-semibold">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-28 text-center">
        <h1 className="text-5xl font-bold mb-4">
          We Scale Brands with Performance Marketing
        </h1>
        <p className="text-xl mb-8">
          Meta Ads • Google Ads • Funnels • ROI Focused Growth
        </p>
        <a
          href="#contact"
          className="bg-orange-500 px-8 py-4 rounded text-lg font-bold"
        >
          Get a Free Strategy Call
        </a>
      </section>

      <section id="services" className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Meta & Google Ads",
            "Lead Generation",
            "Sales Funnels",
            "E-commerce Scaling",
          ].map((service) => (
            <div
              key={service}
              className="border p-8 rounded-xl text-center font-semibold"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-gray-100 py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-6">About Advantage Growth</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Advantage Growth is a performance-driven digital marketing agency
          helping startups and brands scale profitably using paid ads,
          conversion-focused funnels, and data-backed strategies.
        </p>
      </section>

      <section id="contact" className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Talk Growth</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input className="w-full border p-3 rounded" placeholder="Your Name" />
          <input className="w-full border p-3 rounded" placeholder="Your Email" />
          <textarea
            className="w-full border p-3 rounded"
            placeholder="Tell us about your project"
          />
          <button className="bg-black text-white px-8 py-3 rounded font-bold">
            Submit
          </button>
        </form>
      </section>

      <footer className="bg-black text-white py-6 text-center">
  © 2026 Advantage Growth. All rights reserved.
</footer>

<a
  href="https://wa.me/917973888374?text=Hi%20I%20am%20interested%20in%20growing%20my%20business"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
  aria-label="Chat on WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M16 2C8.3 2 2 8.3 2 16c0 2.5.7 4.9 1.9 7l-2 6.1 6.3-2c2 1.1 4.3 1.7 6.8 1.7 7.7 0 14-6.3 14-14S23.7 2 16 2z" />
  </svg>
</a>

    </main>
  );
}
