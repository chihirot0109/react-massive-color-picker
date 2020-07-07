import React, {Component} from 'react';
import ColorBox from './ColorBox'

class Palette extends Component {
  render() {
      let colors = this.props.colors;
    return(
    <div className="Palette">
        <div className="Palette-colors">
          {colors.map(color => <ColorBox color={color} />)}
        </div>
    </div>
    );
  }
}

export default Palette;