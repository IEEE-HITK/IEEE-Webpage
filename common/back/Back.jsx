
"use client"
import { useState,useEffect } from 'react'
import './back.css'
const Back = ({ title }) => {
const [path, setPath] = useState(" ")
useEffect(() => {
  console.log(window.location.pathname);
  setPath(window.location.pathname);
  },[]
  )

  // const handleGoBack = () => {
  //   router.back()
  // }

  return (
    <>
      <section className='back'>
        {/* Include your breadcrumb component here */}
        {/* <h2>HOME{path}</h2> */}
          <h1>{title}</h1>

        </section>
      <div className='margin'></div>
      {/* Optionally, you can add a button to go back */}
      {/* <button onClick={handleGoBack}>Go Back</button> */}
    </>
  )
}

export default Back