/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule Menu
 * @flow
 */
'use strict';

const React = require('react');
const PhotoGallery = require('./PhotoGallery');
const Wishes = require('./Wishes');

type State = {
  contentText: string,
};

type Props = {
};

class Menu extends React.Component<void, State, Props> {

  state: State;
  props: Props;

  static propTypes = {
  };

  constructor() {
    super();
    this.state = {
      contentText: 'Invitation',
    };
  }

  componentDidMount() {
    this.setState({
      contentText: 'Invitation',
    });
  }


  componentWillMount() {

  }

  componentWillReceiveProps(nextProps: Props) {
  }

  _invitationClick(e) {
    this.setState({ contentText: 'Invitation' });
    e.stopPropagation();
  }

  _photosClick(e) {
    this.setState({ contentText: 'Photos' });
    e.stopPropagation();
  }

  _calendarClick(e) {
    this.setState({ contentText: 'Calendar' });
    e.stopPropagation();
  }

  _wishesClick(e) {
    this.setState({ contentText: 'Wishes' });
    e.stopPropagation();
  }
  render() {
    const photoGallery = (this.state.contentText === 'Photos') ?
      <PhotoGallery /> :
      null;
    const wishes = (this.state.contentText === 'Wishes') ?
      <Wishes /> :
      null;
    return (
      <div>
        <header className='masthead'>
          <div className='brand-container'>
            <a href=''>
              <div className='brand-initials'>PS</div>
              <div className='brand-name'>Prashanth Weds Sweta</div>
            </a>
          </div>
          <nav>
            <div className='nav-container'>
              <div>
                <a className='slide' onClick={(e) => this._invitationClick(e)}>
                  <span className='element'>In</span>
                  <span className='name'>Invitation</span>
                </a>
              </div>
              <div>
                <a className='slide' onClick={(e) => this._photosClick(e)}>
                  <span className='element'>Ph</span>
                  <span className='name'>Photos</span>
                </a>
              </div>
              <div>
                <a className='slide' onClick={(e) => this._calendarClick(e)}>
                  <span className='element'>Ca</span>
                  <span className='name'>Calendar</span>
                </a>
              </div>
              <div>
                <a className='slide' onClick={(e) => this._wishesClick(e)}>
                  <span className='element'>Wi</span>
                  <span className='name'>Wishes</span>
                </a>
              </div>
            </div>
          </nav>
        </header>
        {photoGallery}
        {wishes}
      </div>
	  );
  }
}

module.exports = Menu;
