import "./styles.css";

export const LandingPage = () => {
  return (
    <>
      <header id="landing-header">
        <div id="landing-logo-container">
          <img
            className="img-home"
            src="../../../public/images/logo-landing.png"
            alt=""
          />
        </div>
        <div id="landing-slogan-container">
          <h1>Música a medida.</h1>
        </div>
      </header>
    </>
  );
};
