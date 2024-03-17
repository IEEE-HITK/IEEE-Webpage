import Heading from "@com/heading/Heading"
import "./about.css"
import { homeAbout } from "@const/dummydata"
import Awrapper from "./Awrapper"
import LongText from "../LongText"
import {GlobeOut} from "./GlobeOut"
const AboutCard = () => {
  
  // const GlobeConfig = {
  //   pointSize: 1,
  //   atmosphereColor: "#ffffff",
  //   showAtmosphere: true,
  //   atmosphereAltitude: 0.1,
  //   polygonColor: "rgba(255,255,255,0.7)",
  //   globeColor: "#1d072e",
  //   emissive: "#000000",
  //   emissiveIntensity: 0.1,
  //   shininess: 0.9,
  //   arcTime: 2000,
  //   arcLength: 0.9,
  //   rings: 1,
  //   maxRings: 3,
  //   ambientLight: "#ffffff",
  // };
  // const globeConfig = {
  //   pointSize: 1,
  //   globeColor: "#1d072e",
  //   showAtmosphere: true,
  //   atmosphereColor: "#ffffff",
  //   atmosphereAltitude: 0.1,
    // Add other configuration properties as needed
  // };
  
  // const data = [
  //   {
  //     order: 1,
  //     startLat: 0,
  //     startLng: 0,
  //     endLat: 45,
  //     endLng: 45,
  //     arcAlt: 0.5,
  //     color: "#ff0000",
  //   },
    // Add more positions as needed
  // ];
  // directionalLeftLight?: string;
    // directionalTopLight?: string;
    // pointLight?: string;
    // autoRotate?: boolean;
    // autoRotateSpeed?: number;
  return (
    <>
    {/* <World globeConfig={globeConfig} data={data} /> */}
      
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/vision.webp' alt='' />
            <GlobeOut />
          </div>
          <div className='right row'>
            <Heading subtitle='vision' title='Shaping the Future: The IEEE Microwave Theory and Technology Societys Vision' />
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
