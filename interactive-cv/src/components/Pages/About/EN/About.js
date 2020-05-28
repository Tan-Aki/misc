import React from "react";
import PropTypes from "prop-types";
import GithubLogo from "../../../Logos/Github/GithubLogo";
import HomeLogo from "../../../Logos/Home/HomeLogo";
import MobileLogo from "../../../Logos/Mobile/MobileLogo";
import MailLogo from "../../../Logos/Mail/MailLogo";
import LinkedinLogo from "../../../Logos/Linkedin/LinkedinLogo";
import HobbiesLogo from "../../../Logos/Hobbies/HobbiesLogo";
import classes from "../About.module.scss";
import classNames from "classnames/bind";

const About = (props) => {
  const cx = classNames.bind(classes);

  const aboutClass = cx({
    page: true,
    About: true,
  });

  return (
    <div className={aboutClass}>
      <div className={classes.Row}>
        <HomeLogo />
        <span>2278 Fullum Street, Montreal, QC, H2K 3P2 </span>
      </div>
      <div className={classes.Row}>
        <MobileLogo />
        <span>438.409.0506</span>
      </div>
      <div className={classes.Row}>
        <MailLogo />
        <a href="mailto:Tanneguy.jullin@gmail.com" target="_blank" rel="noopener noreferrer">
          Tanneguy.Jullin@gmail.com
        </a>
      </div>
      <div className={classes.Row}>
        <GithubLogo />
        <a href="https://github.com/Tan-Aki" target="_blank" rel="noopener noreferrer">
          https://github.com/Tan-Aki
        </a>
      </div>
      <div className={classes.Row}>
        <LinkedinLogo />
        <a
          href="https://www.linkedin.com/in/tanneguy-jullin-b28bab43/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/tanneguy-jullin-b28bab43/
        </a>
      </div>
      <div className={classes.Row}>
        <HobbiesLogo />
        <span>Sports, travels, yoga, meditation, e-sports, outdoors enthusiast</span>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
