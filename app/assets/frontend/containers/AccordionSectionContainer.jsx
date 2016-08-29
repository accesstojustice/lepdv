import React, { Component } from 'react';
import AccordionSection from '../components/AccordionSection';

export default class AccordionSectionContainer extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  handleOpen() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <AccordionSection
        toggleOpen={ this.handleOpen }
        open={ this.state.open } />
    );
  }
}
