/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule Menu
 * @flow
 */
'use strict';

const React = require('react');

type State = {
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
    };
  }

  componentDidMount() {

  }


  componentWillMount() {

  }

  componentWillReceiveProps(nextProps: Props) {

  }

  render() {
    return (
      <div className={this.state.contentText}>
        This is my sample wedding invitation
      </div>
	  );
  }

}

module.exports = Menu;
