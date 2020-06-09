import React from "react";
import PropTypes from "prop-types";
import classes from "../Projects.module.scss";
import ChevronItem from "../../../UI/ChevronItem/ChevronItem";
import classNames from "classnames/bind";
import ThumbnailWIthLink from "../../../UI/ThumbnailWIthLink/ThumbnailWithLink";
// import ProgressBar from "../../../UI/ProgressBar/ProgressBar";
// import bbuilderThumbnail from "../../../../assets/bbuilderThumbnail.png";

const Projects = (props) => {
  const cx = classNames.bind(classes);

  const projectsClass = cx({
    page: true,
    Projects: true,
  });

  return (
    <div className={projectsClass}>
      <div>
        <h3>CV interactif en ligne - React.JS/JSX/SASS modules/firebase (2019-2020)</h3>
        <ul>
          <li>
            <ChevronItem label="Vous êtes présentement dessus ! : ) " />
          </li>
          <li>
            <ChevronItem label="Responsive Single Page Application en React." />
          </li>
          <li>
            <ChevronItem label="Libraires: Redux, React Router, Classnames, Node-SASS" />
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
        <h3>Burger Builder - React.JS/JSX/SASS modules/firebase (2019-2020)</h3>
        <ul>
          <li>
            <ChevronItem label="Responsive Single Page Application en React permettant de construire un burger en ajoutant ou supprimant des aliments, de passer une commande via un formulaire, de s’inscrire et de s’authentifier, et de visualiser les commandes passées." />
          </li>
          <li>
            <ChevronItem label="Libraires: Redux, Redux-Thunk, Redux-Saga, Axios, React Router, Node-SASS" />
          </li>
          <li>
            <ChevronItem label="Authentification via token et localStorage" />
          </li>
          <li>
            <ChevronItem label="Tests avec Jest" />
          </li>
          <li>
            <ChevronItem label="Concepts utilisés: Class based et functional components, lifecycle hooks, React-hooks, Redux-Thunk, Redux-Saga" />
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
        <ThumbnailWIthLink
          imgName="bbuilderThumbnail.png"
          link="https://burger-builder-e7569.firebaseapp.com/"
        />
      </div>

      <div>
        <h3>Ecomm - JavaScript/HTML/CSS (2019-2020)</h3>
        <ul>
          <li>
            <ChevronItem label="Site de e-commerce permettant d’acheter de commander des produits, avec gestion de panier, avec panneau d’administration permettant d’ajouter, modifier ou supprimer un produit, et avec gestion des inscriptions et de l’authentification." />
          </li>
          <li>
            <ChevronItem label="Librairies: cookie-session, express.JS (avec express.Router), express-validator, multer, Node Standard library" />
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

      <div>
        <h3>Natours, Trillo, Nexter - HTML/SASS (2019-2020)</h3>
        <ul>
          <li>
            <ChevronItem label="Trois magnifiques sites web responsives." />
          </li>
          <li>
            <ChevronItem label="Utilisation de CSS Float Grid, CSS Flexbox et CSS Grid Layout, avec méthodologie BEM (Block Element Modifier)" />
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

      <div>
        <h3>Movies - JavaScript/HTML/CSS (2019-2020)</h3>
        <ul>
          <li>
            <ChevronItem label="Application permettant d’obtenir les métadonnées d’un film (IMBD ratings, Metascore, Boxoffice, ...) à partir d’une API IMDB gratuite et de les comparer aux métadonnées d’un autre film afin d’effectuer un choix." />
          </li>
          <li>
            <ChevronItem label="Libraire: Axios" />
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
        <h3>tme - ****************** (2019-2020)</h3>
        <ul>
          <li>
            <ChevronItem label="Framework de test équivalent à Mocha /Chai" />
          </li>
          <li>
            <ChevronItem label="Libraires: chalk, jsdom" />
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
