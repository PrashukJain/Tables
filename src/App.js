import Home from './components/Home'
import './App.css';
import AirportInfo from './components/AirportInfo'
import TimezoneInfo from './components/TimezoneInfo'
import ErrorMessage from './components/ErrorMessage'
import { BrowserRouter , Switch, Route } from "react-router-dom";
import RoleInfo from './components/RoleInfo'
import CityView from './components/CityView'
import Login from './components/Login';
import { GuardProvider, GuardedRoute } from 'react-router-guards'
import axios from 'axios';
function App() {
  const requireLogin = (to,from,next) => {
    if (localStorage.getItem("token") === null) {
        next.redirect('/');
    }
    next()
}
axios.interceptors.request.use(
  function (request) {
    if (
      !request.url.includes("login")     ){
      request.headers["Authorization"]="Bearer "+localStorage.getItem("token")
    }

      return request;
  },
  function (error) {

    return Promise.reject(error);
  }
);

  return (
    <>
      <BrowserRouter>
        <Switch>
       <GuardProvider guards={requireLogin}>
          <Route exact path="/">
              <Login />
            </Route>
            <GuardedRoute path="/home" exact component={Home}/>
        <GuardedRoute exact path="/airportInfo">
              <AirportInfo />
            
            </GuardedRoute>
            <GuardedRoute path="/city">
          <CityView/>
            </GuardedRoute>
            <GuardedRoute path="/country">
          <CityView/>
            </GuardedRoute>
            <GuardedRoute path="/timezone">
             
              <TimezoneInfo />
            </GuardedRoute>
            <GuardedRoute path="/role">
             
              <RoleInfo />
            </GuardedRoute>
            <GuardedRoute path="/error">
            
              <ErrorMessage />
            </GuardedRoute>
          </GuardProvider>
        </Switch>
        </BrowserRouter>

    </>
  );
}

export default App;
