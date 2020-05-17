import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PageTemplate from './components/PageTemplate';
import { initializeUser } from './actions/userActions';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  if(!user.initialized) {
    console.log("initializing user");
    dispatch(initializeUser(), []);
  }

  const { loggedIn } = user

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/"><PageTemplate user={user} /></Route>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} loggedIn={loggedIn} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route {...rest} 
    render={ props => loggedIn ? <Component { ...props } /> : <Redirect to="/login" />} />
  )
}

export default App;
