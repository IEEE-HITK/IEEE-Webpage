// import React from "react";
// import Back from "@com/back/Back";
// import TestCard from "./TestCard";
// const Test = () => {
//   return (
//     <>
//     <Back title="Testimonials" />
//      <TestCard />
//     </>
//   );
// };

// export default Test;
import React, { useState } from "react";
import Back from "@com/back/Back";
import TestCard from "./TestCard";

const Test = () => {
  const testimonialSets = [
    [
      {
        name: "John Doe",
        designation: "Board Director of IEEE",
        imageUrl: "https://source.unsplash.com/100x100/?man,boy",
        testimonial:
          "IEEE provides best Tailwind CSS Components and Blocks to create an unique websites within minutes. It has upto 60+ free components for front-end Web Development.",
      },
      {
        name: "Elina Gilbert",
        designation: "ShareHolder, IEEE",
        imageUrl: "https://source.unsplash.com/100x100/?girl",
        testimonial:
          "IEEE provides best Tailwind CSS Components and Blocks to create an unique websites within minutes. It has upto 60+ free components for front-end Web Development.",
      },
      // Add more testimonials as needed
    ],
    // Add more sets of testimonials as needed
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const nextTestimonialSet = () => {
    setCurrentSetIndex((prevIndex) =>
      prevIndex === testimonialSets.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonialSet = () => {
    setCurrentSetIndex((prevIndex) =>
      prevIndex === 0 ? testimonialSets.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Back title="Testimonials" />
      <TestCard testimonials={testimonialSets[currentSetIndex]} />
      <div className="flex justify-center mt-4">
        {/* Button to move backward */}
        <button
          className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={prevTestimonialSet}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </button>
        {/* Button to move forward */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextTestimonialSet}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Test;

