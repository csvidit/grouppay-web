import SignInButton from "../Buttons/SigninButton";
import MainContent from "../Containers/MainContent";

const LandingPage = () => {
  return (
    <MainContent className="items-center justify-center my-0">
      <h1 className="text-4xl tracking-tighter">GroupPay</h1>
      <SignInButton/>
    </MainContent>
  );
};

export default LandingPage;