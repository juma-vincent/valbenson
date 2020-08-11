import React from "react";
import "./projectItem.scss";

const ProjectItem = ({ title, imageUrls, description }) => {
  return (
    <div className="project-item-container">
      <div className="description">
        <h3>{title}</h3>

        <p>
          <small>{description}</small>
        </p>
      </div>
      <div className="images-container">
        {imageUrls.map((imageUrl) => (
          <span key={imageUrl.id}>
            {" "}
            <img src={imageUrl.url} alt="" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
