type Props = {
  github?: string;
  demo?: string;
};
export function ProjectButtons({ github, demo }: Props) {
  return (
    <div className="flex gap-10">
      <a href={demo} className="text-darkBackground text-base mt-2">
        Demo Link
      </a>
      <a className="text-darkBackground text-base mt-2">
        Github Link
      </a>
    </div>
  );
}
