import React from "react";
import PropTypes from "prop-types";
import classes from "../Projects.module.scss";
import ChevronItem from "../../../UI/ChevronItem/ChevronItem";
import classNames from "classnames/bind";
import ThumbnailWIthLink from "../../../UI/ThumbnailWIthLink/ThumbnailWithLink";

import ProgressBar from "../../../UI/ProgressBar/ProgressBar";

const Projects = (props) => {
  const cx = classNames.bind(classes);

  const projectsClass = cx({
    page: true,
    Projects: true,
  });

  return (
    <div className={projectsClass}>
      <div className={classes.DivWith1Thumb}>
        <h3>Burger Builder - React.JS/JSX/SASS modules/firebase (2019-2020)</h3>
        <div>
          <ThumbnailWIthLink
            imgName="bbuilderThumbnail.png"
            link="https://burger-builder-by-tan.web.app/"
          />
        </div>
        <ul>
          <li>
            <ChevronItem label="Responsive Single Page Application in React. Allows to build a burger by adding or deleting ingredients, place an order via a form, signup, login and visualize the placed orders." />
          </li>
          <li>
            <ChevronItem label="Libraries: Redux, Redux-Thunk, Redux-Saga, Axios, React Router, Node-SASS" />
          </li>
          <li>
            <ChevronItem label="Authentication via token and localStorage" />
          </li>
          <li>
            <ChevronItem label="Tests with Jest" />
          </li>
          <li>
            <ChevronItem label="Used concepts: Class based and functional components, lifecycle hooks, React-hooks, Redux-Thunk, Redux-Saga." />
          </li>
          <li className={classes.LiWithLink}>
            <ChevronItem label="URL:" />
            <a
              href="https://burger-builder-e7569.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://burger-builder-e7569.firebaseapp.com/
            </a>
          </li>
          <li className={classes.LiWithLink}>
            <ChevronItem label="GIT:" />
            <a
              href="https://github.com/Tan-Aki/dev/tree/master/React"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Tan-Aki/dev/tree/master/React
            </a>
          </li>
        </ul>
      </div>

      <div className={classes.DivWith3Thumbs}>
        <h3>Natours, Trillo, Nexter - HTML/SASS (2019-2020)</h3>
        <div>
          <ThumbnailWIthLink
            imgName="natoursThumbnail.png"
            link="https://natours-by-tan.web.app/"
          />
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
            <ChevronItem label="Usage of CSS Float Grid, CSS Flexbox and CSS Grid Layout, with BEM methodology (Block Element Modifier)" />
          </li>
          <li className={classes.LiWithLink}>
            <ChevronItem label="GIT:" />
            <a
              href="https://github.com/Tan-Aki/dev/tree/master/Advanced-HTML-CSS-and-SASS"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Tan-Aki/dev/tree/master/Advanced-HTML-CSS-and-SASS
            </a>
          </li>
        </ul>
      </div>

      <div className={classes.DivWith1Thumb}>
        <h3>Ecomm - JavaScript/HTML/CSS (2019-2020)</h3>
        <div>
          <ThumbnailWIthLink
            imgName="ecommThumbnail.png"
            link="http://www.tanneguy-jullin.xyz:3000/"
          />
        </div>
        <ul>
          <li>
            <ChevronItem label="E-commerce website that allows to place orders for products, with a cart management feature, with an administration panel for adding/modifying/deleting the products and with Sign up and Sign in features." />
          </li>
          <li>
            <ChevronItem label="Libraries: cookie-session, express.JS (with express.Router), express-validator, multer, Node Standard library" />
          </li>
          <li className={classes.LiWithLink}>
            <ChevronItem label="GIT:" />
            <a
              href="https://github.com/Tan-Aki/dev/tree/master/Modern-JS-bootcamp-2020/ecomm"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Tan-Aki/dev/tree/master/Modern-JS-bootcamp-2020/ecomm
            </a>
          </li>
        </ul>
      </div>

      <div className={classes.DivWith1Thumb}>
        <h3>Movies - JavaScript/HTML/CSS (2019-2020)</h3>
        <div>
          <ThumbnailWIthLink imgName="moviesThumbnail.png" link="https://movies-by-tan.web.app/" />
        </div>
        <ul>
          <li>
            <ChevronItem label="App that allows to fetch metadata about a movie (IMBD ratings, Metascore, Boxoffice, ...) from a free IMDB API, and to compare it to the metadata of another movie in order to pick one." />
          </li>
          <li>
            <ChevronItem label="Libraries: Axios" />
          </li>
          <li className={classes.LiWithLink}>
            <ChevronItem label="GIT:" />
            <a
              href="https://github.com/Tan-Aki/dev/tree/master/Modern-JS-bootcamp-2020/movies"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Tan-Aki/dev/tree/master/Modern-JS-bootcamp-2020/movies
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3>Online interactive resume - React.JS/JSX/SASS modules/firebase (2019-2020)</h3>

        <ul>
          <li>
            <ChevronItem label="You are currently on it ! : )" />
          </li>
          <li>
            <ChevronItem label="Responsive Single Page Application in React." />
          </li>
          <li>
            <ChevronItem label="Libraries: Redux, React Router, Classnames, Node-SASS" />
          </li>
          <li className={classes.LiWithLink}>
            <ChevronItem label="GIT:" />
            <a
              href="https://github.com/Tan-Aki/dev/tree/master/interactive-cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Tan-Aki/dev/tree/master/interactive-cv
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3>Tme - ****************** (2019-2020)</h3>
        <ul>
          <li>
            <ChevronItem label="Testing framework similar to Mocha/Chai." />
          </li>
          <li>
            <ChevronItem label="Libraries: chalk, jsdom" />
          </li>
          <li className={classes.LiWithLink}>
            <ChevronItem label="GIT:" />
            <a
              href="https://github.com/Tan-Aki/dev/tree/master/Modern-JS-bootcamp-2020/tme"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Tan-Aki/dev/tree/master/Modern-JS-bootcamp-2020/tme
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
