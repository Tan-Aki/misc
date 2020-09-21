import React from 'react';
import classNames from 'classnames/bind';
import ChevronItem from '../../../UI/ChevronItem/ChevronItem';

import classes from '../EducationFR.module.scss';

import PropTypes from 'prop-types';

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
                        <span>
                            Formations Udemy (certificats présentés sur demande)
                        </span>
                        <span>(2020)</span>
                        <ChevronItem label="React - The Complete Guide (incl Hooks, React Router, Redux)" />
                        <ChevronItem label="Advanced CSS and Sass: Flexbox, Grid, Animations and More!" />
                        <ChevronItem label="The Modern JavaScript Bootcamp Course (2020)" />
                        <ChevronItem label="React, NodeJS, Express & MongoDB - The MERN Fullstack Guide" />
                    </div>
                </li>
                <li>
                    <div>
                        <span>Maitrise en Ingénierie Informatique</span>
                        <span>(2007-2012)</span>
                        <ChevronItem label="École supérieure d’informatique SUPINFO (trois années en France et deux à Montréal)" />
                    </div>
                </li>
                <li>
                    <div>
                        <span>
                            Baccalauréat scientifique (équivalent Diplôme
                            d'études collégiales)
                        </span>
                        <span>(2007)</span>
                    </div>
                </li>
            </ul>

            <div>
                <span>Certifications (présentées sur demande)</span>
                <ChevronItem label="ITIL V4 Foundation" />
                <ChevronItem label="MICROSOFT–70-640 Active Directory Windows Serv. 2008" />
            </div>
        </div>
    );
};

Education.propTypes = {};

export default Education;

// import React from "react";
// import classNames from "classnames/bind";
// import ChevronItem from "../../../UI/ChevronItem/ChevronItem";

// import classes from "../Education.module.scss";

// import PropTypes from "prop-types";

// const Education = (props) => {
//   const cx = classNames.bind(classes);

//   const educationClass = cx({
//     page: true,
//     Education: true,
//   });

//   return (
//     <div className={educationClass}>
//       <div>
//         <h3>Formations Udemy (certificats présentés sur demande) (2019-2020)</h3>
//         <ul>
//           <li>
//             <ChevronItem label="React - The Complete Guide (incl Hooks, React Router, Redux)" />
//           </li>
//           <li>
//             <ChevronItem label="Advanced CSS and Sass: Flexbox, Grid, Animations and More!" />
//           </li>
//           <li>
//             <ChevronItem label="The Modern JavaScript Bootcamp Course (2020)" />
//           </li>
//         </ul>
//       </div>
//       <div>
//         <h3>Maitrise en Ingénierie Informatique (2007-2012)</h3>
//         <ul>
//           <li>
//             <ChevronItem label="École supérieure d’informatique SUPINFO (trois années en France et deux à Montréal)" />
//           </li>
//         </ul>
//       </div>

//       <div>
//         <h3>Baccalauréat scientifique (2007) (équivalent Diplôme d'études collégiales)</h3>
//       </div>

//       <div>
//         <h3>Certifications (présentées sur demande)</h3>
//         <ul>
//           <li>
//             <ChevronItem label="ITIL V4 Foundation " />
//           </li>
//           <li>
//             <ChevronItem label="MICROSOFT–70-640 Active Directory Windows Serv 2008" />
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// Education.propTypes = {};

// export default Education;
