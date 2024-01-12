import { MenuToggle } from "./MenuToggle";
import { useEffect, useState } from "react";

export const Nav = () => {
  const [currentSection, setCurrentSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "about", "projects", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top >= 0 && top < window.innerHeight / 2) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section: string) =>
    `text-darkPrimaryText hover:text-darkAccent font-semibold ${
      currentSection === section ? "highlight-class" : ""
    }`;

  return (
    <>
      <a
        href="#intro"
        className="text-darkAccent hover:text-darkHighlight mr-auto text-lg font-bold"
      >
        Bret.
      </a>
      <nav className="w-fit">
        <ol className="hidden md:flex items-center mx-auto px-4 justify-end gap-5 lg:gap-10 py-3">
          <a href="#about" className={linkClass("about")}>
            About
          </a>
          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>
          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>

          <a
            href="/bret-gomes-cv.pdf"
            target="_blank"
            className="text-darkAccent  border-2 border-solid border-darkAccent  px-4 py-1 rounded hover:bg-darkAccent hover:text-darkBackground font-semibold"
          >
            CV
          </a>
        </ol>
        <MenuToggle />
      </nav>
    </>
  );
};
