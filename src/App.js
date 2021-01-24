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
  console.log('Private Route >>>', user);
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
      console.log('is Authenticated: >>> false');
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      console.log(`decode token: >>>`);
      console.log(token);
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('nowCurentUser is here...');
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
          <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} user={currentUser} />
          <Route path='/signup' component={ Signup } />
          <Route 
            path='/login' 
            render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>} />
        <Switch>
          <Route path="/profile" component={ Profile } user={currentUser} handleLogout={handleLogout} />
          <Route exact path="/" component={ Welcome }/>
          <Route path='/home' component={Home}/>
          <Route path='/search' component={Search}/>
          <Route path='/settings' component={Settings}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
