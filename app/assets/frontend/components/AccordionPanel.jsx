import React, { Component, PropTypes } from 'react';
import { Button, Panel } from 'react-bootstrap';
import PrintableRequest from './PrintableRequest';
import IntroSteps from './IntroSteps';

export default class AccordionPanel extends Component {
  static propTypes = {
    toggleOpen: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    steps: PropTypes.array.isRequired,
    canPrint: PropTypes.bool.isRequired,
    printableUrl: PropTypes.string,
    sourceText: PropTypes.string,
    open: PropTypes.bool.isRequired
  }

  // handleToggleOpen(e) {
  //   this.props.toggleOpen()
  // }

  render() {

    const canPrint = <PrintableRequest printUrl={ this.printableUrl } />;

    let introSteps = this.props.steps.map((s, i) =>
        <IntroSteps
          key={'isteps_' + i}
          stepLead={ s.length === 2 ? s[0] : "" }
          stepBody={ s.length === 2 ? s[1] : s[0] }
      />);
    let sourceText = this.props.altSourceText;

    return (
      <div>
        <Button
          bsStyle="primary"
          block
          onClick={ this.props.toggleOpen }>{this.props.title}
        </Button>
        <Panel collapsible expanded={this.props.open}>
          <ul>
            {introSteps}
          </ul>
          <a href={this.props.sourceUrl}>
            <div className="pull-right">
              <Button className="source" bsStyle="default" bsSize="xsmall">{sourceText ? sourceText : '- source'}</Button>
            </div>
          </a>
          {canPrint ? canPrint : ''}
        </Panel>
      </div>
    );
  }
}
