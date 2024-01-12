import { MenuToggle } from "./MenuToggle";

export const Nav = () => {
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
          <a
            href="#about"
            className="text-darkPrimaryText hover:text-darkAccent font-semibold"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-darkPrimaryText hover:text-darkAccent font-semibold" 
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-darkPrimaryText hover:text-darkAccent font-semibold" 
          >
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
