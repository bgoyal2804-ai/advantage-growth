"use client";

import Image from "next/image";

export default function Page() {
  return (
    <main className="font-sans">

      {/* HEADER - Mobile Optimized */}
      <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 md:py-5 border-b gap-4">
        <Image
          src="/logo-new.png"
          alt="Advantage Growth"
          width={140}
          height={45}
          priority
          className="w-32 md:w-40"
        />
        <nav className="flex gap-4 md:gap-6 font-semibold text-sm md:text-base">
          <a href="#services" className="hover:text-orange-500">Services</a>
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </nav>
      </header>

      {/* HERO - Mobile First */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16 md:py-28 px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Performance-Driven Paid Advertising That Delivers Measurable Results
        </h1>
        <p className="text-base md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
          We help service-based businesses and growing brands generate consistent leads and sales through Meta and Google Ads—with full transparency and data-backed strategy.
        </p>
        <a
          href="#contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 px-6 md:px-8 py-3 md:py-4 rounded text-base md:text-lg font-bold transition"
        >
          Get a Free Strategy Call
        </a>
      </section>

      {/* SERVICES - Mobile Grid */}
      <section id="services" className="py-12 md:py-20 px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          What We Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Meta Ads",
              desc: "Facebook & Instagram campaigns that reach your ideal customers and drive conversions."
            },
            {
              title: "Google Ads",
              desc: "Search and display campaigns that capture high-intent buyers actively looking for solutions."
            },
            {
              title: "Lead Generation",
              desc: "Strategic funnels designed to convert traffic into qualified leads and sales."
            },
            {
              title: "Campaign Optimisation",
              desc: "Continuous testing and refinement to improve performance and lower cost per acquisition."
            },
          ].map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 p-6 md:p-8 rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH - New Section */}
      <section className="bg-gray-50 py-12 md:py-20 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Our Approach
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-10 leading-relaxed">
            We focus on building advertising systems that support sustainable business growth. Every campaign is guided by clear strategy, precise audience targeting, accurate conversion tracking, and continuous optimisation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Strategy-Led</h3>
              <p className="text-sm text-gray-600">
                Every campaign starts with understanding your business objectives and target audience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-lg mb-2">Data-Driven</h3>
              <p className="text-sm text-gray-600">
                Decisions backed by accurate tracking, testing, and real performance metrics—not vanity numbers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-bold text-lg mb-2">Continuous Optimisation</h3>
              <p className="text-sm text-gray-600">
                Ongoing refinement to improve results and reduce cost per lead or sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT - Updated Copy */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About AdVantage Growth
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            AdVantage Growth is a performance-driven paid advertising agency focused on helping businesses generate consistent leads and sales through Meta and Google Ads.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            We work with service-based businesses and growing brands that want measurable outcomes from their ad spend—not vanity metrics. Our approach is rooted in clear strategy, precise audience targeting, accurate conversion tracking, and continuous optimisation.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We partner with clients who value clarity, accountability, and results, helping them make smarter decisions with paid advertising.
          </p>
        </div>
      </section>

      {/* CONTACT - Mobile Optimized Form */}
      <section id="contact" className="py-12 md:py-20 px-4 md:px-6 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
          Let's Talk Growth
        </h2>
        <p className="text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
          Book a free strategy call. We'll discuss your business goals and show you how paid advertising can drive measurable results.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;

            const name = form.elements.name.value;
            const email = form.elements.email.value;
            const message = form.elements.message.value;

            // Send email via FormSubmit (AJAX)
            fetch("https://formsubmit.co/ajax/bhavna.advantagegrowth@gmail.com", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                message,
                _subject: "New Lead – AdVantage Growth",
                _captcha: "false",
              }),
            });

            // WhatsApp message
            const whatsappMessage = `Hi, I'm ${name}. My email is ${email}. ${message}`;
            window.open(
              `https://wa.me/917973888374?text=${encodeURIComponent(
                whatsappMessage
              )}`,
              "_blank",
              "noopener,noreferrer"
            );

            alert("Thanks! We'll contact you shortly.");
            form.reset();
          }}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full border-2 border-gray-300 focus:border-orange-500 p-3 md:p-4 rounded-lg outline-none text-base"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full border-2 border-gray-300 focus:border-orange-500 p-3 md:p-4 rounded-lg outline-none text-base"
          />

          <textarea
            name="message"
            required
            placeholder="Tell us about your business and goals"
            className="w-full border-2 border-gray-300 focus:border-orange-500 p-3 md:p-4 rounded-lg outline-none text-base"
            rows="4"
          />

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition text-base md:text-lg"
          >
            Get Your Free Strategy Call
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 md:py-8 text-center px-4">
        <p className="text-sm md:text-base mb-2">© 2026 AdVantage Growth. All rights reserved.</p>
        <p className="text-xs md:text-sm text-gray-400">
          Performance-Driven Paid Advertising • Meta Ads • Google Ads • Lead Generation
        </p>
      </footer>

      {/* FLOATING WHATSAPP - Mobile Optimized */}
      <a
        href="https://wa.me/917973888374"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path d="M16 2C8.3 2 2 8.3 2 16c0 2.5.7 4.9 1.9 7l-2 6.1 6.3-2c2 1.1 4.3 1.7 6.8 1.7 7.7 0 14-6.3 14-14S23.7 2 16 2z" />
        </svg>
      </a>

    </main>
  );
}