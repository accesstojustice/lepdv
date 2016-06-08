jest.unmock('../components/LandingLayout');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import LandingLayout from '../components/LandingLayout';

describe('Showing Page', () => {

  it('Renders Text with a short Intro Paragraph', () => {
    const page = TestUtils.renderIntoDocument(
      <LandingLayout />
    );

    const pageNode = ReactDOM.findDOMNode(page);

    expect(pageNode.textContent.length).toBeLessThan(730);
  })
})
