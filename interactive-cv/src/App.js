import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Projects from "./components/Pages/Projects/Projects";
import Education from "./components/Pages/Education/Education";
import Skills from "./components/Pages/Skills/Skills";
import AdditionalInfo from "./components/Pages/AdditionalInfo/AdditionalInfo";
import Experiences from "./components/Pages/Experiences/Experiences";
import Info from "./components/Pages/Info/Info";
import Contact from "./components/Pages/Contact/Contact";
import Logout from "./components/Pages/Logout/Logout";

import Header from "./components/Header/Header";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Toolbar />
        <Switch>
          {/* <Route path="/checkout" component={Checkout} /> */}
          <Route path="/projects" component={Projects} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/additionalInfo" component={AdditionalInfo} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Info} />
        </Switch>
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
