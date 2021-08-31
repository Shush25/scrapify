import React from "react";
import "./aboutpage.styles.scss";
import { Header } from "../../components/header/header.component";
import { ContributionList } from "../../components/contribution-list/contribution-list.component";
import Header_image from "../../assets/about-bg.png";
import AboutPageData from "./aboutpage.data";

class Aboutpage extends React.Component {
  render() {
    return (
      <div className="aboutpage">
        <Header Header_image={Header_image}>
          <h1
            style={{ color: "white", fontSize: "50px", textAlign: "center" }}
          >
            Scrapify
          </h1>
          <p
            style={{ fontSize: "40px", textAlign: "center" }}
          >
            Sahi Maal, Sahi Kaam, Sahi Daam
          </p>
          <br></br>
          <div align="right">
            <a href="#contactUs" className="button">
              Contact Us
            </a>
          </div>
        </Header>
        <div
          className="main-heading"
        >
          <h1>Know more about Us!!!</h1>
        </div>
        <div className="features contri">
      {AboutPageData.map((contribution) => (
        <ContributionList key={contribution.id} contribution={contribution} />
      ))}
    </div>
        <div
          id="contactUs"
          className="main-heading"
          style={{ backgroundColor: "rgb(255, 236, 218)" }}
        >
          <h1>Contact Us</h1>
        </div>
      </div>
    );
  }
}

export default Aboutpage;
