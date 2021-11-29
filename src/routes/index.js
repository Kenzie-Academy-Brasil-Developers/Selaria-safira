import { Route, Switch } from "react-router";
import { Home } from "../pages/home";
import { Card } from "../pages/cart ";
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <Card />
      </Route>
    </Switch>
  );
};
