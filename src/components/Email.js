import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegSmile } from 'react-icons/fa';
import './style.scss';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  render() {
    return (
      <div className="email">
        <CopyToClipboard
          text="frankamalafronte@gmail.com"
          onCopy={() => this.setState({ copied: !this.state.copied })}
        >
          {this.state.copied ? (
            <button
              type="button"
              className="button is-outlined is-primary is-large"
              
            >
              <FaRegSmile />
            </button>
          ) : (
            <button
              type="button"
              className="button is-primary is-outlined is-large"
            >
              Copy my email
            </button>
          )}
        </CopyToClipboard>
      </div>
    );
  }
}

export default Email

