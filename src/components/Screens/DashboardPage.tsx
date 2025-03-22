import { auth } from "@/auth";
import SignOutButton from "../Buttons/SignoutButton";
import MainContent from "../Containers/MainContent";

const DashboardPage = async () => {

  const session = await auth();

  return (
    <MainContent className="">
      <h1 className="text-4xl tracking-tighter">Dashboard</h1>
      <p>Welcome, {session?.user?.name}</p>
      <SignOutButton/>
    </MainContent>
  );
};

export default DashboardPage;