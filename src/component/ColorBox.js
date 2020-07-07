import React, {Component} from 'react';
import '../css/ColorBox.css'

class ColorBox extends Component {
  render() {
    const style = {
      backgroundColor: this.props.color.color,
    };

    return(
    <div className="ColorBox" style={style}>
      <p>{this.props.color.name}</p>
    </div>
    );
  }
}

export default ColorBox;