import React from "react";
import PropTypes from "prop-types";
import classes from "../Header.module.scss";

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <h1>Tanneguy Jullin</h1>
            <h2>
                <span>–</span>Développeur Web<span>–</span>
            </h2>
            <h2>
                Ancien technicien informatique/gestionnaire de changements TI reconverti en développeur Web.
                <br />
                Passionné de technologie et avide de connaissance !
            </h2>
        </header>
    );
};

Header.propTypes = {};

export default Header;
