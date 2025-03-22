import { signIn } from "@/auth";
import { HugeiconsIcon } from "@hugeicons/react";
import { GoogleIcon } from "@hugeicons-pro/core-stroke-rounded";
import PrimaryButton from "./PrimaryButton";

const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <PrimaryButton type="submit">Sign in with Google</PrimaryButton>
    </form>
  );
};

export default SignInButton;
