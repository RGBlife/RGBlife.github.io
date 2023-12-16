import React, { useState } from "react";

interface MenuToggleProps {
  children: React.ReactNode;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="md:hidden flex justify-end">
        <button id="menuButton" className="text-white" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div id="mobileMenu" className={menuVisible ? "" : "hidden"}>
        {children}
      </div>
    </>
  );
};

export default MenuToggle;
