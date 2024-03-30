import React from "react";
import Back from "@com/back/Back";
import EventCard from "./EventCard";
import "./event.css";

const Event = () => {
  return (
    <>
      <Back title="IEEE EVENTS" />
      <section className="blog padding">
        <div className="container">
          <EventCard />
        </div>
      </section>
    </>
  );
};

export default Event;
