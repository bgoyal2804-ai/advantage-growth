"use client";

import Image from "next/image";

export default function AdsPage() {
  return (
    <main className="font-sans bg-white">
      
      {/* MINIMAL HEADER - just logo, no nav */}
      <header className="flex justify-center items-center px-10 py-5 border-b">
        <Image
          src="/logo-new.png"
          alt="Advantage Growth"
          width={160}
          height={50}
          priority
        />
      </header>

      {/* HERO - CONVERSION FOCUSED */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Scale Your Brand with<br />Performance Marketing
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
          We help startups and brands generate qualified leads and sales through Meta Ads, Google Ads, and conversion-optimized funnels.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          🎯 ROI-Focused • 📈 Data-Driven • 🚀 Proven Results
        </p>
        
        {/* CTA Button - scrolls to form */}
        <a
          href="#contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-lg text-xl font-bold shadow-lg transition"
        >
          Get Your Free Strategy Session
        </a>
      </section>

      {/* BENEFITS - Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Brands Choose Advantage Growth
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Strategy</h3>
              <p className="text-gray-700">
                Every campaign is backed by analytics, A/B testing, and continuous optimization for maximum ROI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Performance-Based</h3>
              <p className="text-gray-700">
                We focus on results that matter - qualified leads, sales, and measurable business growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Full-Funnel Expertise</h3>
              <p className="text-gray-700">
                From ad creative to landing pages to follow-up - we optimize every step of your customer journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Do
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6 py-4">
              <h3 className="text-xl font-bold mb-2">Meta Ads (Facebook & Instagram)</h3>
              <p className="text-gray-700">
                Laser-targeted campaigns that reach your ideal customers and drive conversions at scale.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <h3 className="text-xl font-bold mb-2">Google Ads (Search & Display)</h3>
              <p className="text-gray-700">
                Capture high-intent buyers when they're actively searching for solutions like yours.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-4">
              <h3 className="text-xl font-bold mb-2">Lead Generation & Funnels</h3>
              <p className="text-gray-700">
                Custom landing pages and sales funnels designed to convert traffic into paying customers.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-4">
              <h3 className="text-xl font-bold mb-2">E-commerce Scaling</h3>
              <p className="text-gray-700">
                Growth strategies for Shopify, WooCommerce, and custom stores - from first sale to 7 figures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF (optional - add later when you have testimonials) */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by startups and growing brands to deliver measurable results through performance marketing.
        </p>
      </section>

      {/* CONTACT FORM - Main conversion point */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            Book a free 30-minute strategy call. We'll analyze your business and show you exactly how we can help you grow.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;

              const name = form.elements.name.value;
              const email = form.elements.email.value;
              const phone = form.elements.phone.value;
              const message = form.elements.message.value;

              // Send email via FormSubmit
              fetch("https://formsubmit.co/ajax/bhavna.advantagegrowth@gmail.com", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  phone,
                  message,
                  _subject: "🚀 New Lead from Ads Landing Page",
                  _captcha: "false",
                }),
              });

              // WhatsApp message
              const whatsappMessage = `Hi, I'm ${name}. Email: ${email}, Phone: ${phone}. ${message}`;
              window.open(
                `https://wa.me/917973888374?text=${encodeURIComponent(whatsappMessage)}`,
                "_blank",
                "noopener,noreferrer"
              );

              alert("Thanks! We'll contact you shortly.");
              form.reset();
            }}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name *"
              className="w-full border-2 border-gray-300 focus:border-orange-500 p-4 rounded-lg text-lg outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email *"
              className="w-full border-2 border-gray-300 focus:border-orange-500 p-4 rounded-lg text-lg outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              className="w-full border-2 border-gray-300 focus:border-orange-500 p-4 rounded-lg text-lg outline-none"
            />

            <textarea
              name="message"
              required
              placeholder="Tell us about your business and goals *"
              className="w-full border-2 border-gray-300 focus:border-orange-500 p-4 rounded-lg text-lg outline-none"
              rows="5"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-lg text-xl font-bold transition shadow-lg"
            >
              Get My Free Strategy Session →
            </button>

            <p className="text-sm text-gray-500 text-center">
              No spam. Just actionable growth insights tailored to your business.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER - Minimal */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="mb-2">© 2026 Advantage Growth. All rights reserved.</p>
        <p className="text-sm text-gray-400">
          Performance Marketing • Meta Ads • Google Ads • Lead Generation
        </p>
      </footer>

    </main>
  );
}