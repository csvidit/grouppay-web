import { auth } from "@/auth";
import DashboardPage from "@/components/Screens/DashboardPage";
import { redirect } from "next/navigation";

const DashboardRoute = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return <DashboardPage />;
};

export default DashboardRoute;
