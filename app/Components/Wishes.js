/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule Wishes
 * @flow
 */
'use strict';

const React = require('react');
import FacebookProvider, { Comments } from 'react-facebook';

type State = {
};

type Props = {
};

class Wishes extends React.Component<void, State, Props> {

  state: State;
  props: Props;
  renderedComponent: {};

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
    this.renderedComponent =
        <div>
          <p className='hideMe'>May take few seconds to load...</p>
          <FacebookProvider appID="1815795118693626">
            <Comments href="https://prash88.github.io/my-wedding/" />
          </FacebookProvider>
        </div>;
  }

  render () {
    return this.renderedComponent;
  }
}

module.exports = Wishes;
