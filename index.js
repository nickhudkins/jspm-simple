import './index.less!'
import React, { Component } from 'react';
import { render } from 'react-dom';

class Welcome extends Component {
  render() {
    return <div>Hello React.</div>;
  }
}

render(<Welcome />, document.getElementById('root'));
