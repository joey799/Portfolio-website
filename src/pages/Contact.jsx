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
        setResult("Something went wrong, Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error sending message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={onSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="first_name" required />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="last_name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>

        <p className="result-message">{result}</p>
      </form>
    </div>
    
  );
};

export default Contact;