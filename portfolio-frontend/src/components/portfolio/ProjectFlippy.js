import React from "react";
import { StyledP, StyledBack, StyledBackAll } from "./styles";
import github from "./images/github.png";
import domain from "./images/domain.png";
export default ({
  projectImage,
  imageAlt,
  projectTitle,
  projectStack,
  gitHubLink,
  websiteLink,
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={projectImage}
            alt={imageAlt}
            style={{ width: "320px", height: "280px" }}
          />
        </div>
        <div className="flip-card-back">
          <StyledBackAll>
            <h3 style={{ color: "#000" }}>{projectTitle}</h3>
            <StyledP>{projectStack}</StyledP>
            <div>
              <StyledBack>
                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Site"
                >
                  <img src={domain} alt="domain logo" />
                  <p>View Live Site</p>
                </a>
              </StyledBack>
              <StyledBack>
                <a
                  href={gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="github profile"
                >
                  <img src={github} alt="github logo" />
                  <p>View on github</p>
                </a>
              </StyledBack>
            </div>
          </StyledBackAll>
        </div>
      </div>
    </div>
  );
};
