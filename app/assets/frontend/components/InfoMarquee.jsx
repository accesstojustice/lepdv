import React, { Component, PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';
import EngageBox from './EngageBox';

export default class InfoMarquee extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired
  }

  render() {
    return (
      <div id="engageBoxWrapper">
        <div id="reason" className="info-marquee-wrapper">
          <PageHeader>
            <small>
              <ul>
                {this.props.message}
              </ul>
            </small>
          </PageHeader>
        </div>
        <EngageBox question={ this.props.engageQuestion[0] }/>
      </div>
    );
  }
}
