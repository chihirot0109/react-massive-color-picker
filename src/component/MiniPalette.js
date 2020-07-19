import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: "pink",
    padding: "0.5rem",
    color: "white"
  },
  colors: {
    backgroundColor: "grey"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  emoji: {
    margin: "0 1rem"
  }
}

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);