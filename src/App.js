import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Palette from './component/Palette'
import seedColors from './component/seedColors'
import { getNewPalette } from './component/colorHelper'

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1> }/>
        <Route exact path="/palette/:id" render={() => <h1>PALETTE GOES HERE</h1>} />
      </Switch>
      /* <Palette palette={getNewPalette(seedColors[4])} /> */
    );
  }
}

export default App;
