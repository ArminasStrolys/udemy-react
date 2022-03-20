import React from "react";
import './seasonDisplay.css'

const seasonConfig = {
  summer: {
    text: `It's sunny outside`,
    icon: "massive sun icon",
  },
  winter: {
    text: `It's chilly outside`,
    icon: "massive snowflake outline icon",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={'right '+ icon}></i>
      <h2>{text}</h2>
      <i className={'left ' + icon}></i>
    </div>
  );
};

export default SeasonDisplay;
