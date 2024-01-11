import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faUpRightFromSquare";

type Props = {
  github?: string;
  demo?: string;
};
export function ProjectButtons({ github, demo }: Props) {
  return (
    <div className="flex gap-6 mt-2 justify-start">
      <a
        href={demo}
        target="_blank"
        className="border-effect-link mt-2 w-8 h-12 md:w-9 md:h-9 flex justify-center items-center rounded-sm"
      >
        <FontAwesomeIcon icon={faUpRightFromSquare} className="h-8 md:h-10" />
      </a>
      <a
        href={github}
        target="_blank"
        className="border-effect-link mt-2"
      >
        <FontAwesomeIcon icon={faGithub} className="h-8 md:h-10" />
      </a>
    </div>
  );
}
