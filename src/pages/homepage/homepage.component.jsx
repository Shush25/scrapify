import React from "react";
import { Link } from "react-router-dom";
import "./homepage.styles.scss";

import { Header } from "../../components/header/header.component";
import { ContributionList } from "../../components/contribution-list/contribution-list.component";

import Introduction from "./intoduction.data";
import Resources from "./resources.data";
// import Testimonials from "./testimonials.data";
import Faq from "./faq.data";
import Features from "./features.data";

import Header_image from "../../assets/home-bg.jpg";

const Homepage = () => (
  <div className="homepage">
    <Header Header_image={Header_image}>
      <h1
        style={{
          color: "white",
          fontSize: "70px",
          fontFamily: "Fira Sans",
          textAlign: "center",
        }}
      >
        Welcome to SCRAPIFY
      </h1>
      <p
        style={{ fontSize: "40px", textAlign: "center" }}
      >
      Transforming the Scrap Industry Through Technology!  
      </p>
      <br></br>
      <div align="right">
        <Link
          className="git-button"
          to="/about"
          rel="noopener noreferrer"
        >
          About Us
        </Link>
      </div>
    </Header>
    <div className="main-heading">
      <h1>What we Offer???</h1>
    </div>
    <div className="features contri">
      {Introduction.map((contribution) => (
        <ContributionList key={contribution.id} contribution={contribution} />
      ))}
    </div>
  
    <div
      className="main-heading"
      style={{ backgroundColor: "rgb(198, 253, 196)" }}
    >
      <h1>Features</h1>
    </div>

    <div className="features contri">
      {Features.map((contribution) => (
        <ContributionList key={contribution.id} contribution={contribution} />
      ))}
    </div>

    <div
      className="main-heading"
      style={{ backgroundColor: "rgb(198, 253, 196)" }}
    >
      <h1>Blog / Resources</h1>
    </div>

    <div className="features contri">
      {Resources.map((contribution) => (
        <ContributionList key={contribution.id} contribution={contribution} />
      ))}
    </div>

    {/*
    <div
      className="main-heading"
      style={{ backgroundColor: "rgb(255, 208, 208)" }}
    >
      <h1>Testimonials</h1>
    </div>

    <div className="features contri">
      {Testimonials.map((contribution) => (
        <ContributionList key={contribution.id} contribution={contribution} />
      ))}
    </div> */}

    <div
      className="main-heading"
      style={{ backgroundColor: "rgb(255, 208, 208)" }}
    >
      <h1>FAQ</h1>
    </div>

    <div className="features contri">
      {Faq.map((contribution) => (
        <ContributionList key={contribution.id} contribution={contribution} />
      ))}
    </div>
  </div>
);

export default Homepage;
