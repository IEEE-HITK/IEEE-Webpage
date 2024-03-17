import AboutCard from "./about/AboutCard"
import Hblog from "./Hblog"
import Hero from "./Hero"
import Testimonal from "./Faculties"
// import HowWeDo from "./HowWeDo"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      {/* <HowWeDo /> */}
      <Testimonal />
      <Hblog />
    </>
  )
}

export default Home
