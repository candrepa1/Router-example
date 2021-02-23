import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home.js';
import Store from './components/Store.js';
import FAQ from './components/FAQ.js';
import About from './components/About.js';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter> 
      <NavigationBar />
      <Switch>

        <Route path="/store">
          <Store /> 
        </Route>

        <Route path="/faq">
          <FAQ />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/">
          <Home />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
