import AboutCard from "./about/AboutCard";
// import Hblog from "./Hblog";
import Hevents from "./Hevents";
import Hero from "./Hero";
import Testimonal from "./Faculties";
import Scroll from "./Scroll";
import { InfiniteMovingCardsDemo } from "./Infi";
// import HowWeDo from "./HowWeDo"

const Home = () => {
  return (
    <>
      <Hero />
      <Scroll />
      <AboutCard />
      {/* <HowWeDo /> */}
      <Testimonal />
      <InfiniteMovingCardsDemo />
      <Hevents />
    </>
  );
};

export default Home;
