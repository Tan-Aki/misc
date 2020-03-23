import React from "react";
import "./UserOutput.scss";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>
        Yo ! I'm {props.userName} ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        ad. Ex sint, excepturi accusamus doloribus fugit perferendis ipsa fuga inventore ad, numquam
        cumque ut culpa eum doloremque nesciunt? Dolores, eveniet!
      </p>
      <p>{props.children}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ad. Ex sint, excepturi
        accusamus doloribus fugit perferendis ipsa fuga inventore ad, numquam cumque ut culpa eum
        doloremque nesciunt? Dolores, eveniet!
      </p>
    </div>
  );
};

export default userOutput;
