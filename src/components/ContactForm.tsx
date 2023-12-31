import { useState } from "react";
import { SquareTag } from "./SquareTag";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      to_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_ku0b50f",
        "template_ua4ai4z",
        templateParams,
        "4xKm5AjvVuI-IFVqc"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <form
      className="flex flex-col justify-center items-center relative gap-4"
      onSubmit={handleSubmit}
    >
      <span className="text-darkPrimaryText max-w-screen-sm z-10 mb-5 relative">
        <label className="absolute -top-11">
          <SquareTag text="Contact" />
        </label>
        Have a question or want to work together? Leave your details and I'll
        get back to you as soon as possible.
      </span>

      <input
        className="text-darkSecondaryText bg-lighterDarkBackground text-sm border-l-4 border-l-solid border-l-transparent w-2/4 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-darkAccent focus:border-transparent"
        placeholder="Name"
        type="text"
        id="name"
        value={name}
        required
        onChange={(event) => setName(event.target.value)}
      />

      <input
        className="text-darkSecondaryText bg-lighterDarkBackground text-sm border-l-4 border-l-solid border-l-transparent w-2/4 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-darkAccent focus:border-transparent"
        placeholder="Email"
        type="email"
        id="email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
      />

      <textarea
        className="text-darkSecondaryText min-h-[130px] bg-lighterDarkBackground text-sm border-l-4 border-l-solid border-l-transparent w-2/4 h-36 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-darkAccent focus:border-transparent"
        id="message"
        value={message}
        required
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Message"
      />
      <button
        className="text-darkAccent text-lg mt-5 font-light border-2 border-solid border-darkAccent px-4 py-1 rounded hover:bg-darkAccent hover:text-darkBackground "
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
