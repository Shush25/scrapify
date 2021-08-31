import React from "react";
import team_members from "../aboutpage/aboutpage.data";
//import { ContributionList } from "../../components/contribution-list/contribution-list.component";
import "./profilepage.styles.scss";

export const ProfilePage = (props) => {
  const currentUser = props.match.params.userId;
  return (
    <div className="profile-container">
      <div
        className="background-image-header header-filter"
        style={{
          backgroundImage: `url(${team_members[currentUser].imageUrl})`,
        }}
      ></div>
      <div className="main main-raised">
        <div
          className="image-container"
        >
          <img
            className="profile-image"
            alt={team_members[currentUser].name}
            src={team_members[currentUser].profile}
          />
        </div>
        <div className="full-content-container">
          <div className="name">
            <h3 className="title">{team_members[currentUser].name}</h3>
            <h6>{team_members[currentUser].Job}</h6>
          </div>
          <div
            className="description"
          >
            {team_members[currentUser].description}
          </div>
          <div
            className="main-heading"
            style={{ backgroundColor: "rgb(122, 229, 255)" }}
          >
            <h1>My Contribution's to this Project</h1>
          </div>
          {/* <div className="features contri">
            {team_members[currentUser].contribution.map((contribution) => (
              <ContributionList
                key={contribution.id}
                contribution={contribution}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};
