import React, { useState } from "react";

export const PremiumContact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: handle form submission (e.g., send to API)
    console.log({ name, email, message });
  };

  return (
    <section className="relative bg-white min-h-screen" id="contact-section">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-screen">
        {/* Left Hook */}
        <div className="flex flex-col justify-center p-12 md:sticky md:top-0 bg-white">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111111] leading-tight">
            Got a project in mind?
          </h1>
          <p className="mt-4 text-xl text-[#888888]">
            Let's make something happen together
          </p>
        </div>
        {/* Right Form */}
        <div className="flex items-center justify-center p-12">
          <form className="w-full max-w-lg space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-md text-[#111111] placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-black transition"
                required
              />
            </div>
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-md text-[#111111] placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-black transition"
                required
              />
            </div>
            {/* Message */}
            <div className="relative">
              <textarea
                placeholder="Project Description"
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-md text-[#111111] placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-black transition resize-none"
                required
              />
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#111111] text-white rounded-md hover:scale-95 transform transition"
            >
              Send Request
              <span className="inline-block transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
