/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule Wishes
 * @flow
 */
'use strict';

const React = require('react');
import {
  FBComments,
} from 'facebook-plugins';

type State = {
};

type Props = {
};

class Wishes extends React.Component<void, State, Props> {

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
      <FBComments appId="1815795118693626"
        href="http://prash88.github.io/my-wedding/"
        width={750}
        numPosts={5}
        locale="en_US"/>
    );
  }
}

module.exports = Wishes;
