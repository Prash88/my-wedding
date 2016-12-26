/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule Content
 * @flow
 */
'use strict';

const React = require('react');
const ANIMATION_TIME = 500;

type State = {
  envelopeClass: string,
  closeClass: string,
  envelopeUpClass: string,
  textClass: string,
};

type Props = {
};

class Content extends React.Component<void, State, Props> {

  state: State;
  props: Props;
  w: number;
  h: number;
  ctx: any;
  heartHeight: number;
  heartWidth: number;
  hearts: any;
  heartImage: string;
  maxHearts: number;
  minScale: number;
  canvas: any;

  static propTypes = {
  };

  constructor() {
    super();
    this.heartHeight = 60;
    this.heartWidth = 64;
    this.hearts = [];
    this.heartImage = 'http://i58.tinypic.com/ntnw5.png';
    this.maxHearts = 8;
    this.minScale = 0.4;
    this.state = {
      envelopeClass: 'pulse',
      closeClass: 'closePulse',
      envelopeUpClass: 'envelopeUpPulse',
      textClass: 'contentTextPulse',
    };
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.setCanvasSize();
    this.ctx = this.refs.canvas.getContext('2d');
    for(var a = 0; a < this.maxHearts; a++) {
      var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
      this.hearts.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        ys: Math.random() + 1,
        height: scale * this.heartHeight,
        width: scale * this.heartWidth,
        opacity: scale
      });
    }
    setInterval(this.draw.bind(this), 30);
  }

  setCanvasSize() {
    this.refs.canvas.width = window.innerWidth;
    this.refs.canvas.height = window.innerHeight;
    this.w = this.refs.canvas.width;
    this.h = this.refs.canvas.height;
  }

  draw() {
    this.setCanvasSize();
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (var i = 0; i < this.hearts.length; i++) {
      var heart = this.hearts[i];
      heart.image = new Image();
      heart.image.style.height = heart.height;
      heart.image.src = this.heartImage;
      this.ctx.globalAlpha = heart.opacity;
      this.ctx.drawImage (heart.image, heart.x, heart.y, heart.width, heart.height);
    }
    this.move();
  }

  move() {
    for(var b = 0; b < this.hearts.length; b++) {
      var heart = this.hearts[b];
      heart.y += heart.ys;
      if(heart.y > this.h) {
        heart.x = Math.random() * this.w;
        heart.y = -1 * this.heartHeight;
      }
    }
  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps: Props) {

  }

  _envlopeClick() {
    this.setState({
      envelopeClass: 'flip',
      closeClass: 'closeFlip',
      envelopeUpClass: 'envelopeUpFlip',
    });
    setTimeout(() => {
      this.setState({
        textClass: 'contentTextFlip',
      });
    }, ANIMATION_TIME);
  }

  _closeClick(e) {
    this.setState({
      envelopeClass: 'flip-back',
      closeClass: 'closePulse',
      envelopeUpClass: 'envelopeUpPulse',
      textClass: 'contentTextPulse',
    });
    setTimeout(() => {
      this.setState({
        envelopeClass: 'pulse',
      });
    }, ANIMATION_TIME);
    e.stopPropagation();
  }

  render() {
    return (
      <div>
        <div
          id="envelope"
          className={this.state.envelopeClass}
          ref="envelope"
          onClick={() => this._envlopeClick()}>
          <div
            className={this.state.envelopeUpClass}
            id="envelope-up"
            ref="envelopeup">
          </div>
          <div
            id="close"
            className={this.state.closeClass}
            onClick={(e) => this._closeClick(e)}>
          </div>
          <div className={this.state.textClass}>
            I love you ♥ ♥ ♥
          </div>
        </div>
        <canvas ref='canvas' id="container">
    		</canvas>
      </div>
	  );
  }

}

module.exports = Content;
