import { SquareTag } from "./SquareTag";
export const Introduction = () => {
  return (
    <section className="flex flex-col justify-center items-start min-h-[90vh] p-0">
      <SquareTag text="Hello, my name is" />
      <h2 className="text-darkSecondaryText z-10 text-7xl font-semibold">
        Bret Gomes
      </h2>
      <h3 className="text-darkPrimaryText text-7xl font-semibold mt-1">
        Junior Full Stack Developer
      </h3>
      <p className="text-darkSecondaryText text-lg mt-5 text-left max-w-screen-sm">
        I'm interested in helping engineer the future of software and web
        applications with a keen interest in user experience. Currently, I'm
        building an array of personal projects to explore new technologies and
        solve everyday problems.
      </p>
    </section>
  );
};
