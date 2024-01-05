export const TechGrid = () => {
  const techs = [
    { icon: "/HTML5_logo.png", name: "HTML" },
    { icon: "/CSS3_logo.svg", name: "CSS" },
    { icon: "/React-icon.svg", name: "React" },
    { icon: "/Node.js_logo.svg", name: "Node.js" },
    { icon: "/expressjs-icon.svg", name: "Express.js" },
    { icon: "/JavaScript_logo.svg", name: "JavaScript" },
    { icon: "/Typescript_logo_2020.svg", name: "TypeScript" },
    { icon: "/jestjsio-icon.svg", name: "Jest" },
  ];

  return (
    <div className="grid grid-cols-6 gap-4 p-5 w-full">
      {techs.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-md border-solid border-2 border-darkAccent py-4 px-4"
        >
          <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
          <p className="text-sm mt-2 font-semibold">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};
