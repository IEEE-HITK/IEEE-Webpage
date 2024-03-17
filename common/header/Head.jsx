import React from "react"
import dynamic from 'next/dynamic';
const Head = () => {
  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
});
  return (
    <>
    <AnimatedCursor
    innerSize={0}
    outerSize={8}
    color='89, 11, 111'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    showSystemCursor={true} />
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>IEEE</h1>
            <span>IEEE MTT-S HITK SBC CHAPTER</span>
          </div>
          <div className='social'>
  <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
    <i className='fab fa-facebook-f icon'></i>
  </a>
  <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
    <i className='fab fa-instagram icon'></i>
  </a>
  <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
    <i className='fab fa-twitter icon'></i>
  </a>
  <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
    <i className='fab fa-youtube icon'></i>
  </a>
</div>

        </div>
      </section>
    </>
  )
}

export default Head
