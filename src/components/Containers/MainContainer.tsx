const MainContainer = (props: { children: React.ReactNode }) => {
    return (
      <body className="w-full h-full min-w-screen min-h-screen max-w-screen bg-neutral-950 flex flex-col text-gray-100 leading-relaxed">{props.children}</body>
    );
  };
  
  export default MainContainer;
  