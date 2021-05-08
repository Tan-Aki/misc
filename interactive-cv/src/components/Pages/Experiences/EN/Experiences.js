import React from "react";
import classNames from "classnames/bind";
import ChevronItem from "../../../UI/ChevronItem/ChevronItem";

import classes from "../ExperiencesEN.module.scss";

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
                        <span>Web Developer</span>
                        <span>(mPhase inc. – Oct. 2020 to present)</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>IT Change Manager</span>
                        <span>(exo – Jan. to Nov. 2019)</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>IT Technician</span>
                        <span>(exo – Feb. to Dec. 2018)</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>World traveller & Youth Hostel Manager</span>
                        <span>(South East Asia – Nov. 2016 to Nov. 2017)</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>IT Technician / junior system administrator</span>
                        <span>(Tink Profitabilité numérique – Mar. 2015 to Sep. 2016)</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>IT Technician</span>
                        <span>(exo via Genilan Inc. – Jan. 2013 to Jan. 2015)</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span>MICROSOFT SUPINFO Certified Trainer</span>
                        <span>(SUPINFO International University – Nov. 2010 to June 2011)</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

Experiences.propTypes = {};

export default Experiences;
