import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// testing components out to debug

export const Test = () => {
  return (
    <>
      <div>
        <a href="https://github.com" target="_blank" className="border-effect-link1">
        <FontAwesomeIcon icon={faGithub} className="h-8 md:h-10" />
        </a>
      </div>
    </>
  );
};
