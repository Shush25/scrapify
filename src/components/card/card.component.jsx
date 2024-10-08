import React from "react";
import "./card.styles.scss";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faGoogle,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faGithub, faLinkedinIn, faGoogle, faInstagram);
export const Card = (props) => (
  <div>
    <div className="outer-div">
      <div className="inner-div">
        <div className="front">
          <div className="front_text">
            <img
              className="imgsty"
              alt={props.member.name}
              src={props.member.profile}
            />
            <h2
              style={{ fontSize: "1.5rem" }}
              className="front_text-header"
            >
              {props.member.name}
            </h2>
            <p
              className="front_text_para"
            >
              {props.member.Job}
            </p>
          </div>
        </div>
        <div className="back">
          <div className="back-container">
            <div className="social-media-wrapper">
              <a href={props.member.email} className="social-icon">
                <FontAwesomeIcon
                  icon={["fab", "google"]}
                  aria-hidden="true"
                  className="fab"
                />
                {null}
              </a>
              <a href={props.member.github} className="social-icon">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  aria-hidden="true"
                  className="fab"
                />
                {null}
              </a>
              <a href={props.member.linkdin} className="social-icon">
                <FontAwesomeIcon
                  icon={["fab", "linkedin-in"]}
                  aria-hidden="true"
                  className="fab"
                />
                {null}
              </a>
              <a href={props.member.insta} className="social-icon">
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  aria-hidden="true"
                  className="fab"
                />
                {null}
              </a>
            </div>
          </div>
          <div className="ProfileButton">
            <Link to={`/about/${props.member.id}`} className="Profile-link">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
