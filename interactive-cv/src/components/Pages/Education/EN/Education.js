import React from "react";
import classNames from "classnames/bind";
import ChevronItem from "../../../UI/ChevronItem/ChevronItem";

import classes from "../EducationEN.module.scss";

import PropTypes from "prop-types";

const Education = (props) => {
  const cx = classNames.bind(classes);

  const educationClass = cx({
    page: true,
    Education: true,
  });

  return (
    <div className={educationClass}>
      <ul>
        <li>
          <div>
            <span>Udemy courses (certificates provided upon request)</span>
            <span>(2020)</span>
            <ChevronItem label="React - The Complete Guide (incl Hooks, React Router, Redux)" />
            <ChevronItem label="Advanced CSS and Sass: Flexbox, Grid, Animations and More!" />
            <ChevronItem label="The Modern JavaScript Bootcamp Course (2020)" />
          </div>
        </li>
        <li>
          <div>
            <span>Master’s Degree in Computer Science</span>
            <span>(2007-2012)</span>
            <ChevronItem label="École supérieure d’informatique SUPINFO (Three years in France and two in Montréal)" />
          </div>
        </li>
        <li>
          <div>
            <span>High school diploma in sciences (DEC equivalent)</span>
            <span>(2007)</span>
          </div>
        </li>
      </ul>

      <div>
        <span>Certificates (provided upon request)</span>
        <ChevronItem label="ITIL V4 Foundation" />
        <ChevronItem label="MICROSOFT–70-640 Active Directory Windows Serv 2008" />
      </div>
    </div>
  );
};

Education.propTypes = {};

export default Education;
