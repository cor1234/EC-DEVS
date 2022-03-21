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
//  hello
// export default App;


import React from "react";
import Header from "./assets/Components/Header";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/Components/styles/Footer.css";
import Footer from "./assets/Components/Footer";
// import Navbar from "./assets/Components/Navbar";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
             {/* this is app1  */}
             {/* <Navbar/>  */}
             <Header/> 
                <Switch>
                    <Route exact path="/" component={Footer}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
