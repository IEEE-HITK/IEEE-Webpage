import AboutCard from "./about/AboutCard"
import Hblog from "./Hblog"
import Hero from "./Hero"
import Testimonal from "./Faculties"
import TestCard from "./testimonials/TestCard"
// import HowWeDo from "./HowWeDo"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      {/* <HowWeDo /> */}
      <Testimonal />
      <TestCard />
      <Hblog />
    </>
  )
}

export default Home
