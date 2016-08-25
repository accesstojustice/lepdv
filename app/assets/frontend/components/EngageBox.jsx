import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class EngageBox extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired
  };

  render() {
    return (
      <div id="engage-box" className="p1 myt0 border rounded block">
        <a href="#">
          <Button id="engageButton" bsSize="xsmall">
            <i className="fa fa-flag-o fa-lg" aria-hidden="true"></i> Another Question
            </Button>
          </a>
          <div id="engageText">
            { this.props.question.body }
          </div>
        </div>
      )
    }
  }
