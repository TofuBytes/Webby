//import logo from './logo.svg';
import './App.css';
import React from "react";

import Navbar from "./components/Navbar/Navbar";

import {
    //BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blog";
import Contact from "./pages/contact";

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/

/*function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>
    );
} */

/*

    <Router>
      
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/blogs" element={<Blogs />} />

        </Routes>
    </Router>
*/

function App() {
  return (
    <>
    <div className="Nav">
    <Navbar/>
      <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/tran"  element={<Home/>} />
      <Route path="/about"  element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/blog"  element={<Blogs />}/>
      </Routes>
    </div>
    </>

  
  );
}

export default App;

