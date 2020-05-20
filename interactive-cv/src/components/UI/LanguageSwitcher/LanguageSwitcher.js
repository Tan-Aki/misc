import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { switchLanguage } from "../../../store/actions/language";
import classes from "./LanguageSwitcher.module.scss";

const LanguageSwitcher = (props) => {
  const dispatch = useDispatch();

  const switchLanguageHandler = (language) => {
    dispatch(switchLanguage(language));
  };

  return (
    <div className={classes.LanguageSwitcher}>
      <ul>
        <li>
          <button onClick={() => switchLanguageHandler("EN")}>EN</button>
        </li>
        <li>
          <button onClick={() => switchLanguageHandler("FR")}>FR</button>
        </li>
      </ul>
    </div>
  );
};

LanguageSwitcher.propTypes = {};

export default LanguageSwitcher;
