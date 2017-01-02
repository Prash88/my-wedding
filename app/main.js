require("./Assets/style.scss")
require("./Assets/headerStyle.scss")
require("./Assets/menuStyle.scss")
require("./Assets/photoStyle.scss")
require("./Assets/calendarStyle.scss")
require("./Assets/invitationStyle.scss")

const React = require('react');
import ReactDom from 'react-dom';

const App = require('./App.js');

ReactDom.render(<App/>, document.getElementById('appContainer'));
