import React from "react";
import { blog } from "@const/dummydata";
import "./footer.css";
import { AnimatedTooltipPreview } from "./tips";
const Footer = () => {
  return (
    <>
     
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1 className="text-white">IEEE-HITK</h1>
            <span>Advance Technology for humanity</span>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3 className="text-white">Explore</h3>
            <ul>
              <li className="text-white">About Us</li>
              <li className="text-white">Services</li>
              <li className="text-white">Courses</li>
              <li className="text-white">Blog</li>
              <li className="text-white">Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3 className="text-white">Quick Links</h3>
            <ul>
              <li className="text-white">Contact Us</li>
              <li className="text-white">Pricing</li>
              <li className="text-white">Terms & Conditions</li>
              <li className="text-white">Privacy</li>
              <li className="text-white">Feedbacks</li>
            </ul>
          </div>
          <div className="boxxxx">
            <h2 style={{color:"white"}}>Meet the devs!</h2>
            <AnimatedTooltipPreview />
          </div>
          <div className="box last">
            <h3 className="text-white">Have a Questions?</h3>
            <ul className="text-white">
              <li>
                <i className="fa fa-map"></i>
                Anandapur near Urbana complex, Kolkata
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                9382305863
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                ieee@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <i className="fa fa-heart"></i> by Arnab Chakraborty
        </p>
      </div>
    </>
  );
};

export default Footer;
