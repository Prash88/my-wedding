/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule PhotoGallery
 * @flow
 */
'use strict';

const React = require('react');
const Carousel = require('nuka-carousel');
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
  mixins: [Carousel.ControllerMixin];

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
    console.log('render');
    return (
      <Carousel
        slidesToShow={1}
        dragging={true}
        edgeEasing="easeOutCirc">
        <img src={photo1}/>
        <img src={photo2}/>
        <img src={photo3}/>
        <img src={photo4}/>
        <img src={photo5}/>
        <img src={photo6}/>
        <img src={photo7}/>
        <img src={photo8}/>
      </Carousel>
    );
  }

}

module.exports = PhotoGallery;
