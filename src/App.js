import React, {Component} from 'react';
import Palette from './component/Palette'
import seedColors from './component/seedColors'

class App extends Component {
  render() {
    return(
      <Palette {...seedColors[4]} />
    );
  }
}

export default App;
