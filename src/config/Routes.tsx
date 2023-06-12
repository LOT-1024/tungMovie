import { Route, Switch } from "react-router"
import { Catalog, Detail, Home } from "../pages"

const Routes = () => {
  return (
    <Switch>
        <Route
            path='/:category/search/:keyword'
            component={Catalog}
        />
        <Route
            path='/:category/:id'
            component={Detail}
        />
        <Route
            path='/:category'
            component={Catalog}
        />
        <Route
            path='/'
            exact
            component={Home}
        />
    </Switch>
  )
}

export default Routes