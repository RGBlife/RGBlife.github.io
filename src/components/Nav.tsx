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

  const linkClassNav = (section: string, animationOrder: number) => {
    const baseClass =
      "text-darkPrimaryText hover:text-darkAccent font-semibold";

    const cvClass =
      "text-darkAccent  border-2 border-solid border-darkAccent  px-4 py-1 rounded hover:bg-darkAccent hover:text-darkBackground font-semibold";
    const animationClass = `animate-slideInFromTop-${animationOrder}`;
    const highlightClass = currentSection === section ? "highlight-class" : "";

    return `${animationClass} ${
      animationOrder === 4 ? cvClass : baseClass
    } ${highlightClass}`;
  };

  return (
    <>
      <a
        href="#intro"
        className="text-darkAccent animate-fadeIn hover:text-darkHighlight mr-auto text-lg font-bold"
      >
        Bret.
      </a>
      <nav className="w-fit">
        <ol className="hidden md:flex items-center mx-auto px-4 justify-end gap-5 lg:gap-10 py-3">
          <a href="#about" className={linkClassNav("about", 1)}>
            About
          </a>
          <a href="#projects" className={linkClassNav("projects", 2)}>
            Projects
          </a>
          <a href="#contact" className={linkClassNav("contact", 3)}>
            Contact
          </a>

          <a
            href="/bret-gomes-cv.pdf"
            target="_blank"
            className={linkClassNav("cv", 4)}
          >
            CV
          </a>
        </ol>
        <MenuToggle />
      </nav>
    </>
  );
};
