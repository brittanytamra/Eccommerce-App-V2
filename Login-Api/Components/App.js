import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import Preferences from '../Components/Preferences';
import Login from '../Login/Login';

function App() {

    if(!token) {
        return <Login setToken={setToken} />
    }
    return (
      <div className="wrapper">
        const [token, settoken] = useState();
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

export default App;