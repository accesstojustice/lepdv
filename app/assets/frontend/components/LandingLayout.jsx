
import { Button, PageHeader, Panel } from 'react-bootstrap';
import React from 'react';

let infoParagraphs = [

  { id: 1, body: "Every 9 seconds in the US, a woman is assaulted or beaten.", url: "http://www.bjs.gov/content/pub/pdf/FEMVIED.PDF"},
  { id: 2, body: "On average, nearly 20 people per minute are physically abused by an intimate partner in the United States. During one year, this equates to more than 10 million women and men.", url: "http://www.cdc.gov/violenceprevention/pdf/nisvs_report2010-a.pdf"},
  { id: 3, body: "1 in 3 women and 1 in 4 men have been victims of [some form of] physical violence by an intimate partner within their lifetime.", url: "http://www.cdc.gov/violenceprevention/pdf/nisvs_report2010-a.pdf"},
  { id: 4, body: "1 in 5 women and 1 in 7 men have been victims of severe physical violence by an intimate partner in their lifetime.", url: "http://www.cdc.gov/violenceprevention/pdf/nisvs_report2010-a.pdf"},
  { id: 5, body: "1 in 7 women and 1 in 18 men have been stalked by an intimate partner during their lifetime to the point in which they felt very fearful or believed that they or someone close to them would be harmed or killed.", url: "http://www.cdc.gov/violenceprevention/pdf/nisvs_report2010-a.pdf"},
  { id: 6, body: "On a typical day, there are more than 20,000 phone calls placed to domestic violence hotlines nationwide.", url: "http://nnedv.org/downloads/Census/DVCounts2013/DVCounts13_NatlSummary.pdf"},
  { id: 7, body: "The presence of a gun in a domestic violence situation increases the risk of homicide by 500%.", url: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1447915/"},
  { id: 8, body: "Intimate partner violence accounts for 15% of all violent crime.", url: "http://www.bjs.gov/content/pub/pdf/ndv0312.pdf"},
  { id: 9, body: "Women between the ages of 18-24 are most commonly abused by an intimate partner.", url: "http://www.bjs.gov/content/pub/pdf/ndv0312.pdf"},
  { id: 10, body: "19% of domestic violence involves a weapon.", url: "http://www.bjs.gov/content/pub/pdf/ndv0312.pdf"},
  { id: 11, body: "Domestic victimization is correlated with a higher rate of depression and suicidal behavior.", url: "http://www.bjs.gov/content/pub/pdf/ndv0312.pdf"},
  { id: 12, body: "Only 34% of people who are injured by intimate partners receive medical care for their injuries.", url: "http://www.bjs.gov/content/pub/pdf/ndv0312.pdf"},
]

class ProperRequest extends React.Component {
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
    )
  }
}

class AccessOptions extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true
    };
  }

  render() {


    return (
      <div>
        <h3 className="center">Resource Options</h3>
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
          <ProperRequest />


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
              <li><em>To say the least:</em>Children of the victim, or the offending party -- <strong>do not make adequate interpreters.</strong></li>
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
              <ProperRequest />

            </Panel>
          </div>
        )
      }
    }

    class Map extends React.Component {
      render() {
        return (
          <div>
            <div id="map"></div>
          </div>
        )
      }
    }

    class MarqueeText extends React.Component {
      render() {
        return(
          <li><span className="small">{this.props.body}</span></li>
        )
      }
    }


    class InfoMarquee extends React.Component {
      constructor(props) {
        super(props);
        let initialMessage = this.getRandomMessage();
        this.state = {
          message: initialMessage,
          messagesElapsed: 0
        };
        this.tickDisplay = this.tickDisplay.bind(this);
        // this.getRandomMessage = this.getRandomMessage.bind(this);
      }

      getRandomMessage() {
        let l = this.props.moreYouKnowText.length;
        return this.props.moreYouKnowText.map(r => <MarqueeText key={r.id} body={r.body} />)[Math.floor(Math.random() * l)];

      }

      tickDisplay() {
        let newMessage = this.getRandomMessage();
        this.setState({
          message: newMessage,
          messagesElapsed: (this.state.messagesElapsed + 1)
        });
      }

      componentDidMount() {
        this.interval = setInterval(this.tickDisplay, 10000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);

      }

      render() {
        return (
          <div>
            <div id="reason" className="info-marquee-wrapper">
              <PageHeader>
                <span>{this.state.secondsElapsed}</span>
                <small>
                  <ul>
                    {this.state.message}
                  </ul>
                </small>
              </PageHeader>
              <div id="engage-box" className="p2 border rounded">
                <a href="#"><i class="fa fa-flag-o" aria-hidden="true"></i>primary engage</a>

              </div>

            </div>
          </div>
        )
      }
    }

    export default class LandingLayout extends React.Component {
      render() {
        return (
          <div>
            <div>
              <h2 className="intro">In My Language</h2>
              <span className="intro-subtext">Failures in protection for Victims of Domestic Violence are augmented when a person has Limited English Proficiency.</span>
              <InfoMarquee moreYouKnowText={infoParagraphs}/>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="react-wrapper">
                  <AccessOptions />
                </div>
              </div>

              <div className="col-sm-7 col-sm-offset-1">
                <Map />
              </div>
            </div>
          </div>
        )
      }
    }
