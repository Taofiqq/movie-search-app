import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Starred from './pages/Starred';
import Home from './pages/Home';
import Show from './pages/Show';
import {ThemeProvider} from 'styled-components'

const theme = {
  mainColors: {
    blue: '#663399',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path = '/'>
        <Home />
      </Route>

      <Route exact path = '/starred'>
       <Starred />
      </Route>
      
      <Route exact path = '/show/:id'>
       <Show />
      </Route>
      

      <Route>
      Opps not found
      </Route>
    </Switch>
    </ThemeProvider>
  );
}

export default App;
