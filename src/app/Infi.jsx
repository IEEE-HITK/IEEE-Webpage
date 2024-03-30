"use client"
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/test");
        const data = await response.json();
        setTestimonials(data.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div>
      <div className="flex justify-center p-4">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-2xl md:text-5xl font-medium flex my-6">
            <div className="text-white">Testimonials By </div>
            <div className="text-cyan-400 mx-1"> Trusted</div>
          </div>
        </div>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-customColor  dark:bg-grid-white/[0.05] md:flex-c items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  );
}

// const testimonials = [
//   {
//     Message:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     Name: "Charles Dickens",
//   },
//   {
//     Message:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     Name: "William Shakespeare",
//   },
// ];
