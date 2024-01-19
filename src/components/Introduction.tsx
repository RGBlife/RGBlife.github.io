import { SquareTag } from "./SquareTag";
import { linkClass } from "src/utils/linkClass";

export const Introduction = () => {
  return (
    <section id="intro" className="flex flex-col justify-center items-start min-h-[90vh] p-0 mt-12 md:mt-0">
      <SquareTag text="Hello, my name is" animation="animate-fadeUp-1" />
      <h2 className={linkClass("text-darkSecondaryText z-10 text-4xl md:text-7xl font-semibold mt-2 md:mt-0",2)}>
        Bret Gomes
      </h2>
      <h3 className={linkClass("text-darkPrimaryText text-4xl md:text-7xl font-semibold mt-1",3)}>
        Junior Full Stack Developer
      </h3>
      <p className={linkClass("text-darkSecondaryText mt-5 text-left max-w-screen-sm",4)}>
        I'm interested in helping engineer the future of software and web
        applications with a keen interest in user experience. Currently, At the
        moment, I'm all about getting my hands dirty with personal projects,
        playing around with new tech, and quenching my thirst for making things
        happen.
      </p>
    </section>
  );
};
