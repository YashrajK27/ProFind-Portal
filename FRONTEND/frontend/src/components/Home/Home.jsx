import React, { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import PopularCatogories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="homePage home">
      <Hero />
      <HowItWorks />
      <PopularCatogories />
      <PopularCompanies />
    </section>
  );
};

export default Home;
