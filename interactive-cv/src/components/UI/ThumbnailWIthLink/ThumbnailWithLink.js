import React from "react";
import PropTypes from "prop-types";
import classes from "./ThumbnailWithLink.module.scss";

const ThumbnailWithLink = (props) => {

  return (
    <React.Fragment>
      {/* <a href={link}>
        <img src={require("../../../assets/bbuilderThumbnail.png")} alt={altText} />
      </a> */}
      <a className={classes.ThumbnailWithLink} href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={require("../../../assets/" + props.imgName)} alt={"Image " + props.imgName} />
      </a>
    </React.Fragment>
  );
};

ThumbnailWithLink.propTypes = {};

export default ThumbnailWithLink;
