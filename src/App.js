import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <NavBar />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/Projects" component={Projects} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
