import React, {Component} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import '../css/ColorBox.css'

class ColorBox extends Component {
  constructor(props){
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState(){
    this.setState({ copied: true }, () => {
     setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const format = this.props.format;
    const color  = this.props.color[format];
    const { copied } = this.state;
    const style = {
      backgroundColor: color
    };
    
    return(
      <CopyToClipboard text={color} onCopy={this.changeCopyState} >
        <div className="ColorBox" style={style} > 
          <div className={`copy-overlay ${ copied && "show"}`} style={style} />
          <h1 className={`copy-msg ${ copied && "show"}`}>copied {color}</h1>
          <div className="copy-container">
            <div className="box-content">
              <span>{this.props.color.name}</span>
            </div>
            <button className="copy-button">copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
