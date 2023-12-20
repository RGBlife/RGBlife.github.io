import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <form className="flex flex-col justify-center items-center " onSubmit={handleSubmit}>
      <label className="text-darkSecondaryText text-lg mt-5 font-light" htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label className="text-darkSecondaryText text-lg mt-5 font-light" htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label className="text-darkSecondaryText text-lg mt-5 font-light" htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button className="text-darkSecondaryText text-lg mt-5 font-light" type="submit">Submit</button>
    </form>
  );
};
