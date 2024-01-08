import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faUpRightFromSquare";

type Props = {
  github?: string;
  demo?: string;
};
export function ProjectButtons({ github, demo }: Props) {
  return (
    <div className="flex gap-6 mt-2">
      <a
        href={demo}
        target="_blank"
        className="text-darkBackground text-base mt-2"
      >
        <FontAwesomeIcon icon={faUpRightFromSquare} className="h-8" />
      </a>
      <a
        href={github}
        target="_blank"
        className="text-darkBackground text-base mt-2"
      >
        <FontAwesomeIcon icon={faGithub} className="h-8" />
      </a>
    </div>
  );
}
