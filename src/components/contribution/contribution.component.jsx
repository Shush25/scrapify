import React from "react";
import "./contribution.styles.scss";
export const Contribution = (props) => {
  var checkside = null;
  if (props.styledDescription.id % 2 === 0) {
    checkside = 1;
  }
  return (
    <div>
      {checkside ? (
        <div className="blocks">
          <img
            src={props.styledDescription.imageUrl}
            alt="why"
          />
          <div className="para">
            <h1>{props.styledDescription.title}</h1>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.styledDescription.description,
                }}
              />
            </p>
          </div>
        </div>
      ) : (
        <div className="blocks">
          <div className="para">
            <h1>{props.styledDescription.title}</h1>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.styledDescription.description,
                }}
              />
            </p>
          </div>
          <img
            src={props.styledDescription.imageUrl}
            alt="why"
          />
        </div>
      )}
    </div>
  );
};
