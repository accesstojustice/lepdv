import React, { Component } from 'react';
import AccordionSection from '../components/AccordionSection';

export default class AccordionSectionContainer extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <AccordionSection open={ this.state.open }/>      
    );
  }
}
