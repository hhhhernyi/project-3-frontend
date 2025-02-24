import SignInPromptBox from "../components/SignInPromptBox/SignInPromptBox";

export default function SignInPage() {
  return (
    <div className="signInPage">
      <img
        src="../src/assets/logo.png"
        alt="logo of website"
        className="logoImage"
      />
      <SignInPromptBox />
    </div>
  );
}
