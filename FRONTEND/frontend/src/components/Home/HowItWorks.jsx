import React from "react";
import { MdFindInPage } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How WorkNest Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>
              Sign up for free to unlock exclusive features and access
              personalized job recommendations. Start your journey to find the
              perfect job match today!
            </p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Find A Job/Post A Job</p>
            <p>
              Find your dream job or post job vacancies. Our platform connects
              job seekers with employers, making it easy to find the perfect
              match for your career or company needs.
            </p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>Network with professionals</p>
            <p>
              Expand your professional network by connecting with industry
              experts and like-minded professionals. Networking opportunities
              can lead to valuable connections, career growth, and new
              opportunities. Join our platform to start networking today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
