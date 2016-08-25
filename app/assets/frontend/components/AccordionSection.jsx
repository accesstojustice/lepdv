import { Component } from 'react'
import { Button, Panel } from 'react-bootstrap'
import PrintableRequest from './PrintableRequest'

export default class AccordionSection extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>

        <h3 className="center block">Resource Options</h3>
        <Button
          bsStyle="primary"
          block
          onClick={ ()=> this.setState({ open: !this.state.open })}>Multilingual Safety Plans
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <ul>
            <li><strong>Introduction: </strong>You cannot control your (ex) partner’s violence, but it may be possible to increase your own safety as well as the safety of your children</li>
            <li><strong>Taking Care of Yourself: </strong>Take part in social activities (e.g. programs at your local community or Early Years centre, dinner with friends, etc.)</li>
            <li><strong>Escape Plan: </strong>Make Copies of:  Marriage certificate, divorce papers, custody documentation, court orders, restraining orders, or other legal documents; Work Permits; Bank Books</li>
          </ul>
          <a href='http://www.pcawa.net/uploads/1/4/7/1/14711308/pcawa_safety_handbook_2010_10_28_-_eng.pdf'>
            <div className="pull-right">
              <Button className="source" bsStyle="default" bsSize="xsmall">- source</Button>
            </div>
          </a>

        </Panel>

        <Button
          bsStyle="primary"
          block
          onClick={ ()=> this.setState({ open: !this.state.open })}>Right to an Interpreter
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <ul>
            <li>Although the United States Constitution does not explicitly provide for the right to an interpreter, the individual rights and liberties afforded to all individuals under the Fourth, Fifth, Sixth, Eighth and Fourteenth Amendments are meaningless for non- or limited-English speakers unless they are provided with complete, competent, and accurate interpreting services.</li>
            <li>In recent years, the U.S. Department of Justice has been reviewing state court's compliance with this executive order.</li>
          </ul>

          <a href='http://www.najit.org/certification/faq.php'>
            <div className="pull-right">
              <Button className="source" bsStyle="default" bsSize="xsmall">- source</Button>
            </div>
          </a>
          <PrintableRequest />


        </Panel>

        <Button bsStyle="primary"
          block
          onClick={ () => this.setState({ open: !this.state.open })}>Interpretation Contact
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <ul>
            <li>Describe your roles and clarify expectations</li>
            <li>Ensure that the interpreter is taking notes</li>
            <li>Pause frequently to allow the interpreter to translate information</li>
          </ul>
          {/* // TODO: no need to link to addresses+ info on all interpreters
            <a href='https://publicapps.illinoiscourts.gov/pub/f?p=303:25:'>
            <div className="pull-right">
            <Button className="source" bsStyle="success" bsSize="xsmall">interpreter registry</Button>
            </div>
            </a>
            */}
            <a href='http://www.asha.org/practice/multicultural/issues/interpret.htm'>
              <div className="pull-right">
                <Button className="source" bsStyle="default" bsSize="xsmall">- source</Button>
              </div>
            </a>

          </Panel>

          <Button
            bsStyle="primary"
            block
            onClick={ () => this.setState({ open: !this.state.open })}>Legal Terms
          </Button>
          <Panel collapsible expanded={this.state.open}>
            <ul>
              <li>Words and phrases used in the courtroom and conversational-English are <strong>not</strong> the same.</li>
              <li>Note: translations are various and my differ, according to regional dialects of target (foreign) language used, etc.</li>
              <li><em>Attention: </em>Children of the victim, or the offending party -- <strong>do not make adequate interpreters.</strong></li>
            </ul>
            {/* // TODO: link to an interpreter resource that helps decifer phrases, or glossaries
              <a href='https://publicapps.illinoiscourts.gov/pub/f?p=303:25:'>
              <div className="pull-right">
              <Button className="source" bsStyle="success" bsSize="xsmall">interpreter registry</Button>
              </div>
              </a>
              */}
              <a href='http://www.abajournal.com/magazine/article/justice_moves_slowly_for_those_who_need_interpreters'>
                <div className="pull-right">
                  <Button className="source" bsStyle="warning" bsSize="xsmall">more on this topic</Button>
                </div>
              </a>
            </Panel>

            <Button
              bsStyle="primary"
              block
              onClick={ () => this.setState({ open: !this.state.open })}>I'm Going to Court
            </Button>
            <Panel collapsible expanded={this.state.open}>
              <ul>
                <li>You cannot contact the office of interpreter services directly.</li>
              </ul>
              <a href='http://www.cookcountycourt.org/ABOUTTHECOURT/OfficeoftheChiefJudge/CourtRelatedServices/OfficeofInterpreterServices.aspx'>
                <div className="pull-right">
                  <Button className="source" bsStyle="default" bsSize="xsmall">- source</Button>
                </div>
              </a>
              <PrintableRequest />

            </Panel>
          </div>
        )
      }
    }
