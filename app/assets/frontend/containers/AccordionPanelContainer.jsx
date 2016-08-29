import React, { Component, PropTypes } from 'react';
import AccordionPanel from '../components/AccordionPanel';

let canPrint = false;

export default class AccordionPanelContainer extends Component {
  static propTypes = {
    toggleOpen: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    advocacySteps: PropTypes.array.isRequired,
    altSourceText: PropTypes.string,
    open: PropTypes.bool.isRequired

  }

  handleOpen() {
    return this.props.open;
  }

  render() {
    return (
      <AccordionPanel
        open={this.handleOpen()}
        toggleOpen={this.props.toggleOpen}
        title={this.props.title}
        steps={this.props.advocacySteps}
        canPrint={canPrint}
        printableUrl={this.props.printableUrl}
        altSourceText={this.props.altSourceText} />
    );
  }
}
