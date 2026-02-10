export default function Page() {
  return (
    <>
      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6">Let's Talk Growth</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault(); // Stop default form behavior
            const form = e.currentTarget;

            const name = form.elements.name.value;
            const email = form.elements.email.value;
            const message = form.elements.message.value;

            // Send email via FormSubmit in the background
            fetch("https://formsubmit.co/ajax/bhavna.advantagegrowth@gmail.com", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: name,
                email: email,
                message: message,
                _subject: "New Lead – Advantage Growth",
                _captcha: "false",
              }),
            });

            // Open WhatsApp immediately without waiting
            const whatsappMessage =
              "Hi, I'm " + name + ". My email is " + email + ". I need help with: " + message;

            window.open(
              "https://wa.me/917973888374?text=" + encodeURIComponent(whatsappMessage),
              "_blank",
              "noopener,noreferrer"
            );

            // Reset form
            form.reset();
          }}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
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
          />

          <button type="submit" className="bg-black text-white px-8 py-3 rounded font-bold">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}