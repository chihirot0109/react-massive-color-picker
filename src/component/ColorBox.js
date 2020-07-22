import React, {Component} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import '../css/ColorBox.css';

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
    const { name, moreUrl, background, showingFullPalette } = this.props;
    const { copied } = this.state;
    const luminance = chroma(background).luminance();
    
    return(
      <CopyToClipboard text={background} onCopy={this.changeCopyState} >
        <div className="ColorBox" style={{ background }} > 
          <div className={`copy-overlay ${ copied && "show"}`} style={{background}}/>
            <div className={`copy-msg ${ copied && "show"}`}>
              <h1>Copied!</h1>
              <p>{background}</p>
            </div>
          <div className="copy-container">
            <div className={luminance > 0.2 ? "box-content" : "box-content dark"}>
              <span>{name}</span>
            </div>
            <button className="copy-button">copy</button>
          </div>
          { showingFullPalette &&
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className="see-more">More</span>
            </Link>
          }
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
