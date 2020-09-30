import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Skills.module.scss';
import ChevronItem from '../../../UI/ChevronItem/ChevronItem';
import classNames from 'classnames/bind';
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';

const Skills = (props) => {
    const cx = classNames.bind(classes);

    const skillsClass = cx({
        page: true,
        Skills: true,
    });

    return (
        <div className={skillsClass}>
            <div className={classes.SkillsSection}>
                <h3>Compétences en programmation:</h3>
                <ul>
                    <li>
                        <ChevronItem label="React.JS (avec Lifecycle hooks/React hooks)" />
                        <ProgressBar percent="70" />
                    </li>
                    <li>
                        <ChevronItem label="JavaScript ES5/ES6" />
                        <ProgressBar percent="70" />
                    </li>
                    <li>
                        <ChevronItem label="HTML 5" />
                        <ProgressBar percent="65" />
                    </li>
                    <li>
                        <ChevronItem label="CSS 3/SCSS" />
                        <ProgressBar percent="70" />
                    </li>
                    <li>
                        <ChevronItem label="Redux, Redux-Thunk, Redux-Saga, React-Router" />
                        <ProgressBar percent="65" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <ChevronItem label="Node.JS/NPM" />
                        <ProgressBar percent="50" />
                    </li>
                    <li>
                        <ChevronItem label="GitHub" />
                        <ProgressBar percent="50" />
                    </li>
                    <li>
                        <ChevronItem label="Express.JS" />
                        <ProgressBar percent="50" />
                    </li>
                    <li>
                        <ChevronItem label="MongoDB" />
                        <ProgressBar percent="40" />
                    </li>
                    <li>
                        <ChevronItem label="Testing avec Chai/Mocha/Jest" />
                        <ProgressBar percent="45" />
                    </li>
                    <li>
                        <ChevronItem label="AWS S3" />
                        <ProgressBar percent="20" />
                    </li>
                </ul>
            </div>
            <div className={classes.Knowledge}>
                <h3>Autres connaissances et notions en informatique:</h3>
                <ul>
                    <li>
                        <ChevronItem label="Impliqué, rigoureux, autonome, excellent relationnel, solide compréhension générale du monde de l’informatique" />
                    </li>
                    <li>
                        <ChevronItem label="Notions académiques de plusieurs langages de programmation (Java, PHP, ASP.net et C#.net, lisp, C, C++, Objective-C, assembleur)" />
                    </li>
                    <li>
                        <ChevronItem label="Méthodologie ITIL et notions méthodologie Agile & SCRUM" />
                    </li>
                    <li>
                        <ChevronItem label="Windows 7, 8, 10 et Windows Serveurs, Linux, Mac OS, suite Office" />
                    </li>
                    <li>
                        <ChevronItem label="Plateformes ITSM et outils de ticketing (JIRA, Octopus, Connectwise)" />
                    </li>
                    <li>
                        <ChevronItem label="Systèmes d’échanges de courriels, de virtualisation, de stockage, de sauvegarde, de bases de données, de monitoring" />
                    </li>
                    <li>
                        <ChevronItem label="Réseautique, pares-feux et protocoles (TCP/IP, DNS, DHCP, FTP, HTTP, SSL, …)" />
                    </li>
                    <li>
                        <ChevronItem label="Scripting en VBS et PowerShell" />
                    </li>
                    <li>
                        <ChevronItem label="Services d’hébergement" />
                    </li>
                </ul>
            </div>
            <div className={classes.Languages}>
                <h3>Langues:</h3>
                <ul>
                    <li>
                        <ChevronItem label="Anglais: excellent" />
                    </li>
                    <li>
                        <ChevronItem label="Français: langue maternelle" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

Skills.propTypes = {};

export default Skills;
