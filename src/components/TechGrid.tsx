import { useState } from "react";
import { Tooltip } from "react-tooltip";

export const TechGrid = () => {
  const [hovered, setHovered] = useState(false);

  const techs = [
    { icon: "/HTML5_logo.png", name: "HTML" },
    { icon: "/CSS3_logo.svg", name: "CSS" },
    { icon: "/JavaScript_logo.svg", name: "JavaScript" },
    { icon: "/Typescript_logo_2020.svg", name: "TypeScript" },
    { icon: "/React-icon.svg", name: "React" },
    { icon: "/Node.js_logo.svg", name: "Node.js" },
    { icon: "/expressjs-icon.svg", name: "Express.js" },
    { icon: "/jestjsio-icon.svg", name: "Jest" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-5 w-full drop-shadow-md">
      {techs.map((tech, index) => (
        <div
          key={index}
          data-tooltip-id={`"<tooltip ${index}>"`}
          data-tooltip-content="Hello world!"
          data-tooltip-place="top"
          className="flex flex-col items-center py-4 px-4 border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-darkAccent rounded-md"
        >
          <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
          <p className="text-sm mt-2 font-semibold">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};
