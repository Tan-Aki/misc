import React from "react";
import PropTypes from "prop-types";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import { useSelector } from "react-redux";

const NavigationItems = (props) => {
  const language = useSelector((state) => state.languageReducer.language);

  let navigationItems = (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">General Info</NavigationItem>
      <NavigationItem link="/skills">Skills</NavigationItem>
      <NavigationItem link="/projects">Projects</NavigationItem>
      <NavigationItem link="/education">Education</NavigationItem>
      <NavigationItem link="/experience">Experience</NavigationItem>
      <NavigationItem link="/additionalInfo">Additional Info </NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
  );

  if (language === "FR") {
    navigationItems = (
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Informations générales</NavigationItem>
        <NavigationItem link="/competences">Compétences</NavigationItem>
        <NavigationItem link="/projets">Projets</NavigationItem>
        <NavigationItem link="/formations">Formations</NavigationItem>
        <NavigationItem link="/experiences">Expériences</NavigationItem>
        <NavigationItem link="/infoAdditionnelles">Informations additionnelles </NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
      </ul>
    );
  }

  return navigationItems;
};

NavigationItems.propTypes = {};

export default NavigationItems;

// <Route path="/projets" component={ProjectsFR} />
// <Route path="/formations" component={EducationFR} />
// <Route path="/competences" component={SkillsFR} />
// <Route path="/infoAdditionnelles" component={AdditionalInfoFR} />
// <Route path="/experiences" component={ExperiencesFR} />
// <Route path="/contact" component={ContactFR} />
// <Route path="/" component={InfoFR} />
