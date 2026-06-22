import { useState } from "react";
import { motion } from "motion/react";

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
      setResult("Error sending message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { id: "firstName", label: "First Name", name: "first_name", type: "text" },
    { id: "lastName", label: "Last Name", name: "last_name", type: "text" },
    { id: "email", label: "Email", name: "email", type: "email" },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <div className="pt-32 px-6 md:px-12 max-w-2xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>

        <motion.form
          onSubmit={onSubmit}
          className="bg-neutral-900 p-8 rounded-xl shadow-lg space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {fields.map(({ id, label, name, type }, i) => (
            <motion.div
              key={id}
              className="flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
            >
              <label htmlFor={id} className="mb-2 font-semibold text-neutral-200">
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={name}
                required
                className="p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:border-neutral-400 focus:outline-none transition"
              />
            </motion.div>
          ))}

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.44, duration: 0.4 }}
          >
            <label htmlFor="message" className="mb-2 font-semibold text-neutral-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:border-neutral-400 focus:outline-none transition resize-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full border border-white text-white font-semibold py-3 rounded-md uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </motion.button>

          {result && (
            <motion.p
              className="mt-4 text-center text-green-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {result}
            </motion.p>
          )}
        </motion.form>

        <footer className="border-t border-neutral-700 py-10 text-center text-xs uppercase tracking-widest text-neutral-400 mt-32 space-y-2">
          <div>© {new Date().getFullYear()} Joey Lourens</div>
          <div>joeylourens64@gmail.com</div>
          <div>+31 6 38 09 73 91</div>
        </footer>
      </div>
    </main>
  );
};

export default Contact;