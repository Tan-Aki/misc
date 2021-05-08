import React from "react";
import PropTypes from "prop-types";
import classes from "../Projects.module.scss";
import ChevronItem from "../../../UI/ChevronItem/ChevronItem";
import classNames from "classnames/bind";
import ThumbnailWIthLink from "../../../UI/ThumbnailWIthLink/ThumbnailWithLink";
import ElevatorButton from "../../../UI/ElevatorButton/ElevatorButton.js";

import ProgressBar from "../../../UI/ProgressBar/ProgressBar";

const Projects = (props) => {
    const cx = classNames.bind(classes);

    const projectsClass = cx({
        page: true,
        Projects: true,
    });

    return (
        <div className={projectsClass}>
            <span>
                Note : If you are interested about the projects I've worked on professionally, please <a href="/">contact me</a>.
            </span>
            <br />
            <br />

            <div className={classes.DivWith1Thumb}>
                <h3>Burger Builder - React.JS/JSX/SCSS modules/firebase (2020)</h3>
                <div>
                    <ThumbnailWIthLink imgName="bbuilderThumbnail.png" link="https://burger-builder-by-tan.web.app/" />
                </div>
                <ul>
                    <li>
                        <ChevronItem label="Responsive Single Page Application in React.JS. Allows to build a burger by adding or deleting ingredients, place an order via a form, signup, login and visualize placed orders." />
                    </li>
                    <li>
                        <ChevronItem label="Libraries: Redux, Redux-Thunk, Redux-Saga, Axios, React-Router, Node-SASS, etc..." />
                    </li>
                    <li>
                        <ChevronItem label="Authentication via token and localStorage." />
                    </li>
                    <li>
                        <ChevronItem label="Tests with Jest and Enzyme." />
                    </li>
                    <li>
                        <ChevronItem label="Used concepts: Class based and functional components, lifecycle hooks, React hooks, Redux-Thunk, Redux-Saga." />
                    </li>

                    <li className={classes.LiWithLink}>
                        <ChevronItem label="GIT:" />
                        <a href="https://github.com/Tan-Aki/dev/tree/master/React" target="_blank" rel="noopener noreferrer">
                            https://github.com/Tan-Aki/dev/tree/master/React
                        </a>
                    </li>
                </ul>
            </div>

            <div className={classes.DivWith1Thumb}>
                <h3>PlaceShare - MERN (MongoDB, Express.JS, React.JS, Node.JS) + AWS S3 (2020)</h3>
                <div>
                    <ThumbnailWIthLink imgName="placeshareThumbnail.png" link="https://placeshare-by-tan.web.app/" />
                </div>
                <ul>
                    <li>
                        <ChevronItem
                            label="Responsive Single Page Application in React.JS leaning on a REST API built with Node.JS/Express.JS/MongoDB and connected to an AWS S3 file storage bucket.
Allows a user to sign up, sign in, create, edit and delete a place (with image upload and google maps geolocation) and view the places created by other users."
                        />
                    </li>
                    <li>
                        <ChevronItem label="Libraries: React-transition-group, React-Router, AWS-sdk, Express.JS, JsonWebToken, Mongoose, Multer, etc…" />
                    </li>
                    <li>
                        <ChevronItem label="Authentication via token and localStorage." />
                    </li>
                    <li>
                        <ChevronItem label="Tests with Jest, React-Testing-Library and SuperTest." />
                    </li>
                    <li>
                        <ChevronItem label="API: Google Maps JavaScript API and Google Geocoding API" />
                    </li>
                    <li>
                        <ChevronItem
                            bold
                            label="(note: The initial loading time will take a few seconds since the backend is hosted for free on Heroku.com.)"
                        />
                    </li>

                    <li className={classes.LiWithLink}>
                        <ChevronItem label="GIT:" />
                        <a href="https://github.com/Tan-Aki/dev/tree/master/MERN/App " target="_blank" rel="noopener noreferrer">
                            https://github.com/Tan-Aki/dev/tree/master/MERN/App
                        </a>
                    </li>
                </ul>
            </div>

            <div className={classes.DivWith3Thumbs}>
                <h3>Natours, Trillo, Nexter - HTML/SCSS (2020)</h3>
                <div>
                    <ThumbnailWIthLink imgName="natoursThumbnail.png" link="https://natours-by-tan.web.app/" />
                </div>
                <div>
                    <ThumbnailWIthLink imgName="nexterThumbnail.png" link="https://nexter-by-tan.web.app/" />
                </div>
                <div>
                    <ThumbnailWIthLink imgName="trilloThumbnail.png" link="https://trillo-by-tan.web.app/" />
                </div>
                <ul>
                    <li>
                        <ChevronItem label="Three beautiful responsive websites." />
                    </li>
                    <li>
                        <ChevronItem label="Usage of CSS Float Grid, CSS Flexbox and CSS Grid Layout, with BEM methodology (Block Element Modifier)." />
                    </li>
                    <li className={classes.LiWithLink}>
                        <ChevronItem label="GIT:" />
                        <a href="https://github.com/Tan-Aki/dev/tree/master/Advanced-HTML-CSS-and-SASS" target="_blank" rel="noopener noreferrer">
                            https://github.com/Tan-Aki/dev/tree/master/Advanced-HTML-CSS-and-SASS
                        </a>
                    </li>
                </ul>
            </div>

            <div className={classes.DivWith1Thumb}>
                <h3>Ecomm - JavaScript/HTML/CSS (2020)</h3>
                <div>
                    <ThumbnailWIthLink imgName="ecommThumbnail.png" link="http://www.tanneguy-jullin.xyz:3000/" />
                </div>
                <ul>
                    <li>
                        <ChevronItem label="E-commerce website that allows to place orders for products, with a cart management feature, with an administration panel for adding/modifying/deleting the products and with Sign up and Sign in features." />
                    </li>
                    <li>
                        <ChevronItem label="Libraries: Cookie-Session, Express.JS (with Express-Router), Multer, Node Standard library, etc..." />
                    </li>
                    <li className={classes.LiWithLink}>
                        <ChevronItem label="GIT:" />
                        <a href="https://github.com/Tan-Aki/dev/tree/master/Modern-JS-bootcamp-2020/ecomm" target="_blank" rel="noopener noreferrer">
                            https://github.com/Tan-Aki/dev/tree/master/Modern-JS-bootcamp-2020/ecomm
                        </a>
                    </li>
                </ul>
            </div>

            <div className={classes.DivWith1Thumb}>
                <h3>Movies - JavaScript/HTML/CSS (2020)</h3>
                <div>
                    <ThumbnailWIthLink imgName="moviesThumbnail.png" link="https://movies-by-tan.web.app/" />
                </div>
                <ul>
                    <li>
                        <ChevronItem label="App that allows to fetch metadata about a movie (IMBD ratings, Metascore, Boxoffice, ...) from a free IMDB API, and to compare it to the metadata of another movie in order to pick one." />
                    </li>
                    <li>
                        <ChevronItem label="Libraries: Axios, etc..." />
                    </li>
                    <li className={classes.LiWithLink}>
                        <ChevronItem label="GIT:" />
                        <a href="https://github.com/Tan-Aki/dev/tree/master/Modern-JS-bootcamp-2020/movies" target="_blank" rel="noopener noreferrer">
                            https://github.com/Tan-Aki/dev/tree/master/Modern-JS-bootcamp-2020/movies
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Online interactive resume - React.JS/JSX/SCSS modules/firebase (2020)</h3>

                <ul>
                    <li>
                        <ChevronItem label="You are currently on it ! : )" />
                    </li>
                    <li>
                        <ChevronItem label="Responsive Single Page Application in React.JS." />
                    </li>
                    <li>
                        <ChevronItem label="Libraries: Redux, React-Router, Classnames, Node-SASS, etc..." />
                    </li>
                    <li className={classes.LiWithLink}>
                        <ChevronItem label="GIT:" />
                        <a href="https://github.com/Tan-Aki/dev/tree/master/interactive-cv" target="_blank" rel="noopener noreferrer">
                            https://github.com/Tan-Aki/dev/tree/master/interactive-cv
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h3>And many more…!</h3>
                <ul>
                    <li className={classes.LiWithLink}>
                        <ChevronItem label="Please visit my GitHub:" />
                        <a href="https://github.com/Tan-Aki/dev" target="_blank" rel="noopener noreferrer">
                            https://github.com/Tan-Aki/dev
                        </a>
                    </li>
                </ul>
            </div>
            <ElevatorButton />
        </div>
    );
};

Projects.propTypes = {};

export default Projects;
