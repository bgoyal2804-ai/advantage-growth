"use client";

import Image from "next/image";

export default function AdsPage() {
  return (
    <main className="font-sans bg-white">

      {/* HEADER */}
      <header className="flex justify-center items-center px-10 py-5 border-b">
        <Image
          src="/logo-new.png"
          alt="Advantage Growth – Performance Marketing Agency"
          width={160}
          height={50}
          priority
        />
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Performance Marketing Agency<br />That Scales Brands Profitably
        </h1>

        <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
          We help startups and growing brands generate high-quality leads and sales using
          <strong> Meta Ads, Google Ads, and conversion-focused funnels</strong>.
        </p>

        <p className="text-lg text-gray-300 mb-10">
          ROI-Focused • Data-Driven • Built for Scale
        </p>

        <a
          href="#contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-lg text-xl font-bold shadow-lg transition"
        >
          Get a Free Strategy Call
        </a>
      </section>

      {/* WHY US */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Advantage Growth
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">ROI-Driven Strategy</h3>
              <p className="text-gray-700">
                Every campaign is built to drive measurable business results — not vanity metrics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Paid Ads Experts</h3>
              <p className="text-gray-700">
                Specialists in Meta Ads & Google Ads with deep funnel and conversion expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">End-to-End Funnels</h3>
              <p className="text-gray-700">
                From ad creative to landing pages to follow-ups — we optimize the full journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Performance Marketing Services
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold mb-2">Meta Ads (Facebook & Instagram)</h3>
              <p className="text-gray-700">
                Scale lead generation and sales with high-converting creatives and precise targeting.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-2">Google Ads (Search & Display)</h3>
              <p className="text-gray-700">
                Capture high-intent users actively searching for your products or services.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold mb-2">Lead Generation Funnels</h3>
              <p className="text-gray-700">
                Conversion-optimized landing pages designed to turn clicks into qualified leads.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold mb-2">E-commerce Scaling</h3>
              <p className="text-gray-700">
                Proven strategies to scale Shopify & WooCommerce brands profitably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Book Your Free Strategy Call
          </h2>

          <p className="text-center text-gray-600 mb-10 text-lg">
            Get a clear action plan to scale your business with paid ads and funnels.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;

              const name = form.name.value;
              const email = form.email.value;
              const phone = form.phone.value;
              const message = form.message.value;

              fetch("https://formsubmit.co/ajax/bhavna.advantagegrowth@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name,
                  email,
                  phone,
                  message,
                  _subject: "New Lead – Ads Landing Page",
                  _captcha: "false",
                }),
              });

              window.open(
                `https://wa.me/917973888374?text=${encodeURIComponent(
                  `Hi, I'm ${name}. Email: ${email}. Phone: ${phone}. ${message}`
                )}`,
                "_blank"
              );

              alert("Thanks! We'll contact you shortly.");
              form.reset();
            }}
            className="space-y-5"
          >
            <input name="name" required placeholder="Your Name" className="w-full border p-4 rounded-lg" />
            <input type="email" name="email" required placeholder="Your Email" className="w-full border p-4 rounded-lg" />
            <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full border p-4 rounded-lg" />
            <textarea name="message" required placeholder="Tell us about your goals" rows="5" className="w-full border p-4 rounded-lg" />

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-lg text-xl font-bold">
              Get My Free Strategy Call →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 text-center">
        © 2026 Advantage Growth. All rights reserved.
      </footer>

    </main>
  );
}
