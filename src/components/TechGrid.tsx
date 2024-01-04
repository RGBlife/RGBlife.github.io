import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faGitAlt,
  faJsSquare,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

export const TechGrid = () => {
  const techs = [
    { icon: faHtml5, name: "HTML", colour: "text-red-500" },
    { icon: faCss3Alt, name: "CSS", colour: "text-blue-500" },
    { icon: faReact, name: "React", colour: "text-blue-500" },
    { icon: faNodeJs, name: "NodeJS", colour: "text-green-500" },
    { icon: faGitAlt, name: "GIT", colour: "text-orange-500" },
    { icon: faJsSquare, name: "JavaScript", colour: "text-yellow-500" },
    { icon: faJsSquare, name: "TypeScript", colour: "text-blue-500" },
    { icon: faNpm, name: "npm", colour: "text-red-500" },
    { icon: faJsSquare, name: "Jest", colour: "text-red-500" },
  ];

  return (
      <div className="grid grid-cols-9 gap-4 p-5 w-full">
        {techs.map((tech, index) => (
          <div key={index} className="flex flex-col items-center rounded border-solid border-2 border-darkAccent p-4">
            <FontAwesomeIcon
              icon={tech.icon}
              className={`${tech.colour} text-4xl text-darkAccent`}
            />
            <p className="text-sm mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
  );
};
