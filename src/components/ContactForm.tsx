import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { HeaderText } from "./HeaderText";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({
    success: false,
    error: false,
    animating: false,
    message: "",
  });

  useEffect(() => {
    if (submissionStatus.error) {
      setSubmissionStatus({
        success: false,
        error: false,
        animating: false,
        message: "",
      });
    }
  }, [name, email, message]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

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
          setLoading(false);
          setSubmissionStatus({
            success: true,
            error: false,
            animating: true,
            message: "Thank you for your message!",
          });
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setSubmissionStatus((prev) => ({ ...prev, animating: false }));
          }, 3000);
        },
        (error) => {
          setLoading(false);
          setSubmissionStatus({
            success: false,
            error: true,
            animating: true,
            message: "Failed to send the message. Please try again later.",
          });
        }
      );
  };

  return (
    <form
      className="flex flex-col justify-center items-center relative gap-4 fade-effect"
      onSubmit={handleSubmit}
    >
          <h1 className="relative self-center text-2xl md:text-4xl font-bold text-darkSecondaryText before:content-[' '] before:absolute before:bg-darkAccent before:w-1/2 before:h-[5px] before:right-0 before:bottom-0 before:-z-10 fade-effect">
      Contact
    </h1>

      <p className="text-darkPrimaryText max-w-screen-sm mt-0 pt-2 z-10 mb-5 relative">
        Have a question or want to work together? Leave your details and I'll
        get back to you as soon as possible.
      </p>

      <input
        className="text-darkSecondaryText bg-lighterDarkBackground text-sm border-l-4 border-l-solid border-l-transparent w-full px-3 md:w-2/4 py-1 rounded focus:outline-none focus:ring-2 focus:ring-darkAccent focus:border-transparent"
        placeholder="Name"
        type="text"
        id="name"
        value={name}
        required
        aria-label="Name"
        onChange={(event) => setName(event.target.value)}
      />

      <input
        className="text-darkSecondaryText bg-lighterDarkBackground text-sm border-l-4 border-l-solid border-l-transparent w-full px-3 md:w-2/4 py-1 rounded focus:outline-none focus:ring-2 focus:ring-darkAccent focus:border-transparent"
        placeholder="Email"
        type="email"
        id="email"
        value={email}
        required
        aria-label="Email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <textarea
        className="text-darkSecondaryText min-h-[130px] bg-lighterDarkBackground text-sm border-l-4 border-l-solid border-l-transparent w-full px-3 md:w-2/4 h-36 py-1 rounded focus:outline-none focus:ring-2 focus:ring-darkAccent focus:border-transparent"
        id="message"
        value={message}
        required
        aria-label="Message"
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Message"
      />

      <button
        className="text-darkAccent text-lg mt-5 mb-5 font-light border-2 border-solid border-darkAccent px-4 py-1 rounded hover:bg-darkAccent hover:text-darkBackground "
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <>
            <FontAwesomeIcon
              icon={faSpinner}
              className="animate-spin h-5 w-5 mr-3"
            />
            Sending...
          </>
        ) : (
          "Submit"
        )}
      </button>
      {submissionStatus.animating && (
        <p
          className={`absolute bottom-0 text-sm mt-2 ${
            submissionStatus.success ? "text-green-500" : "text-red-500"
          } ${submissionStatus.success ? "slide-up" : ""}`}
        >
          {submissionStatus.message}
        </p>
      )}
    </form>
  );
};
