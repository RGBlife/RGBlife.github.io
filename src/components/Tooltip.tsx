type Props = {
  text: string;
  children: React.ReactNode;
};

export const Tooltip = (props: Props) => {
  const { text, children } = props;
  return (
    <div className="relative group">
      {children}
      <span className="absolute opacity-0 group-hover:opacity-100 bg-darkAccent text-darkBackground p-2 rounded-md text-sm z-10 transition-opacity duration-300 select-none pointer-events-none">
        {text}
      </span>
    </div>
  );
};
