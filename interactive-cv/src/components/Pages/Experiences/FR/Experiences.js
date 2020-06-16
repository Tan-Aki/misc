import React from "react";
import classNames from "classnames/bind";
import ChevronItem from "../../../UI/ChevronItem/ChevronItem";

import classes from "../ExperiencesFR.module.scss";

const Experiences = (props) => {
  const cx = classNames.bind(classes);

  const experienceClass = cx({
    page: true,
    Experiences: true,
  });

  return (
    <div className={experienceClass}>
      <ul>
        <li>
          <div>
            <span>Gestionnaire de changements TI</span>
            <span>(exo – Jan. à Nov. 2019)</span>
          </div>
        </li>
        <li>
          <div>
            <span>Technicien informatique</span>
            <span>(exo – Fév. à Déc. 2018)</span>
          </div>
        </li>
        <li>
          <div>
            <span>Voyageur du monde & gestionnaire auberge de jeunesse</span>
            <span>(Asie du Sud-Est – Nov. 2016 à Nov. 2017)</span>
          </div>
        </li>
        <li>
            <div>
              <span>Technicien informatique / administrateur de systèmes junior</span>
              <span>(Tink Profitabilité numérique – Mars 2015 à Sep. 2016)</span>
            </div>
        </li>
        <li>
          <div>
            <span>Technicien informatique</span>
            <span>(exo via Genilan Inc. – Jan. 2013 à Jan. 2015)</span>
          </div>
        </li>
        <li>
          <div>
            <span>Formateur MICROSOFT</span>
            <span>(École supérieure d’informatique SUPINFO – Nov. 2010 à Juin 2011)</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

Experiences.propTypes = {};

export default Experiences;
