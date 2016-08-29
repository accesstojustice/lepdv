import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import PrintableRequest from './PrintableRequest';
import IntroSteps from './IntroSteps';

let canPrint = '';
let sourceText = '- source';

export default class AccordionPanel extends Component {
  handleClick() {
    this.props.handleClick();
  }

  render() {
    let steps = this.props.advocacySteps;
    let introSteps = steps.map((s, i) => <IntroSteps key={'isteps_' + i} {...s}/>);
    if( this.props.printable ) {
      canPrint = (<PrintableRequest printUrl={ this.printableUrl } />);
    }
    if( this.props.altSourceText ) {
      sourceText = this.props.altSourceText;
    }

    return (
      <div>
        <Button
          bsStyle="primary"
          block
          onClick={ this.handleClick }>{this.props.title}
        </Button>
        <Panel collapsible expanded={this.props.open}>
          <ul>
            {introSteps}
          </ul>
          <a href={this.props.sourceUrl}>
            <div className="pull-right">
              <Button className="source" bsStyle="default" bsSize="xsmall">- source</Button>
            </div>
          </a>
          {canPrint}
        </Panel>
      </div>
    );
  }
}
