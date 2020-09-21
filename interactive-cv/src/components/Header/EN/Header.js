import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Header.module.scss';

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <h1>Tanneguy Jullin</h1>
            <h2>
                <span>–</span>Web developer<span>–</span>
            </h2>
            <h2>
                Former IT technician/IT change manager retrained as a Web
                developer specialized in JavaScript and in React.JS.
                <br />
                Tech aficionado and thirsty for knowledge !
            </h2>
        </header>
    );
};

Header.propTypes = {};

export default Header;
