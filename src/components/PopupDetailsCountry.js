import React from "react";

const PopupDetailsCountry = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ""
  );
};

export default PopupDetailsCountry;
