import { Route, Switch } from "react-router";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
}

export default Routes;
