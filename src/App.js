
import './App.css';
import Navbar from './components/Navbar';
import bg from './bg.svg';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Mutation from './components/Mutation';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Newmutaions from './components/Newmutaions';
import Testpoints from './components/Testpoints';
import { useEffect, useState } from 'react';
import CoronaPage from './components/Corona_PAge';

function App() {

  return (      
  <div className="App">
        <Router>
          <Navbar /> 
          <img src={bg} className="bg1"/>

          <Switch>
            <Route exact path="/">
              <Home />
              <CoronaPage />
              <Mutation />
              <Testpoints />
              <Contact />
            </Route>

            <Route exact path="/mutations">
              <Newmutaions />
            </Route>

          </Switch>

          <Footer />
        </Router>
      </div>
  );
}

export default App;
