 "use client";
// import React from 'react'

// const Loading = () => {
//     React.useEffect(() => {
//         function loaderAnimation() {
//             var loader = document.querySelector("#loader")
//             setTimeout(function () {
//                 loader.style.top = "-100%"
//             }, 4200)
//         }
//         loaderAnimation();
//     }, [])
//   return (
//     <div id="loader">
//         <h1>Environments</h1>
//         <h1>Experience</h1>
//         <h1>Excellence</h1>
//       </div>
//   )
// }

// export default Loading

import React, { useRef } from 'react';

const Loading = () => {
  const loaderRef = useRef(null);

  const loaderAnimation = () => {
    const loader = loaderRef.current;
    if (loader) {
      setTimeout(() => {
        loader.style.display = 'none';
      }, 4200);
    }
  };

  // Call the loader animation when the component mounts
  loaderAnimation();

  return (
    <div id="loader" ref={loaderRef}>
      <h1>Environments</h1>
      <h1>Experience</h1>
      <h1>Excellence</h1>
    </div>
  );
};

export default Loading;
