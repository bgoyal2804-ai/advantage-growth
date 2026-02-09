{/* CONTACT */}
<section id="contact" className="py-20 px-6 text-center bg-white">
  <h2 className="text-4xl font-bold mb-6">Let’s Talk Growth</h2>

  <form
    action="https://formsubmit.co/bhavna.advantagegrowth@gmail.com"
    method="POST"
    onSubmit={(e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const message = form.message.value;

      // WhatsApp
      const whatsappMessage = `Hi, I'm ${name}. My email is ${email}. I need help with: ${message}`;
      window.open(
        `https://wa.me/917973888374?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );

      // Email (silent)
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      });

      // UX feedback
      alert("Thanks! We’ll contact you shortly.");

      // Optional: reset form
      form.reset();
    }}
    className="max-w-xl mx-auto space-y-4"
  >
    {/* FormSubmit config */}
    <input type="hidden" name="_subject" value="New Lead – Advantage Growth" />
    <input type="hidden" name="_replyto" value="email" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />

    {/* Inputs */}
    <input
      name="name"
      required
      placeholder="Your Name"
      className="w-full border p-3 rounded"
    />

    <input
      type="email"
      name="email"
      required
      placeholder="Your Email"
      className="w-full border p-3 rounded"
    />

    <textarea
      name="message"
      required
      placeholder="Tell us about your project"
      className="w-full border p-3 rounded"
      rows="4"
    ></textarea>

    <button
      type="submit"
      className="bg-black text-white px-8 py-3 rounded font-bold"
    >
      Submit
    </button>
  </form>
</section>
