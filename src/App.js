import React from 'react';
import { Header } from './Components/Header';
import { HomeWrapper } from './Pages/HomeWrapper';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { NoMatch } from './Pages/NoMatch';
import { CountryWrapper } from './Pages/CountryWrapper';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomeWrapper}/>
        <Route path='/country/:name' component={CountryWrapper}/>
        <Route path='*' component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
