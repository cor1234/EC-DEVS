// import logo from './logo.svg';
// import './App.css';
// import Footer from "./Components/Footer";
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

// export default App;


import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import "./assets/Components/styles/Footer.css";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                    <Footer />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
