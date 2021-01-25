// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Welcome from './Pages/Welcome';
import Footer from './components/Footer';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Profile from './Pages/Profile'
import Home from './Pages/Home';
import Search from './Pages/Search';
import Settings from './Pages/Settings';
import Navbar from './components/Navbar';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest } render={(props) => {
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login" />
  }}/>
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    // if there is no token in localStorage, then the user is in authenticated
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">
          <Navbar handleLogout={handleLogout} isAuth={isAuthenticated}/>

          <Route exact path="/" component={ Welcome }/>
          <Route path='/signup' component={ Signup } />
          <Route path='/login' render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>} />
          
      <Switch>
          <PrivateRoute path="/profile" user={currentUser}  component={ Profile } />
          <PrivateRoute path='/home' user={currentUser} component={Home}/>
          <PrivateRoute path='/search' user={currentUser} component={Search}/>
          <PrivateRoute path='/settings' user={currentUser} component={Settings}/>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
