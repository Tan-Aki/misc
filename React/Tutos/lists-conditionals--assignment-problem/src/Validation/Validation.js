import React from "react";

const validation = props => {
  let comment = "text too short";
  if (props.text.length > 5) comment = "text long enough";
  return (
    <div className="Validation">
      <p>{comment}</p>
    </div>
  );

  // return (
  //   <div className="Validation">
  //     {props.text.length > 5 ? <p>Text long enough</p> : <p>Text too short</p>}
  //   </div>
  // );
};

export default validation;
