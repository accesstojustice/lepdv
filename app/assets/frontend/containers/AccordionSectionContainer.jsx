import React, { Component } from 'react';
import AccordionSection from '../components/AccordionSection';

export default class AccordionSectionContainer extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  toggleClick() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <AccordionSection
        open={ this.state.open }
        toggleClick={ this.toggleClick } />
    );
  }
}
