import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "../../../store/actions/language";
import classes from "./LanguageSwitcher.module.scss";

const LanguageSwitcher = (props) => {
  const dispatch = useDispatch();

  const switchLanguageHandler = (language) => {
    dispatch(switchLanguage(language));
  };

  const language = useSelector((state) => state.languageReducer.language);

  return (
    <div className={classes.LanguageSwitcher}>
      <ul>
        <li>
          <button
            className={language === "EN" ? classes.active : null}
            onClick={() => switchLanguageHandler("EN")}
          >
            EN
          </button>
        </li>
        <li>
          <button
            className={language === "FR" ? classes.active : null}
            onClick={() => switchLanguageHandler("FR")}
          >
            FR
          </button>
        </li>
      </ul>
    </div>
  );
};

LanguageSwitcher.propTypes = {};

export default LanguageSwitcher;
