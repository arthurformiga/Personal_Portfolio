import "../styles/components/maincontent.sass";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import Technologies from "./Technologies";

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <Technologies />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
