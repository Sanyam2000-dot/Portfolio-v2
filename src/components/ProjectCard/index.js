import React from "react";
import "./index.scss";

export default props => {
  const { name, description, features } = props;
  if (!name) {
    return null;
  }
  let featuresItems = null;
  if (features) {
    if (features.constructor === Array && features.length) {
      featuresItems = features.map(item => <li>{item}</li>);
    } else {
      featuresItems = features;
    }
  }
  return (
    <div className="projectCard">
      {(name && <div className="projectCard__name">{name} </div>) || null}
      {(description && (
        <div className="projectCard__description">{description}</div>
      )) ||
        null}
      {featuresItems && (
        <div className="projectCard__features"> {featuresItems} </div>
      )}
      <div className="projectCard__divider"></div>
    </div>
  );
};
