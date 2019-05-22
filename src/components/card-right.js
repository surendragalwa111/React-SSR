import React, {Component} from 'react';
import Title from './title';
const tweet = require('./tweet');

class CardRight extends Component {

  render() {
    return (
      <div className="col-right">
        <div className="app-meta">
           <Title name={this.props.name} publisher={this.props.app.publisher}/>
           <span className="app-lic">{this.props.app.price}</span>
        </div>
        <div className="app-intro" dangerouslySetInnerHTML={{__html: this.props.app.desc}} />
        <hr />
        <div className="app-link">
          <a className="btn" href={this.props.app.link} target="_blank">Visit Sigma Website</a>
          <a href="#/" className="btn btn-twitter" title="Share on Twitter" rel="nofollow"
             onClick={((e) =>{tweet(this.props.app.tweet); e.preventDefault();})}>
            Tweet about Sigma
          </a>

        </div>
      </div>
    );
  }

}


export default CardRight;
