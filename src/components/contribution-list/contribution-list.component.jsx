import React from "react";
import { Contribution } from "../contribution/contribution.component";
import "./contribution-list.styles.scss";

export const ContributionList = (props) => {
  return (
    <div>
      {props.contribution.title ? (
        <div className="contri-title">
          {props.contribution.title}
        </div>
      ) : (
        <div></div>
      )}
      {props.contribution.heading ? (
        <div className="contri-heading">
          {props.contribution.heading}
        </div>
      ) : (
        <div></div>
      )}
      {props.contribution.description ? (
        <div className="contri-para">
          <div
            dangerouslySetInnerHTML={{ __html: props.contribution.description }}
          />
        </div>
      ) : (
        <div></div>
      )}
      {props.contribution.Mdescription ? (
        <div className="contri-mainpara">
          <div
            dangerouslySetInnerHTML={{
              __html: props.contribution.Mdescription,
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
      {props.contribution.imageUrl ? (
        <div className="contri-image-container">
          <img
            src={props.contribution.imageUrl}
            alt="why"
            className="contri-image"
          />
        </div>
      ) : (
        <div></div>
      )}
      {props.contribution.styledDescription ? (
        <div className="features">
          {props.contribution.styledDescription.map((styledDescription) => (
            <Contribution
              key={styledDescription.id}
              styledDescription={styledDescription}
            />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};