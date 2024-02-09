import { ProjectButtons } from "../ProjectButtons";
import clsx from "clsx";

type Props = {
  title: string;
  img: string;
  description: string;
  techUsed: string[];
  github: string;
  demo?: string;
  side?: "left" | "right";
};

export function ProjectCard({
  title,
  description,
  techUsed,
  img,
  github,
  demo,
  side = "left",
}: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 fade-effect">
      <div
        className={clsx("flex-shrink-0 relative", {
          "lg:order-1": side === "right",
          "lg:order-2": side === "left",
        })}
      >
        <a href={demo} target="_blank" aria-label={`${title} demo image`}>
          <img
            loading="lazy"
            sizes="(max-width: 300px) 280px, (max-width: 768px) 740px, 1280px"
            src={img}
            alt={title}
            className="w-full md:w-auto md:max-w-md md:max-h-96 object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </a>
      </div>
      <div
        className={clsx(
          "flex flex-col md:mt-0 bg-darkAccent z-10 p-4 shadow-lg rounded",
          {
            "md:ml-[-100px] lg:order-2": side === "right",
            "md:ml-[-100px] lg:ml-0 lg:mr-[-100px] lg:order-1": side === "left",
          }
        )}
      >
        <h2 className="text-darkBackground text-xl font-semibold">{title}</h2>
        <p className="text-darkBackground text-base mt-2 mb-2">{description}</p>
        <ul className="flex gap-2 flex-wrap my-2">
          {techUsed.map((tech) => {
            return (
              <li
                key={tech}
                className="mt-0 text-darkSecondaryText text-sm border-solid shadow-md bg-darkBackground py-1 px-3 rounded-full"
              >
                {tech}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-2"></div>
        {<ProjectButtons github={github} demo={demo} />}
      </div>
    </div>
  );
}
