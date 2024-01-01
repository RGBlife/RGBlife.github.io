import { SquareTag } from "./SquareTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-start min-h-[90vh] p-0"
    >
      <div className="flex items-center w-full">
        <SquareTag text="About Me" />
      </div>

      <p className="max-w-screen-lg">
        I'm a self-taught software developer from the South East of England, I
        embarked on my tech journey in 2022 where my passion for coding ignited
        during my time as a junior developer, where I helped businesses automate
        their workflows using{" "}
        <a
          className="text-darkAccent underline font-normal decoration-solid"
          href="https://www.zoho.com/deluge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deluge
        </a>
        (a scripting language) and JavaScript within the{" "}
        <a
          className="text-darkAccent underline font-normal decoration-solid"
          href="https://www.zoho.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zoho Ecosystem
        </a>
        . This experience deepened my interest in tech and motivated me to delve
        further into software development.
      </p>

      <p className="max-w-screen-lg">
        I'm currently focused on enhancing my full-stack development skills and
        am currently exploring in ultising C#/.NET for my next project,
        attracted by its static typing and strong backend capabilities.
      </p>
      <h2 className="text-darkSecondaryText text-lg my-3">
        My Toolkit Includes:
      </h2>
      <ul className="flex-wrap">
        <li>
          <img
            src="/Typescript_logo_2020.svg"
            alt="TypeScript Logo"
            style={{ height: "24px" }}
          />
          <strong className="mx-1">TypeScript & JavaScript:</strong>For robust
          and dynamic applications.
        </li>
        <li>
          <img
            src="React-icon.svg"
            alt="React Logo"
            style={{ height: "24px" }}
          />
          <strong className="mx-1">React:</strong> Crafting interactive user
          interfaces.
        </li>
        <li>
          <img
            src="/Node.js_logo.svg"
            alt="Node JS Logo"
            style={{ height: "24px" }}
          />
          <strong className="mx-1">Node.js:</strong> Building efficient back-end
          services.
        </li>
        <li>
          <img
            src="/Tailwind_CSS_Logo.svg"
            alt="Tailwind CSS Logo"
            style={{ height: "24px" }}
          />
          <strong className="mx-1">Tailwind:</strong> Designing stylish and
          responsive layouts.
        </li>
      </ul>
      <div className="border-solid border-amber-800 border-2 p-5">
        <FontAwesomeIcon icon={faReact} style={{color: "#5779b2",}} />
        <p>React</p>
      </div>
    </section>
  );
};
