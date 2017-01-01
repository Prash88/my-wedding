/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule PhotoGallery
 * @flow
 */
'use strict';

const React = require('react');
const photo1 = require('../Assets/DSC_3489.jpg');
const photo2 = require('../Assets/DSC_3482.jpg');
const photo3 = require('../Assets/DSC_3404.jpg');
const photo4 = require('../Assets/DSC_3455.jpg');
const photo5 = require('../Assets/DSC_3470.jpg');
const photo6 = require('../Assets/DSC_3356.jpg');
const photo7 = require('../Assets/DSC_3365.jpg');
const photo8 = require('../Assets/DSC_3353.jpg');

type State = {
};

type Props = {
};

class PhotoGallery extends React.Component<void, State, Props> {

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
      <div />
    );
  }

}

module.exports = PhotoGallery;
