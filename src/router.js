import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'pages/Login';
import Feira from 'pages/Feira';
import Carrinho from 'pages/Carrinho';
import UserContextProvider from 'common/contexts/User';
import CartContenxtProvider from 'common/contexts/Cart';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <UserContextProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <CartContenxtProvider>
            <Route path="/feira">
              <Feira />
            </Route>
          </CartContenxtProvider>
        </UserContextProvider>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </Router>
  )
};