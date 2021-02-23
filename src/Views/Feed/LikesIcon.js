import React from "react";
import "./LikesCategories.scss";

const LikesIcon = ({ Icon, Src, title }) => {
  return (
    <div class="tooltip">
      {Icon && <Icon />}
      {Src && <img className="img" src={Src} alt="" />}
      <div class="tooltiptext">{title}</div>
    </div>
  );
};

export default LikesIcon;
