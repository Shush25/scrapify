import React from "react";

import "./header.styles.scss";

export const Header = ({ children, Header_image }) => (
        <div className="header">
          <div
            className="hero-header-container"
            style={{ background: "url(" + Header_image + ") no-repeat center" }}
          >
            <div className="hero-text">{children}</div>
          </div>
        </div>
);
