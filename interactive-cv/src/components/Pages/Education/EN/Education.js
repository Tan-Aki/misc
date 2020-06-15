import React from "react";
import classNames from "classnames/bind";
import ChevronItem from "../../../UI/ChevronItem/ChevronItem";

import classes from "../Education.module.scss";

import PropTypes from "prop-types";

const Education = (props) => {
  const cx = classNames.bind(classes);

  const educationClass = cx({
    page: true,
    Education: true,
  });

  return (
    <div className={educationClass}>
      <div>
        <h3>Udemy courses (certificates provided upon request) (2019-2020)</h3>
        <ul>
          <li>
            <ChevronItem label="React - The Complete Guide (incl Hooks, React Router, Redux)" />
          </li>
          <li>
            <ChevronItem label="Advanced CSS and Sass: Flexbox, Grid, Animations and More!" />
          </li>
          <li>
            <ChevronItem label="The Modern JavaScript Bootcamp Course (2020)" />
          </li>
        </ul>
      </div>
      <div>
        <h3>Master’s Degree in Computer Science (2007-2012)</h3>
        <ul>
          <li>
            <ChevronItem label="École supérieure d’informatique SUPINFO (Three years in France and two in Montréal)" />
          </li>
        </ul>
      </div>

      <div>
        <h3>High school diploma in sciences (2007) (DEC equivalent)</h3>
      </div>

      <div>
        <h3>Certificates (provided upon request)</h3>
        <ul>
          <li>
            <ChevronItem label="ITIL V4 Foundation " />
          </li>
          <li>
            <ChevronItem label="MICROSOFT–70-640 Active Directory Windows Serv 2008" />
          </li>
        </ul>
      </div>
    </div>
  );
};

Education.propTypes = {};

export default Education;
