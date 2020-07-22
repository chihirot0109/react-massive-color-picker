import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../css/NavBar.css'


class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {format: "hex", open: false }
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleChange(evt){
    this.setState({ format: evt.target.value, open: true });
    this.props.handleChange(evt.target.value);
  }

  closeSnackbar(){
    this.setState({open: false});
  }

  render() {
    const { showAllColor } = this.props;
    return(
      <header className="NavBar">
        <div className="slider-container">
          <div className="logo">
            <Link to="/">React Color Picker</Link>
          </div>
          <span>Format: {this.props.level}</span>
          { showAllColor &&
            <div className="slider">
              <Slider defaultValue={this.props.level} min={100} max={900} step={100} onAfterChange={this.props.changeLevel}/>
            </div>
          }
          <div className="select-container">
            <Select onChange={this.handleChange}>
              <MenuItem value="hex">hex</MenuItem>
              <MenuItem value="rgb">rgb</MenuItem>
              <MenuItem value='rgba'>rgba</MenuItem>
            </Select>
          </div>
        </div>
        <Snackbar 
          anchorOrigin={{vertical: "bottom", horizontal: "left"}}
          open={this.state.open}
          autoHideDuration={6000}
          message={<span id="message-id">Format Changed To {this.state.format.toUpperCase()}</span>}
          ContentProps={{"aria-describedby": "message-id"}}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close" 
            >
              <CloseIcon/>
            </IconButton>
          ]}                
        />
      </header>
    );
  }
}

export default NavBar;