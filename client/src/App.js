import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import OperaArtist from './components/artists/SelectArtist';
import PopArtist from './components/artists/SelectPopArtist';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/opera'>Opera</Link>
            </li>
            <li>
              <Link to='/pop'>Pop</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/pop'>
            <PopArtist />
          </Route>
          <Route path='/opera'>
            <OperaArtist />
          </Route>
          <Route path='/'>
            <OperaArtist />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
