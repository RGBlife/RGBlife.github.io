type Props = {
  text: string;
};

export const HeaderText = ({ text }: Props) => {
  return (
    <h1 className="relative self-start text-2xl md:text-4xl mb-4 font-bold text-darkSecondaryText before:content-[' '] before:absolute before:bg-darkAccent before:w-1/2 before:h-[5px] before:right-0 before:bottom-0 before:-z-10 fade-effect">
      {text}
    </h1>
  );
};
