type Props = {
  text: string;
  children: React.ReactNode;
};

export const Tooltip = (props: Props) => {
  const { text, children } = props;
  return (
    <div className="relative group">
      {children}
      <span className="absolute hidden group-hover:block bg-darkAccent text-darkBackground p-2 rounded-md text-sm z-10">
        {text}
      </span>
    </div>
  );
};
