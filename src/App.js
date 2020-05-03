import React from 'react';
import { Header } from './Components/Header';
import { ContentWrapper } from './Pages/ContentWrapper';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { NoMatch } from './Pages/NoMatch';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={ContentWrapper}/>
        <Route path='*' component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
