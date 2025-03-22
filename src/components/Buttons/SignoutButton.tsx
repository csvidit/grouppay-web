import { signOut } from "@/auth";
import PrimaryButton from "./PrimaryButton";

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut("google");
      }}
    >
      <PrimaryButton type="submit">Sign out</PrimaryButton>
    </form>
  );
};

export default SignOutButton;
