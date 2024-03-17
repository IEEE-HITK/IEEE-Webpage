"use client";
import React, { useState, useEffect } from "react";
import Head from "./Head";
import Link from "next/link";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay
    const timeout = setTimeout(() => {
      setLoading(false); // Hide the loader after content has loaded
    }, 3200);

    return () => clearTimeout(timeout); // Clear the timeout if component unmounts
  }, []);

  return (
    <>
      {loading && ( // Conditionally render loader based on loading state
        <div id="loader">
          <h1>Love Electronics?</h1>
          <h1>Well look no further</h1>
          <h1>Welcome to IEEE!</h1>
        </div>
      )}
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/joining">Join IEEE</Link>
            </li>
            {/* Other menu items */}
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
