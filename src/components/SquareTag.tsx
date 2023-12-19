type Props = {
  text: string;
};

export const SquareTag = ({ text }: Props) => {
  return (
    <h1 className="text-darkBackground p-3 bg-darkAccent text-sm font-bold -rotate-12 -ml-4 -mb-2">
      {text}
    </h1>
  );
};
