/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule App
 */
'use strict';

const React = require('react');
const Header = require('./Components/Header');
const Content = require('./Components/Content');
const Favicon = require('react-favicon');
const Footer = require('./Components/Footer');
const faviconUrl = require('./Assets/favicon.ico');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Favicon url={ faviconUrl }/>
        <Footer />
      </div>
    );
  }
}

module.exports = App;
