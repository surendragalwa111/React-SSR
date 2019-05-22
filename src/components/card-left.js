import React, {Component} from 'react';

class CardLeft extends Component {

  AppNumbers(props) {
    let count = props.appno;
    return(
      <span className={props.withclass}>{count}</span>
    );

  }

  render() {
    return (
      <div className="col-left">
        <p>SSR POC</p>
        <img className="app-icon" src={this.props.img.src} alt={this.props.img.alt} height="120" width="120"/>
      </div>
    );
  }

}


export default CardLeft;
