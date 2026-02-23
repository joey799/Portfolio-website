import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "dd5f202b-17e4-4f1d-b8f8-3c7447cd4a05");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully.");
        event.target.reset();
      } else {
        setResult("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error sending message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* PAGE CONTENT */}
      <div className="pt-32 px-6 md:px-12 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
          Contact Me
        </h1>

        <form
          onSubmit={onSubmit}
          className="bg-neutral-900 p-8 rounded-xl shadow-lg space-y-6"
        >
          {/* First Name */}
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="mb-2 font-semibold text-neutral-200"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              required
              className="p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:border-neutral-500 focus:outline-none transition"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="mb-2 font-semibold text-neutral-200"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="last_name"
              required
              className="p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:border-neutral-500 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 font-semibold text-neutral-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:border-neutral-500 focus:outline-none transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="mb-2 font-semibold text-neutral-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:border-neutral-500 focus:outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-3 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>

          {/* Result Message */}
          {result && (
            <p className="mt-4 text-center text-green-500 font-medium">{result}</p>
          )}
        </form>

        {/* FOOTER */}
{/* FOOTER */}
<footer className="border-t border-neutral-700 py-10 text-center text-xs uppercase tracking-widest text-neutral-400 mt-32 space-y-2">
  <div>© {new Date().getFullYear()} Joey Lourens</div>
  <div>joeylouresns64@gmail.com</div>
  <div>+31 6 38 09 73 91</div>
</footer>

      </div>
    </main>
  );
};

export default Contact;
