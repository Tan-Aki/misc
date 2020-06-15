import React from "react";
import PropTypes from "prop-types";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

const NavigationItems = (props) => {
  const language = useSelector((state) => state.languageReducer.language);
  const showToolbar = useSelector((state) => state.toolbarReducer.showToolbar);

  const cx = classNames.bind(classes);

  const navigationItemsClass = cx({
    NavigationItems: true,
    active: showToolbar,
  });

  // let navigationItems = (
  //   <ul className={classes.NavigationItems}>
  //     <NavigationItem link="/">General Info</NavigationItem>
  //     <NavigationItem link="/skills">Skills</NavigationItem>
  //     <NavigationItem link="/projects">Projects</NavigationItem>
  //     <NavigationItem link="/education">Education</NavigationItem>
  //     <NavigationItem link="/experiences">Experience</NavigationItem>
  //     <NavigationItem link="/additionalInfo">Additional Info </NavigationItem>
  //     <NavigationItem link="/contact">Contact</NavigationItem>
  //   </ul>
  // );

  const aboutLabel = language === "FR" ? "À propos" : "About";
  const skillsLabel = language === "FR" ? "Compétences" : "Skills";
  const projectsLabel = language === "FR" ? "Projets" : "Projects";
  const educationLabel = language === "FR" ? "Formations" : "Education";
  const experiencesLabel = language === "FR" ? "Expériences" : "Experience";
  // const additionalInfoLabel = language === "FR" ? "Informations additionnelles" : "Additional Info";
  // const contactLabel = "Contact";

  return (
    <ul className={navigationItemsClass}>
      <NavigationItem link="/">{aboutLabel}</NavigationItem>
      <NavigationItem link="/skills">{skillsLabel}</NavigationItem>
      {/* <NavigationItem link="/skills">{skillsLabel}</NavigationItem> */}
      <NavigationItem link="/projects">{projectsLabel}</NavigationItem>
      <NavigationItem link="/education">{educationLabel}</NavigationItem>
      <NavigationItem link="/experiences">{experiencesLabel}</NavigationItem>
      {/* <NavigationItem link="/additionalInfo">{additionalInfoLabel}</NavigationItem> */}
    </ul>
  );
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
