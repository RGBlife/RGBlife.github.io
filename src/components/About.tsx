import { SquareTag } from "./SquareTag";
import { TechGrid } from "./TechGrid";
import { Test } from "./Test";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export const About = () => {
  return (
    <>
      <section
        id="about"
        className="about-section flex flex-col justify-center items-start min-h-[90vh] mt-24 md:mt-0"
      >
        <div className="flex items-center w-full">
          <SquareTag text="About Me" />
        </div>
        <>
          <p className="max-w-screen-lg">
            As a junior full stack software developer from South East England, I
            embrace lifelong learning and have a deep-rooted passion for web
            development. My tech journey began with my first computer as a
            child, evolved through building gaming PCs for friends and family
            during the pandemic, and culminated in my current pursuit of
            software development.
          </p>

          <p className="max-w-screen-lg">
            My career journey has taken me through various roles in eCommerce,
            primarily in the B2B sector, where I played a key role in tech
            support and testing for the UK's largest ergonomic chair supplier.
            Transitioning to a Junior CRM Developer role, my fascination with
            coding truly ignited, driving me to further explore the intricacies
            of software development.
          </p>
          <h2 className="text-darkSecondaryText text-lg my-3">
            My Toolkit Includes:
          </h2>
          <TechGrid />
        </>
      </section>

    </>
  );
};
