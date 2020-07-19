import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    title: {
        color: "white",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alighItems: "center"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "5%"
    }
}

class PaletteList extends Component {
    render() {
        const { palettes, classes } = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h1>React Colors</h1>
                    </div>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            <Link to={`/palette/${palette.id}`}><MiniPalette {...palette} /></Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);