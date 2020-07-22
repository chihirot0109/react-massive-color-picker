import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  color: {
    width: "20%",
    height: "50%",
  }
}

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getherShades(this.props.palette, this.props.color);
    console.log(this._shades);
  }
  getherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for(let i in allColors){
      shades = shades.concat(
        allColors[i].filter(color => color.id == colorToFilterBy)
      )
    };
    return shades.slice(1);
  }
  render() {
    const classes = this.props.classes;
    const colorBoxes = this._shades.map(shade => (
      <div
        className={classes.color}
        key={shade.hex}
        style={{backgroundColor: `${shade.hex}`}}
      />
    ))
    return(
      <div className={classes.root}>
        {colorBoxes}
        <div
          className={classes.color}
          key={"black"}
          style={{backgroundColor: "black"}}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);