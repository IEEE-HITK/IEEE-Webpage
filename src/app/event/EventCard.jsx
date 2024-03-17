import React from "react"
import { blog } from "@const/dummydata"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCalendarAlt, faComments } from "@fortawesome/free-solid-svg-icons"
import   { UserOutlined } from  '@ant-design/icons';
const EventCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div className="items shadow">
          <div className="img">
            <img src={val.cover} alt="" />
          </div>
          <div className="text">
            <div className="admin flexSB">
              <span>
              <UserOutlined/>
                <label htmlFor="">{val.type}</label>
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <label htmlFor="">{val.date}</label>
              </span>
              <span>
                <FontAwesomeIcon icon={faComments} />
                <label htmlFor="">{val.com}</label>
              </span>
            </div>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default EventCard