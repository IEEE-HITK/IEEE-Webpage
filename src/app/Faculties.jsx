import React from "react"
import { testimonal } from "@const/dummydata"
import Heading from "@com/heading/Heading"
import "./style.css"

const Faculties = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
        <Heading  title='Our Faculty Advisor'  />
          <div className='content grid2'>
            {testimonal.map((val,key) => (
              <div key={key} className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                    <h4>{val.email}</h4>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Faculties;
