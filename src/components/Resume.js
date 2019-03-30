import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegSmile } from 'react-icons/fa';
import { Link } from 'gatsby';

import './style.scss';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  render() {
    return (
      <div className="Email">
       <a type = 'button' className ="button is-outlined is-primary is-large" download href="https://drive.google.com/uc?export=download&id=1JsNc2_PsIFyZV59lqJzIrPU9CZzm1Rbf">Download my resume </a>
      </div>

    );
  }
}

export default Resume
