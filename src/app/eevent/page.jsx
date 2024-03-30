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
          <section className="bbck mb-4">
            <Image
              src={item.EventBanner}
              layout="responsive"
              width={1000}
              height={70}
            />
          </section>
          <h1 className="text-white text-center text-4xl mb-6">{item?.Name}</h1>
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
          <div className="flex flex-col items-center justify-center text-white mb-6">
            <p className="text-lg text-center">{item?.EventDetails}</p>
          </div>
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
          <div className="speakers-container">
            <h2 className="text-lg font-semibold mb-4 text-white">Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {item?.Speaker && item?.Speaker.map((speaker, index) => (
                <div key={index} className="speaker-card bg-gray-700 rounded-lg p-4">
                  <Image
                    src={speaker.SpeakerImage}
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
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
