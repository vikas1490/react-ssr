import React from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homePageComp";
import AboutPage from "./pages/aboutPageComp.tsx";
import ContactPage from "./pages/contactPageComp";
import Header from "./pages/headerComp";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/about" component={AboutPage} exact />
        <Route path="/contactus" component={ContactPage} exact />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
