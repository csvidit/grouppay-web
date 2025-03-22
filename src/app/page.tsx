import { auth } from "@/auth";
import LandingPage from "@/components/Screens/LandingPage";
import { redirect } from "next/navigation";

const IndexRoute = async () =>{

  const session = await auth();

  if(session)
  {
    redirect("/dashboard")
  }

  return <LandingPage />;
}

export default IndexRoute;