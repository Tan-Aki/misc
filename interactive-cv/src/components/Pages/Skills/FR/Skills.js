import React from "react";
import PropTypes from "prop-types";
import classes from "../Skills.module.scss";
import Skill from "../Skill/Skill";
import classNames from "classnames/bind";

const Skills = (props) => {
  const cx = classNames.bind(classes);

  const skillsClass = cx({
    page: true,
    Skills: true,
  });

  return (
    <div className={skillsClass}>
      <h2> Compétences techniques:</h2>
      <ul>
        <li>
          <Skill label="Javascript ES5/ES6" max="100" value="80" />
        </li>
        <li>
          <Skill label="React.JS (avec Lifecycle hooks ou React hooks)" max="100" value="80" />
        </li>
        <li>
          <Skill label="HTML 5" max="100" value="75" />
        </li>
        <li>
          <Skill label="CSS3/SASS" max="100" value="65" />
        </li>
        <li>
          <Skill label="Redux, Redux Thunk, Redux Saga, React Router" max="100" value="70" />
        </li>
        <li>
          <Skill label="Create-React-App avec Webpack" max="100" value="75" />
        </li>
        <li>
          <Skill label="Node.JS/NPM" max="100" value="50" />
        </li>
        <li>
          <Skill label="GitHub" max="100" value="40" />
        </li>
        <li>
          <Skill label="Express.JS" max="100" value="40" />
        </li>
        <li>
          <Skill label="Testing avec Chai/Mocha/Jest" max="100" value="40" />
        </li>
        <li>
          <Skill label="Next.JS" max="100" value="25" />
        </li>
      </ul>
      Create-React-App avec Webpack • • Notions techniques: • • • Langues: • Anglais: excellent •
      Français: langue maternelle Certifications: • ITIL V4 Foundation (présentée sur demande)
    </div>
  );
};

Skills.propTypes = {};

export default Skills;
