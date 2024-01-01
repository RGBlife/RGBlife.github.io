import { MenuToggle } from "./MenuToggle";

export const Nav = () => {
  return (
    <>
      <a
        href="#"
        className="text-darkAccent hover:text-darkHighlight mr-auto text-lg font-semibold"
      >
        Bret.
      </a>
      <nav className="w-fit">
        <ol className="hidden md:flex items-center mx-auto px-4 justify-end gap-5 py-3">
          <a
            href="#about"
            className="text-darkPrimaryText hover:text-darkAccent"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-darkPrimaryText hover:text-darkAccent"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-darkPrimaryText hover:text-darkAccent"
          >
            Contact
          </a>
          <a
            href="#cv"
            className="text-darkAccent border-2 border-solid border-darkAccent px-4 py-1 rounded hover:bg-darkAccent hover:text-darkBackground"
          >
            CV
          </a>
        </ol>
        <MenuToggle />
      </nav>
    </>
  );
};
