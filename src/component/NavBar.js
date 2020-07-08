import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../css/NavBar.css'

class NavBar extends Component {
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
        </div>
      </header>
    );
  }
}

export default NavBar;