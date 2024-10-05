import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes";
function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading... </div>}>
          {routes.map((route, index) => (
            <Route                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
              key={index}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
              path={route.path}
              exact={route.exact}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
              render={(props) => (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              )}
            />
          ))}
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
