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

import ImageGallery from 'react-image-gallery';

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

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {
    const images = [
     {
       original: photo1,
       description: 'During our engagement',
     },
     {
       original: photo2,
       description: 'During our engagement',
     },
     {
       original: photo3,
       description: 'During our engagement',
     },
     {
       original: photo4,
       description: 'During our engagement',
     },
     {
       original: photo5,
       description: 'During our engagement',
     },
     {
       original: photo6,
       description: 'During our engagement',
     },
     {
       original: photo7,
       description: 'During our engagement',
     },
     {
       original: photo8,
       description: 'During our engagement',
     },
   ];
    return (
     <ImageGallery
       className='gallery'
       ref={i => this._imageGallery = i}
       items={images}
       slideInterval={2000}
       showFullscreenButton={false}
       autoPlay={true}
       onImageLoad={this.handleImageLoad}/>
    );
  }
}

module.exports = PhotoGallery;
