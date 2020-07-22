import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: "pink",
    padding: "0.5rem",
    color: "white"
  },
  colors: {
    height: "150px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emoji: {
    margin: "0 1rem",
    fontSize: "1rem"
  },
  miniColor: {
    display: "inline-block",
    height: "25%",
    width: "20%",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4px;"
  }
}

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{backgroundColor: color.color}}
      key={color.name}
    />
  ));
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);