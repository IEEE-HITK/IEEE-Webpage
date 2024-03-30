"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faComments,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./eevent.css";
import axios from "axios";

const EEventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/event');
      const data = await res.json();
      console.log(data.data);
      setEvents(data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4">
      {events.map((item, index) => (
        <div key={index} className="event-container bg-gray-800 rounded-lg p-8 mb-8">
          <div className="lg:flex lg:items-center">
            {/* Left side - event banner */}
            <div className="lg:w-1/2 lg:mr-8 mb-6">
              <section className="bbck mb-4">
                <Image
                  src={item.EventBanner}
                  layout="responsive"
                  width={1000}
                  height={70}
                />
              </section>
            </div>
            {/* Right side - title, venue, time, type */}
            <div className="lg:w-1/2">
              <h1 className="text-white text-center lg:text-left text-6xl mb-6 hover:text-green-500">{item?.Name}</h1>
              <div className="admin flex justify-between items-center text-white mb-6">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUserAlt} className="icon mr-2" />
                  <label className="mr-4">{item?.EventType}</label>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon mr-2" />
                  <label className="mr-4">{item?.Time}</label>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faComments} className="icon mr-2" />
                  <label>{item?.Venue}</label>
                </div>
              </div>
            </div>
          </div>
          {/* Event details */}
          <div className="flex flex-col items-center justify-center text-white mb-6">
            <p className="text-lg text-center">{item?.EventDetails}</p>
          </div>
          {/* Event gallery */}
          <div className="event-gallery overflow-x-auto mb-6">
            <h2 className="text-lg font-semibold mb-4 text-white">Event Gallery</h2>
            <div className="flex gap-4">
              {item?.EventGallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Event ${index}`}
                  className="w-64 h-64 rounded-lg object-cover hover:opacity-80 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
          {/* Speakers */}
          <div className="speakers-container">
            <h2 className="text-lg font-semibold mb-4 text-white">Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {item?.Speaker && item?.Speaker.map((speaker, index) => (
                <div key={index} className="speaker-card bg-gray-700 rounded-lg p-4">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden">
                    <Image
                      src={speaker.SpeakerImage}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-lg text-white font-semibold mt-4">{speaker.SpeakerName}</h3>
                  <p className="text-sm text-gray-400">{speaker.SpeakerDetails}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EEventPage;
