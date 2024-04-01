import { useState, useEffect } from "react";

export const MenuToggle = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const mainContent = document.getElementById("mainContent");

    if (mainContent) {
      if (menuVisible) {
        mainContent.classList.add("blur-sm");
        document.body.classList.add("no-scroll");
      } else {
        mainContent.classList.remove("blur-sm");
        document.body.classList.remove("no-scroll");
      }
    }
  }, [menuVisible]);

  const showMessage = () => {
    alert("CV removed for updates");
  };

  return (
    <>
      <div className="md:hidden h-14 flex justify-end">
        <label className="hamburger-menu md:hidden">
          <input type="checkbox" id="menuButton" onClick={toggleMenu} />
        </label>
      </div>

      {menuVisible && (
        <div
          className="h-full w-full fixed flex flex-col inset-0"
          onClick={toggleMenu}
        />
      )}
      <aside
        id="mobileMenu"
        className={`${
          menuVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        } fixed inset-y-0 right-0 w-64 bg-darkBackground shadow-lg transition-all duration-300 ease-in-out justify-center gap-10 items-center flex flex-col lg:hidden`}
      >
        <a
          href="#about"
          className="block text-darkPrimaryText hover:text-darkAccent font-semibold"
          onClick={toggleMenu}
        >
          About
        </a>
        <a
          href="#projects"
          className="block text-darkPrimaryText hover:text-darkAccent font-semibold"
          onClick={toggleMenu}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block text-darkPrimaryText hover:text-darkAccent font-semibold"
          onClick={toggleMenu}
        >
          Contact
        </a>
        {/* <a
          href="/bret-gomes-cv.pdf"
          target="_blank"
          className="text-darkAccent font-semibold hover:text-darkAccent hover:border-darkHighlight border-2 border-solid border-darkAccent px-4 py-1 rounded"
          onClick={toggleMenu}
        >
          CV
        </a> */}
        <a
          onClick={showMessage}
          className="text-darkAccent font-semibold hover:text-darkAccent hover:border-darkHighlight border-2 border-solid border-darkAccent px-4 py-1 rounded"
        >
          CV
        </a>
      </aside>
    </>
  );
};
