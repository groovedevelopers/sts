import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Redirect,
  Route,
} from "react-router-dom";
import About from "./pages/about";

import Home from "./pages/home";
import Shop from "./pages/shop";

function App() {
  return (
    <div className="App">
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>

          <Route exact path="/">
            <Redirect to="/home"  />
          </Route>
          <Route path="/home" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about" exact component={About} />
          </Switch>
      </Suspense>

      
    </Router>
    </div>
  );
}

export default App;
