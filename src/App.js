import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Welcome} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
