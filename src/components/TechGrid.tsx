import { Tooltip } from "./Tooltip";

export const TechGrid = () => {
  const techs = [
    {
      icon: "/HTML5_logo.png",
      name: "HTML",
      description:
        "Learned from an early stage. I always strive to keep HTML as semantic as possible.",
    },
    {
      icon: "/CSS3_logo.svg",
      name: "CSS",
      description:
        "Grew alongside my HTML skills. Evolved to using Tailwind, my go-to CSS framework now.",
    },
    {
      icon: "/JavaScript_logo.svg",
      name: "JavaScript",
      description:
        "My first programming language, picked up in my Junior CRM Developer role and refined during the Northcoders Bootcamp.",
    },
    {
      icon: "/Typescript_logo_2020.svg",
      name: "TypeScript",
      description:
        "Advanced my JavaScript skills by embracing TypeScript for its robust typing and scalability, especially during the Northcoders Bootcamp.",
    },
    {
      icon: "/React-icon.svg",
      name: "React",
      description:
        "Started using React for side projects and later extensively during the Northcoders Bootcamp. It's key to my front-end development work.",
    },
    {
      icon: "/Node.js_logo.svg",
      name: "Node.js",
      description:
        "Gained proficiency in Node.js during the Northcoders Bootcamp, focusing on building efficient back-end services.",
    },
    {
      icon: "/expressjs-icon.svg",
      name: "Express.js",
      description:
        "Learned as part of server-side development with Node.js during the Northcoders Bootcamp.",
    },
    {
      icon: "/jestjsio-icon.svg",
      name: "Jest",
      description:
        "Acquired skills in writing tests using Jest wih the Test Driven Development (TDD) approach at the Northcoders Bootcamp, enhancing my ability to write more reliable code.",
    },
  ];

  return (
    <>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 w-full fade-effect">
        {techs.map((tech, index) => (
          <Tooltip key={index} text={tech.description}>
            <div
              key={index}
              className="flex flex-col items-center py-4 px-4 border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-darkAccent rounded-md"
            >
              <img src={tech.icon} alt={tech.name} className="w-16 h-16" />

              <p className="text-sm mt-2 font-semibold">{tech.name}</p>
            </div>
          </Tooltip>
        ))}
      </div>
    </>
  );
};
