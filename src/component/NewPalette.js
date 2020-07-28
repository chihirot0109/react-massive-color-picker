import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/NewPaletteStyles"

class NewPalette extends Component {
  render(){
    return(
      <div>
        <h1>New Palette </h1>
      </div>
    );
  }
}

export default withStyles(styles)(NewPalette)