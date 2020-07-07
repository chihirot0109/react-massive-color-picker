import React, {Component} from 'react';

class ColorBox extends Component {
  render() {
    const style = {
      backgroundColor: this.props.color.color,
      padding: "40px"
    };

    return(
    <div style={style}>
      <p>color</p>
    </div>
    );
  }
}

export default ColorBox;