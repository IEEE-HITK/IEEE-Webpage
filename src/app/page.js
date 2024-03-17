import AboutCard from "./about/AboutCard"
import Hblog from "./Hblog"
import Hero from "./Hero"
import Testimonal from "./Faculties"
import TestCard from "./testimonials/TestCard"
import Scroll from "./Scroll"
// import HowWeDo from "./HowWeDo"

const Home = () => {
  return (
    <>
      <Hero />
      <Scroll />
      <AboutCard />
      {/* <HowWeDo /> */}
      <Testimonal />
      <TestCard />
      <Hblog />
    </>
  )
}

export default Home
