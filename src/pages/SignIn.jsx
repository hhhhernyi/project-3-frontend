import SignInPromptBox from "../components/SignInPromptBox/SignInPromptBox";
import logo from '../assets/logo.png'

export default function SignInPage() {
  return (
    <div className="signInPage">
      <img
        src={logo}
        alt="logo of website"
        className="logoImage"
      />
      <SignInPromptBox />
    </div>
  );
}
