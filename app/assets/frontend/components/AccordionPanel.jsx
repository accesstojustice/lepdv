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
    altSourceText: PropTypes.string,
    sourceUrl: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired
  }

  render() {

    const canPrintInstructions = <PrintableRequest printUrl={ this.printableUrl } />;

    let introSteps = this.props.steps.map((s, i) =>
        <IntroSteps
          key={'isteps_' + i}
          stepLead={ s.length === 2 ? s[0] : "" }
          stepBody={ s.length === 2 ? s[1] : s[0] }
      />);
    let sourceText = this.props.altSourceText;

    let caret = <i className="fa fa-caret-square-o-down fa-fw" aria-hidden="true"></i>;

    if(!this.props.open) {
      caret = <i className="fa fa-caret-square-o-left fa-fw" aria-hidden="true"></i>;
    }

    return (
      <div>
        <Button
          bsStyle="primary"
          block
          onClick={ this.props.toggleOpen }><span className="pull-right ">{caret}</span>  {this.props.title}
        </Button>
        <Panel collapsible expanded={this.props.open}>
          <ul>
            {introSteps}
          </ul>
          <a href={this.props.sourceUrl} target="_blank">
            <div className="pull-right">
              <Button className="source" bsStyle="default" bsSize="xsmall">{sourceText ? sourceText : '- source'}</Button>
            </div>
          </a>
          {this.props.canPrint ? canPrintInstructions : ''}
        </Panel>
      </div>
    );
  }
}
