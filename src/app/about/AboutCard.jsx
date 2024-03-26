"use client"
import Heading from "@com/heading/Heading"
import "./about.css"
import { homeAbout } from "@const/dummydata"
import Awrapper from "./Awrapper"
import LongText from "../LongText"
import dynamic from "next/dynamic";
// import Globe from 'react-globe.gl';
//import {GlobeOut} from "./GlobeOut"
import Scroll from "./Scroll"
import React from "react"
import { GlobeDemo } from "./Globe"
const AboutCard = () => {



  
  return (
    <>
    {/* <World globeConfig={globeConfig} data={data} /> */}
      <Scroll />
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/vision.webp' alt='' />
            <GlobeDemo />
            {/* <video className="globevid" autoPlay loop muted src="./globe.mp4" /> */}
            
          </div>
          <div style={{color:"white"}} className='right row'>
            <Heading  subtitle='vision' title='Shaping the Future: The IEEE Microwave Theory and Technology Societys Vision' />
            

            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' key={val.id}> {/* Add a unique key */}
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <LongText text={val.desc} maxLength={100} /> {/* Render the LongText component */}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
