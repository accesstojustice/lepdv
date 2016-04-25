import { Button } from 'react-bootstrap';
import React from 'react';

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


class InfoMarquee extends React.Component {
  render() {
    return (
      <div>
        <div className="intro" style={{marginTop: "35px"}}>
          <p><em>
            1 in 3 women experience violence in their lifetime, but together we can survive, heal and thrive. You are not alone. There is a community to support you. Immigrant women experience additional barriers and also have unique assets and strengths. This site provides resources to empower limited english proficient survivors.
          </em></p>
        </div>
      </div>
    )
  }
}
export default class LandingLayout extends React.Component {
  render() {
    return (
      <div>
        <InfoMarquee />

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
