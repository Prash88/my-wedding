/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule Invitation
 * @flow
 */
'use strict';

const React = require('react');
import FacebookProvider, { Comments } from 'react-facebook';

type State = {
};

type Props = {
};

class Invitation extends React.Component<void, State, Props> {

  state: State;
  props: Props;

  static propTypes = {
  };

  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  render () {
    return (
      <div>
        <div className="invite">
          <div className ="info">
            <h2>Together with their parents,</h2>
            <h1>Prashanth & Sweta</h1>
            <h2>cordially invites you and your family's gracious presence at their wedding</h2>
            <div className="clover">
              <img src={require('../Assets/prashanth_cropped.jpg')} className="a" />
              <img src={require('../Assets/sweta_cropped.jpg')} className="b" />
            </div>
            <p className= "line">___________________________</p>
            <h2>Reception</h2>
            <p>On Wednesday, Feb 8, 2017</p>
            <p>After 6:30 PM</p>
            <p>At Vijaya Mahal, 33 Pondi bazar, Thiyagaraya Nagar, Chennai - 11</p>
            <div>
              <a href='https://goo.gl/maps/gY4VRxph5FC2'>Maps link</a>
            </div>
            <br />
            <h2>Wedding</h2>
            <p>On Thursday, Feb 9, 2017</p>
            <p>Between 7:30am - 8.30 am</p>
            <p>At Vijaya Mahal, 33 Pondi bazar, Thiyagaraya Nagar, Chennai - 11</p>
            <div>
              <a href='https://goo.gl/maps/gY4VRxph5FC2'>Maps link</a>
            </div>
            <br />
            <h2>Reception</h2>
            <p>On Sunday, Feb 12, 2017</p>
            <p>After 6:30 PM</p>
            <p>At Akshaya Hall, Amutha Bhavan, Sampath Nagar, Erode - 11</p>
            <div>
              <a href='https://goo.gl/maps/jUSwxwVJv8K2'>Maps link</a>
            </div>
            <p className= "line">____________________________</p>
            <h2>With best compliments from near and dear</h2>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Invitation;
