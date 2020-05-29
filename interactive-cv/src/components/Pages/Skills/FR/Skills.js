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
      <div>
        {/* <h3>Compétences techniques:</h3> */}
        <ul>
          <li>
            <Skill label="React.JS (avec Lifecycle hooks ou React hooks)" value="70" />
          </li>
          <li>
            <Skill label="Javascript ES5/ES6" value="70" />
          </li>
          <li>
            <Skill label="HTML 5" value="65" />
          </li>
          <li>
            <Skill label="CSS3/SASS" value="70" />
          </li>
          <li>
            <Skill label="Redux, Redux Thunk, Redux Saga, React Router" value="65" />
          </li>
        </ul>
      </div>
      <div>
        {/* <h3>Notions techniques:</h3> */}
        <ul>
          <li>
            <Skill label="GitHub" value="50" />
          </li>
          <li>
            <Skill label="Node.JS/NPM" value="50" />
          </li>
          <li>
            <Skill label="Express.JS" value="40" />
          </li>
          <li>
            <Skill label="Testing avec Chai/Mocha/Jest" value="40" />
          </li>
          {/* <li>
            <Skill label="Next.JS" value="25" />
          </li> */}
        </ul>
      </div>
      <div className={classes.Knowledge}>
        <h3>Autres connaissances et notions en informatique :</h3>
        <ul>
          <li>
            <Skill label="Notions académiques de plusieurs langages de programmation (Java, PHP, ASP.net et C#.net, lisp, C, C++, Objective-C, assembleur)" />
          </li>
          <li>
            <Skill label="Méthodologie ITIL et notions méthodologie Agile & SCRUM" />
          </li>
          <li>
            <Skill label="Windows 7, 8, 10 et Windows Serveurs, Linux, Mac OS, suite Office" />
          </li>
          <li>
            <Skill label="Plateformes ITSM et outils de ticketing (JIRA, Octopus, Connectwise)" />
          </li>
          <li>
            <Skill label="Systèmes d’échanges de courriels, de virtualisation, de stockage, de sauvegarde, de bases de données, de monitoring" />
          </li>
          <li>
            <Skill label="Réseautique, pares-feux et protocoles ( TCP/IP, DNS, DHCP, FTP, HTTP, SSL, … )" />
          </li>
          <li>
            <Skill label="Scripting en VBS et Powershell" />
          </li>
          <li>
            <Skill label="Serveurs Web, services d’hébergement" />
          </li>
        </ul>
      </div>
      <div className={classes.Languages}>
        <h3>Langues :</h3>
        <ul>
          <li>
            <Skill label="Anglais: excellent" />
          </li>
          <li>
            <Skill label="Français: langue maternelle" />
          </li>
        </ul>
      </div>
    </div>
  );
};

Skills.propTypes = {};

export default Skills;
