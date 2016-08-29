import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class PrintableRequest extends Component {
  render() {
    return (
      <div className="print-tip center">
        <a href='http://12.218.239.52/Forms/pdf_files/CCG0108.pdf'>
          <small><strong>Affirmatively</strong> ask for an interpreter.</small>
          <div className="pull-left">
            <Button className="source" bsStyle="warning" bsSize="xsmall">printable form</Button>
          </div>
        </a>
      </div>
    );
  }
}
