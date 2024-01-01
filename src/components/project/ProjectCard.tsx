import type { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = {
  title: string;
  img: string;
  description: string;
  side?: "left" | "right";
};

export function ProjectCard({
  title,
  description,
  img,
  side = "left",
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4">
      <div
        className={clsx("flex-shrink-0 relative", {
          "lg:order-1": side === "right",
          "lg:order-2": side === "left",
        })}
      >
        <img
          className="w-full md:w-auto md:max-w-md object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          src={img}
          alt={title}
        />
      </div>
      <div
        className={clsx(
          "flex flex-col mt-4 md:mt-0 bg-darkAccent z-10 p-4 shadow-lg",
          {
            "md:ml-[-100px] lg:order-2": side === "right",
            "md:mr-[-100px] lg:order-1": side === "left",
          }
        )}
      >
        <h2 className="text-darkBackground text-xl font-semibold">{title}</h2>
        <p className="text-darkBackground text-base mt-2">{description}</p>
        {children}
      </div>
    </div>
  );
}
