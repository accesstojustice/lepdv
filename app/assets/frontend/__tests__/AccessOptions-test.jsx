jest.unmock('../components/AccessOptions.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AccessOptions from '../components/AccessOptions.jsx';

describe('Set of Access Options', () => {
  it('Renders Options Text', () => {
    const buttons = TestUtils.renderIntoDocument(
      <AccessOptions labelOn="On" labelOff="Off"/>
    );

    const buttonsNode = ReactDOM.findDOMNode(buttons);

    // Verify off by default
    expect(buttonsNode.textContent.length).toEqual(96);
  })
})
