import React, {Component} from 'react';
import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import 'rc-slider/assets/index.css';
import '../css/NavBar.css'


class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {format: "hex" }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
    this.setState({ format: evt.target.value });
    this.props.handleChange(evt.target.value);
  }

  render() {
    return(
      <header className="NavBar">
        <div className="slider-container">
            <div className="logo">
              <a href="#">React Color Picker</a>
            </div>
            <span>Level: {this.props.level}</span>
            <div className="slider">
              <Slider defaultValue={this.props.level} min={100} max={900} step={100} onAfterChange={this.props.changeLevel}/>
            </div>
            <Select onChange={this.handleChange}>
              <MenuItem value="hex">hex</MenuItem>
              <MenuItem value="rgb">rgb</MenuItem>
              <MenuItem value='rgba'>rgba</MenuItem>
            </Select>
        </div>
      </header>
    );
  }
}

export default NavBar;