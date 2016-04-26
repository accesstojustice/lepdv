
import { Button, PageHeader } from 'react-bootstrap';
import React from 'react';

let infoParagraphs = [
  { id: 1, body: "1 in 3 women experience violence in their lifetime, but together we can survive, heal and thrive. You are not alone. There is a community to support you. Immigrant women experience additional barriers and also have unique assets and strengths. This site provides resources to empower limited english proficient survivors."},
  { id: 2, body: "Intimate partner violence (IPV) is a serious, preventable public health problem that affects millions of Americans. The term \"intimate partner violence\" describes physical violence, sexual violence, stalking and psychological aggression (including coercive acts) by a current or former intimate partner."},
  { id: 3, body: "Stalking is a pattern of repeated, unwanted, attention and contact that causes fear or concern for one’s own safety or the safety of someone else (e.g., family member or friend).  Some examples include repeated, unwanted phone calls, emails, or texts; leaving cards, letters, flowers, or other items when the victim does not want them; watching or following from a distance; spying; approaching or showing up in places when the victim does not want to see them; sneaking into the victim’s home or car; damaging the victim’s personal property; harming or threatening the victim’s pet; and making threats to physically harm the victim."}
]

class AccessOptions extends React.Component {
  render() {
    return (
      <div>
        <Button bsStyle="primary" block>Multilingual Safety Plans</Button>
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
          <li>{this.props.body}</li>
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
        <div className="intro" style={{marginTop: "35px"}}>
          <PageHeader>
            <span style={{color: "#FFF"}}>{this.state.secondsElapsed}</span>
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
        <InfoMarquee moreYouKnowText={infoParagraphs}/>

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
