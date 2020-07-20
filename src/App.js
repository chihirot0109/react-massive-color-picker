import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Palette from './component/Palette'
import seedColors from './component/seedColors'
import PaletteList from './component/PaletteList'
import { getNewPalette } from './component/colorHelper'

class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette){
      return palette.id === id;
    });
  }
  render() {
    return(
      <Switch>
        <Route 
          exact 
          path="/" 
          render={routesProps => (
            <PaletteList palettes={seedColors} {...routesProps} 
            />
          )}
        />
        <Route 
          exact 
          path="/palette/:id" 
          render={routeProps => (
            <Palette 
              palette={getNewPalette(
                this.findPalette(routeProps.match.params.id)
              )} 
            />
          )} 
        />
        <Route 
          exact
          path="/palette/:paletteId/:colorId"
          render={() =>
            <h1>New color list here</h1>
          }
        />
      </Switch>
    );
  }
}

export default App;
