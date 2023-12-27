import { useState } from "react";

export const MenuToggle = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="md:hidden h-[58px] flex justify-end">
        <button
          id="menuButton"
          className="text-darkAccent z-10 p-2 focus:outline-none focus:ring"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="mobileMenu"
        className={`${
          menuVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        } fixed inset-y-0 right-0 w-64 bg-darkBackground shadow-lg transition-all duration-300 ease-in-out justify-center gap-10 items-center flex flex-col lg:hidden`}
      >
        <a
          href="#about"
          className="block text-darkPrimaryText hover:text-darkAccent"
          onClick={toggleMenu}
        >
          Home
        </a>
        <a
          href="#projects"
          className="block text-darkPrimaryText hover:text-darkAccent"
          onClick={toggleMenu}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block text-darkPrimaryText hover:text-darkAccent"
          onClick={toggleMenu}
        >
          Contact
        </a>
        <a
          href="#cv"
          className="text-darkAccent hover:text-darkAccent hover:border-darkHighlight border-2 border-solid border-darkAccent px-4 py-1 rounded"
          onClick={toggleMenu}
        >
          CV
        </a>
      </div>
    </>
  );
};
