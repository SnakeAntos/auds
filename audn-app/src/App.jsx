import "./App.css";
import { Button } from "./components/Common/Button/button";
import { Input } from "./components/Common/Input/input";
import { LandingPage } from "./components/LandingPage/landingPage";
import { LogIn } from "./components/LogIn/logIn";
import { Register } from "./components/Register/register";

export const App = () => {
  return (
    <>
      <LandingPage />
      <Register />
      <LogIn />
      <Button />
      <Input />
    </>
  );
};
export default App;
