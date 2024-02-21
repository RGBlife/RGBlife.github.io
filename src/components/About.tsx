import { TechGrid } from "./TechGrid";
import { HeaderText } from "./HeaderText";

export const About = () => {
  return (
    <>
      <section
        id="about"
        className="about-section flex flex-col justify-center items-start min-h-[90vh] pt-36 lg:pt-0 mt-24 md:mt-0"
      >
        <HeaderText text="About Me" />

        <p className="fade-effect">
          As a junior full stack software developer from South East England, I
          embrace lifelong learning and have a deep-rooted passion for web
          development. My tech journey began with my first computer as a child,
          evolved through building gaming PCs for friends and family during the
          pandemic, and culminated in my current pursuit of software
          development.
        </p>

        <p className="fade-effect">
          My career journey has taken me through various roles in eCommerce,
          primarily in the B2B sector, where I played a key role in tech support
          and testing for the UK's largest ergonomic chair supplier.
          Transitioning to a Junior CRM Developer role, my fascination with
          coding truly ignited, driving me to further explore the intricacies of
          software development.
        </p>
        <h2 className="text-darkSecondaryText text-lg my-3 fade-effect">
          My Toolkit Includes:
        </h2>
        <TechGrid />
      </section>
    </>
  );
};
