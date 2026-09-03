import About from "../(home)/components/About";
import Teachers from "../(home)/components/Teachers";
import Banner from "./components/Banner";
import MissionVisionValues from "./components/MissionVisionValues";

const AboutPage = () => {
  return (
    <div>
      <Banner />
      <About />
      <MissionVisionValues />
      <Teachers />
    </div>
  );
};

export default AboutPage;
