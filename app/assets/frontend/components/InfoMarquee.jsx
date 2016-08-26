import { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import MarqueeText from './MarqueeText';
import EngageBox from './EngageBox';

export default class InfoMarquee extends Component {
  constructor(props) {
    super(props);
    let initialMessage = this.getRandomMessage();
    this.state = {
      message: initialMessage,
      messagesElapsed: 0
    };
    this.tickDisplay = this.tickDisplay.bind(this);
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
      <div id="engageBoxWrapper">
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
        <EngageBox question={ this.props.engageQuestion[0] }/>
      </div>
    )
  }
}
