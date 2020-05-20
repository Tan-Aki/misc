import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";
import Layout from "./hoc/Layout/Layout";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import moduleName from "./components/UI/LanguageSwitcher/LanguageSwitcher";

import Header from "./components/Header/EN/Header";
import Projects from "./components/Pages/Projects/EN/Projects";
import Education from "./components/Pages/Education/EN/Education";
import Skills from "./components/Pages/Skills/EN/Skills";
import AdditionalInfo from "./components/Pages/AdditionalInfo/EN/AdditionalInfo";
import Experiences from "./components/Pages/Experiences/EN/Experiences";
import Info from "./components/Pages/Info/EN/Info";
import Contact from "./components/Pages/Contact/EN/Contact";

import HeaderFR from "./components/Header/FR/Header";
import ProjectsFR from "./components/Pages/Projects/FR/Projects";
import EducationFR from "./components/Pages/Education/FR/Education";
import SkillsFR from "./components/Pages/Skills/FR/Skills";
import AdditionalInfoFR from "./components/Pages/AdditionalInfo/FR/AdditionalInfo";
import ExperiencesFR from "./components/Pages/Experiences/FR/Experiences";
import InfoFR from "./components/Pages/Info/FR/Info";
import ContactFR from "./components/Pages/Contact/FR/Contact";
import LanguageSwitcher from "./components/UI/LanguageSwitcher/LanguageSwitcher";

function App() {
  const language = useSelector((state) => state.languageReducer.language);

  let routes = (
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route path="/education" component={Education} />
      <Route path="/skills" component={Skills} />
      <Route path="/additionalInfo" component={AdditionalInfo} />
      <Route path="/experiences" component={Experiences} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Info} />
    </Switch>
  );

  let header = <Header />;

  if (language === "FR") {
    routes = (
      <Switch>
        <Route path="/projets" component={ProjectsFR} />
        <Route path="/formations" component={EducationFR} />
        <Route path="/competences" component={SkillsFR} />
        <Route path="/infoAdditionnelles" component={AdditionalInfoFR} />
        <Route path="/experiences" component={ExperiencesFR} />
        <Route path="/contact" component={ContactFR} />
        <Route path="/" component={InfoFR} />
      </Switch>
    );
    header = <HeaderFR />;
  }

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
