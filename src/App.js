import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainHeader from "./components/Layout/MainHeader/MainHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import AlcoholicDrinks from "./pages/AlcoholicDrinks";
import SodaDrinks from "./pages/SodaDrinks";
import EspressoDrinks from "./pages/EspressoDrinks";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <MainHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-us">
            <About />
          </Route>
          <Route exact path="/bauturi-alcoolice">
            <AlcoholicDrinks />
          </Route>
          <Route exact path="/bauturi-racoritoare">
            <SodaDrinks />
          </Route>
          <Route exact path="/bauturi-espresso">
            <EspressoDrinks />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
