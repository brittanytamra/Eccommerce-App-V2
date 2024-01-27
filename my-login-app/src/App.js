// import logo from './logo.svg';
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './Login';

//  import Dashboard from './Dashboard';
//  import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
   <div className="App">
    <Login />

 </div>
//     <Router>
//       <Routes>
//      {/* <Switch> */}
//        <Route path="/login" component={Login} />
//        <ProtectedRoute path="/dashboard" component={Dashboard} />
//     {/* </Switch> */}
//     </Routes>
//  </Router>
  );
}




// move app.js to src folder



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
