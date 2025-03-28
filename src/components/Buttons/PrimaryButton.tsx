const PrimaryButton = (props: {
  onClick?: any;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button onClick={props.onClick} className="rounded-md bg-emerald-950 bg-opacity-40 text-emerald-500 px-4 py-2 inline-flex items-center gap-2 hover:bg-opacity-80 transition-all duration-200 ease-in-out">
      {props.children}
    </button>
  );
};

export default PrimaryButton;
