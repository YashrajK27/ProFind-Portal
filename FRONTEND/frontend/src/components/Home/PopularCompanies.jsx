import React from "react";
import { SiTcs } from "react-icons/si";
import { SiBarclays } from "react-icons/si";
import { SiAccenture } from "react-icons/si";
import { SiRelianceindustrieslimited } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Tata Consultancy Services (TCS)",
      location:
        "Nirmal Building, Nariman Point, Mumbai, Maharashtra 400021, India",
      openPositions: 50,
      icon: <SiTcs />,
    },
    {
      id: 2,
      title: "Reliance Industries Limited",
      location:
        "Maker Chambers, Nariman Point, Mumbai, Maharashtra 400021, India",
      openPositions: 30,
      icon: <SiRelianceindustrieslimited />,
    },
    {
      id: 3,
      title: "Barclays",
      location: "Barclays House, BKC, Mumbai, Maharashtra 400051, India",
      openPositions: 15,
      icon: <SiBarclays />,
    },
    {
      id: 4,
      title: "Accenture",
      location:
        "Accenture Solutions Pvt. Ltd., Mumbai, Maharashtra 400079, India",
      openPositions: 20,
      icon: <SiAccenture />,
    },
  ];

  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon" style={{ fontSize: "2rem" }}>
                    {element.icon}
                  </div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
