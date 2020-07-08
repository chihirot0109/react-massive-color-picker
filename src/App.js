import React, {Component} from 'react';
import Palette from './component/Palette'
import seedColors from './component/seedColors'
import { getNewPalette } from './component/colorHelper'

class App extends Component {
  render() {
    const colors = getNewPalette(seedColors[4]);
    console.log(colors);
    return(
      <Palette {...seedColors[4]} />
    );
  }
}

export default App;
