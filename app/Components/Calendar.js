/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule Calendar
 * @flow
 */
'use strict';

const React = require('react');

type State = {
};

type Props = {
};

class Calendar extends React.Component<void, State, Props> {

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
        <ul className="main">
          <li className="date">
            <h3>Wednesday, Feb 8, 2017</h3>
            <p>Schedule of Events</p>
          </li>
          <li className= "events">
            <ul className="events-detail">
              <li>
                <a>
                  <span className="event-time">10.00 am</span>
                  <span className="event-name"> - Vratham</span>
                  <br />
                  <span className="event-location">At : Vijaya Mahal, 33 Pondi bazar, Thiyagaraya Nagar, Chennai - 11</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="event-time">3.00 pm</span>
                  <span className="event-name"> - Nichayathartham</span>
                  <br />
                  <span className="event-location">At : Vijaya Mahal, 33 Pondi bazar, Thiyagaraya Nagar, Chennai - 11</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="event-time">6:30pm - 10.00 pm</span>
                  <span className="event-name"> - Marriage Reception</span>
                  <br />
                  <span className="event-location">At : Vijaya Mahal, 33 Pondi bazar, Thiyagaraya Nagar, Chennai - 11</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="event-time">6:30pm - 10.00 pm</span>
                  <span className="event-name"> - Vocal Performance : Smt. Ranjani Sivakumar & Party</span>
                  <br />
                  <span className="event-location">At : Vijaya Mahal, 33 Pondi bazar, Thiyagaraya Nagar, Chennai - 11</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="event-time">6:30pm - 10.00 pm</span>
                  <span className="event-name"> - Other vocal & dance performances</span>
                  <br />
                  <span className="event-location">At : Vijaya Mahal, 33 Pondi bazar, Thiyagaraya Nagar, Chennai - 11</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="date">
            <h3>Thursday, Feb 9, 2017</h3>
            <p>Schedule of Events</p>
          </li>
          <li className= "events">
            <ul className="events-detail">
              <li>
                <a>
                  <span className="event-time">7:30am - 8.30 am</span>
                  <span className="event-name"> - Muhurtham</span>
                  <br />
                  <span className="event-location">At : Vijaya Mahal, 33 Pondi bazar, Thiyagaraya Nagar, Chennai - 11</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="date">
            <h3>Sunday, Feb 12, 2017</h3>
            <p>Schedule of Events</p>
          </li>
          <li className= "events">
            <ul className="events-detail">
              <li>
                <a>
                  <span className="event-time">6:30pm - 10.00 pm</span>
                  <span className="event-name"> - Marriage Reception</span>
                  <br />
                  <span className="event-location">At : Akshaya Hall, Amutha Bhavan, Sampath Nagar, Erode - 11</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = Calendar;
