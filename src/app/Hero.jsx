import Heading from "@com/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO IEEE' title='Advance technology for future' />
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
