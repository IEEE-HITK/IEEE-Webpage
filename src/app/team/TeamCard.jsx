import React from "react"
import { team } from "@const/dummydata"

const TeamCard = () => {
  return (
    <div className="teamflex12">
      {team.map((val) => (
        <div className='items12 shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-tiktok icon'></i>
            </div>
          </div>
          <div className='details details12'>
            <h2>{val.name}</h2>
            <h4>{val.work}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TeamCard