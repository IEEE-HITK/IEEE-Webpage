"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faComments,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
async function getData() {
  try {
    const response = await fetch("/api/event");
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const events = await response.json();
    console.log(events);
    return events;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


const Hevents = async () => {
  const router = useRouter();

  const events = await getData();
  const data = events.data.slice(-3); // Select the last 3 events

  const handleButtonClick = (event) => {
    event.preventDefault();
    router.push("/event");
  };

  return (
    <div className="flex flex-wrap justify-center">
      {Array.isArray(data) &&
        data.map((val) => (
          <div
            className="w-96 bg-white shadow-md m-4 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            key={val?._id}
          >
            <div className="img">
              <img
                src={val?.EventBanner}
                alt=""
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="text p-4">
              <div className="admin flex justify-between items-center">
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUserAlt}
                    style={{ fontSize: "12px" }}
                    className="mr-2"
                  />
                  <label htmlFor="">{val?.EventType}</label>
                </span>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  <label htmlFor="">{val?.Time}</label>
                </span>
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faComments}
                    style={{ fontSize: "12px" }}
                    className="mr-2"
                  />
                  <label htmlFor="">{val?.Venue}</label>
                </span>
              </div>
              <h1 className="text-lg font-bold mt-2">{val?.Name}</h1>
              <p>{val?.EventDetails}</p>
              <button onClick={handleButtonClick}>
                more events
              </button>{" "}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Hevents;
