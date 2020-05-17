import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { initializeUser } from './actions/userActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(initializeUser(), []));

  const user = useSelector(state => state.user);

  return (
    <BrowserRouter>
      <div className="App">
        <PrivateRoute exact path="/" component={HomePage} loggedIn={ user ? user.loggedIn : false } />
        <Route path="/login" component={LoginPage} />
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
