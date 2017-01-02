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
            <h2>Together with our parents, we cordially invite you and your family's gracious presence at the wedding & reception of</h2>
            <h1>Prashanth & Sweta</h1>
              <p className= "line">_________________________________</p>
              <h2>Reception</h2>
              <p>On Wednesday, Feb 8, 2017</p>
              <p>After 6:30 PM</p>
              <p>At Vijaya Mahal, 33 Pondi bazar, Thiyagaraya Nagar, Chennai - 11</p>
              <br />
              <h2>Wedding</h2>
              <p>On Thursday, Feb 9, 2017</p>
              <p>Between 7:30am - 8.30 am</p>
              <p>At Vijaya Mahal, 33 Pondi bazar, Thiyagaraya Nagar, Chennai - 11</p>
              <br />
              <h2>Reception</h2>
              <p>On Sunday, Feb 12, 2017</p>
              <p>After 6:30 PM</p>
              <p>Akshaya Hall, Amutha Bhavan, Sampath Nagar, Erode - 11</p>
              <p className= "line">__________________________________</p>
              <h2>With best compliments from near and dear</h2>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Invitation;
