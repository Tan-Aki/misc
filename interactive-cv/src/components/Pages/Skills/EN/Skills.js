import React from "react";
import PropTypes from "prop-types";
import classes from "../Skills.module.scss";
import ChevronItem from "../../../UI/ChevronItem/ChevronItem";
import classNames from "classnames/bind";
import ProgressBar from "../../../UI/ProgressBar/ProgressBar";

const Skills = (props) => {
  const cx = classNames.bind(classes);

  const skillsClass = cx({
    page: true,
    Skills: true,
  });

  return (
    <div className={skillsClass}>
      <div className={classes.SkillsSection}>
        <h3>Compétences en programmation:</h3>
        <ul>
          <li>
            <ChevronItem label="React.JS (with Lifecycle hooks/React hooks)" />
            <ProgressBar percent="70" />
          </li>
          <li>
            <ChevronItem label="JavaScript ES5/ES6" />
            <ProgressBar percent="70" />
          </li>
          <li>
            <ChevronItem label="HTML 5" />
            <ProgressBar percent="65" />
          </li>
          <li>
            <ChevronItem label="CSS3/SASS" />
            <ProgressBar percent="70" />
          </li>
          <li>
            <ChevronItem label="Redux, Redux-Thunk, Redux-Saga, React Router" />
            <ProgressBar percent="65" />
          </li>
        </ul>
        <ul>
          <li>
            <ChevronItem label="GitHub" />
            <ProgressBar percent="50" />
          </li>
          <li>
            <ChevronItem label="Node.JS/NPM" />
            <ProgressBar percent="50" />
          </li>
          <li>
            <ChevronItem label="Express.JS" />
            <ProgressBar percent="40" />
          </li>
          <li>
            <ChevronItem label="Testing with Chai/Mocha/Jest" />
            <ProgressBar percent="40" />
          </li>
        </ul>
      </div>
      <div className={classes.Knowledge}>
        <h3>Other skills and basic IT knowledge:</h3>
        <ul>
          <li>
            <ChevronItem label="Basic academic knowledge of various programming languages (Java, PHP, ASP.net et C#.net, lisp, C, C++, Objective-C, Assembly language)" />
          </li>
          <li>
            <ChevronItem label="ITIL methodology and basic Agile & SCRUM knowledge" />
          </li>
          <li>
            <ChevronItem label="Windows 7, 8, 10 et Windows Serveurs, Linux, Mac OS, suite Office" />
          </li>
          <li>
            <ChevronItem label="ITSM platforms and ticketing tools (JIRA, Octopus, Connectwise)" />
          </li>
          <li>
            <ChevronItem label="Mail exchange systems, virtualization, storage, backup tools, databases and monitoring systems" />
          </li>
          <li>
            <ChevronItem label="Networking, firewalls and protocols (TCP/IP, DNS, DHCP, FTP, HTTP, SSL, …)" />
          </li>
          <li>
            <ChevronItem label="Scripting in VBS and Powershell" />
          </li>
          <li>
            <ChevronItem label="Web servers and hosting services" />
          </li>
        </ul>
      </div>
      <div className={classes.Languages}>
        <h3>Languages:</h3>
        <ul>
          <li>
            <ChevronItem label="English: proficient" />
          </li>
          <li>
            <ChevronItem label="French: mother language" />
          </li>
        </ul>
      </div>
    </div>
  );
};

Skills.propTypes = {};

export default Skills;
