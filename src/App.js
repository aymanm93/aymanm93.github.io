import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



import Home from './views/Home'
import AboutMe from './views/AboutMe';
import ContactMe from './views/ContactMe';
import Projects from './views/Projects';



export class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      
       <Switch>
          <Route exact path= "/">
            <Home />
          </Route>

          <Route exact path= "/Projects">
            <Projects />
          </Route>

          <Route exact path= "/ContactMe">
            <ContactMe/>
          </Route>

          <Route exact path="/AboutMe">
            <AboutMe/>
          </Route>
        </Switch>
      

      </BrowserRouter>
    )
  }
}

export default App
