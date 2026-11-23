import React from "react";

const Contactinfo = () => {
  const [result, setResult] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "b1900b87-8219-484a-a03a-3facae389755");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Your message has been sent.");
        event.target.reset();
      } else {
        setResult("Error! Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network Error! Please email me directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pink-500/50 text-[#1A1110]"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-block border-2 border-pink-500 px-8 py-3 shadow-[4px_4px_0px_0px_#db2777]">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase font-poppins">
              Get In Touch
            </h2>
          </div>
          <p className="text-neutral-600 max-w-xl mx-auto text-base">
            Have a junior frontend or full-stack opportunity, project idea, or
            just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-black/70 border border-pink-500 rounded-2xl p-8 space-y-6 shadow-[0px_0px_5px_0px_#db2777]">
            <h3 className="text-xl font-bold text-pink-500">
              Let&apos;s Connect
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              I&apos;m actively looking for entry-level opportunities and
              collaborations where I can build responsive, accessible web
              applications with React, JavaScript, Tailwind CSS, and Node.js.
            </p>
            <div className="space-y-4 text-sm">
              <a
                href="https://github.com/nangkyalsinthwe"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/10 hover:border-pink-500/60 transition"
              >
                <span className="font-semibold text-white">Github</span>
                <span className="text-pink-400 font-medium">
                  @nangkyalsinthwe ↗
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/nangkyalsinthwe"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/10 hover:border-pink-500/60 transition"
              >
                <span className="font-semibold text-white">LinkedIn</span>
                <span className="text-pink-400 font-medium">Connect ↗</span>
              </a>

              <a
                href="mailto:kyalsinthwe178@gmail.com?subject=Portfolio%20Inquiry"
                className="flex items-center justify-between gap-2 p-4 rounded-xl bg-black/40 border border-white/10 hover:border-pink-500/60 transition"
              >
                <span className="font-semibold text-white shrink-0">Email</span>
                <span className="text-pink-400 font-medium break-all text-right">
                  kyalsinthwe178@gmail.com ↗
                </span>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-white text-[#1a1110] rounded-2xl shadow-xl p-8 shadow-pink-600/10 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-neutral-800 mb-1.5"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-neutral-800 mb-1.5"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-neutral-800 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-pink-600/30 transition duration-200 cursor-pointer"
            >
              {isSending ? "Sending..." : "Send Message →"}
            </button>
            {result && (
              <p className="text-xs font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded-xl px-4 py-3">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactinfo;
