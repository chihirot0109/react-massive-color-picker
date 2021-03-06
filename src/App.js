import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import NewPalette from './component/NewPalette';
import Palette from './component/Palette';
import seedColors from './component/seedColors';
import PaletteList from './component/PaletteList';
import SingleColorPalette from './component/SingleColorPalette';
import { getNewPalette } from './component/colorHelper';

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
          path="/palette/new"
          render={() =>
            <NewPalette
            />
          } 
        />
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
          render={routesProps => (
            <SingleColorPalette 
              palette={getNewPalette(
                this.findPalette(routesProps.match.params.paletteId)
              )}
              colorId={routesProps.match.params.colorId}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
