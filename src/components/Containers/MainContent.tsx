import { cn } from "@/lib/utils";

const MainContent = (props: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <main
      className={cn("min-h-screen h-full flex flex-col gap-4 md:gap-6 lg:gap-8 p-4 my-24 items-center", props.className)}
    >
      {props.children}
    </main>
  );
};

export default MainContent;
