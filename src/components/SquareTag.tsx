type Props = {
  text: string;
  animation?: string;
};

export const SquareTag = ({ text, animation }: Props) => {
  return (
    <h1 className={`text-darkBackground p-3 bg-darkAccent text-sm font-bold -rotate-12 -ml-4 -mb-2 rounded-sm ${animation}`}>
      {text}
    </h1>
  );
};
