jest.unmock('../components/AccessOptions');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AccessOptions from '../components/AccessOptions';




describe('Set of Access Options', () => {
  pending('Renders Options Text', () => {

    const buttons = TestUtils.renderIntoDocument(
      <AccessOptions labelOn="On" labelOff="Off"/>
    );

    const buttonsNode = ReactDOM.findDOMNode(buttons);

    // Verify off by default
    expect(buttonsNode.textContent.length).toEqual(96);
  })
})
