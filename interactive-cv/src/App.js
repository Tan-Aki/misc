import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";
import Layout from "./hoc/Layout/Layout";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import LanguageSwitcher from "./components/UI/LanguageSwitcher/LanguageSwitcher";

import HeaderEN from "./components/Header/EN/Header";
import ProjectsEN from "./components/Pages/Projects/EN/Projects";
import EducationEN from "./components/Pages/Education/EN/Education";
import SkillsEN from "./components/Pages/Skills/EN/Skills";
import AdditionalInfoEN from "./components/Pages/AdditionalInfo/EN/AdditionalInfo";
import ExperiencesEN from "./components/Pages/Experiences/EN/Experiences";
import InfoEN from "./components/Pages/Info/EN/Info";
import ContactEN from "./components/Pages/Contact/EN/Contact";

import HeaderFR from "./components/Header/FR/Header";
import ProjectsFR from "./components/Pages/Projects/FR/Projects";
import EducationFR from "./components/Pages/Education/FR/Education";
import SkillsFR from "./components/Pages/Skills/FR/Skills";
import AdditionalInfoFR from "./components/Pages/AdditionalInfo/FR/AdditionalInfo";
import ExperiencesFR from "./components/Pages/Experiences/FR/Experiences";
import InfoFR from "./components/Pages/Info/FR/Info";
import ContactFR from "./components/Pages/Contact/FR/Contact";

function App() {
  const language = useSelector((state) => state.languageReducer.language);

  const header = language === "FR" ? <HeaderFR /> : <HeaderEN />;

  const projectsPage = language === "FR" ? ProjectsFR : ProjectsEN;
  const educationPage = language === "FR" ? EducationFR : EducationEN;
  const skillsPage = language === "FR" ? SkillsFR : SkillsEN;
  const additionalInfoPage = language === "FR" ? AdditionalInfoFR : AdditionalInfoEN;
  const experiencesPage = language === "FR" ? ExperiencesFR : ExperiencesEN;
  const infoPage = language === "FR" ? InfoFR : InfoEN;
  const contactPage = language === "FR" ? ContactFR : ContactEN;

  const routes = (
    <Switch>
      <Route path="/projects" component={projectsPage} />
      <Route path="/education" component={educationPage} />
      <Route path="/skills" component={skillsPage} />
      <Route path="/additionalInfo" component={additionalInfoPage} />
      <Route path="/experiences" component={experiencesPage} />
      <Route path="/contact" component={contactPage} />
      <Route path="/" component={infoPage} />
    </Switch>
  );

  // if (language === "FR") {
  //   routes = (
  //     <Switch>
  //       <Route path="/projets" component={ProjectsFR} />
  //       <Route path="/formations" component={EducationFR} />
  //       <Route path="/competences" component={SkillsFR} />
  //       <Route path="/infoAdditionnelles" component={AdditionalInfoFR} />
  //       <Route path="/experiences" component={ExperiencesFR} />
  //       <Route path="/contact" component={ContactFR} />
  //       <Route path="/" component={InfoFR} />
  //     </Switch>
  //   );
  //   header = <HeaderFR />;
  // }

  return (
    <div className="App">
      <Layout>
        {header}
        <LanguageSwitcher />
        <Toolbar />
        {routes}
      </Layout>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
