import React, { Component, PropTypes } from 'react';
import MarqueeText from '../components/MarqueeText';
import InfoMarquee from '../components/InfoMarquee';

export default class InfoMarqueeContainer extends Component {
  static propTypes = {
    engageQuestion: PropTypes.array.isRequired,
    moreYouKnowText: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    let initialMessage = this.getRandomMessage();
    this.state = {
      message: initialMessage,
      messagesElapsed: 0,
      secondsElapsed: 0
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
      message: newMessage
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
      <InfoMarquee
        message={this.state.message}
        engageQuestion={this.props.engageQuestion} />
    );
  }
}
