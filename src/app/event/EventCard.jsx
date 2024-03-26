"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faComments,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

async function getData() {
  const response = await fetch("/api/event");
  const events = await response.json();
  console.log(events)
  return events;
}

const EventCard = async () => {
  const events = await getData();
  const data = events.data;

  return (
    <div className="flex flex-wrap justify-center">
      {Array.isArray(data) &&
        data.map((val) => (
          <div
            className="w-96 bg-white shadow-md m-4 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            key={val?._id}
          >
            <div className="img">
              <img src={val?.EventBanner} alt="" className="w-full h-40 object-cover" />
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
                  <label htmlFor="">{val?.EventDetails}</label>
                </span>
              </div>
              <h1 className="text-lg font-bold mt-2">{val?.Name}</h1>
              <p className="text-gray-600">{val?.Venue}</p>
              {/* Apply vertical scroll on small screens */}
              <div className="event-gallery mt-4 overflow-y-auto max-h-48">
                <h2 className="text-lg font-semibold mb-2">Event Gallery</h2>
                <div className="flex space-x-4">
                  {val?.EventGallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Event ${index}`}
                      className="w-24 h-24 rounded-md shadow-md object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventCard;
