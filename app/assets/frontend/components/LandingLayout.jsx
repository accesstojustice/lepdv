
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
          onClick={ ()=> this.setState({ open: !this.state.open })}>Multilingual Safety Plans</Button>
        <Panel collapsible expanded={this.state.open}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </Panel>
        <Button bsStyle="primary" block>Right to Interpreter</Button>
        <Button bsStyle="primary" block>Interpretation Contact</Button>
        <Button bsStyle="primary" block>Legal Terms</Button>
        <Button bsStyle="primary" block>I'm Going to Court</Button>
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
