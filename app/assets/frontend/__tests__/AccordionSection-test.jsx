// workaround for 'being called-twice' error
jest.mock('react/lib/ReactDefaultInjection');

var React = require('react');

import AccordionSection from '../components/AccordionSection';
import renderer from 'react-test-renderer';

describe('Accordion Section', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <AccordionSection open={false} />
    ).toJSON();
    expect(tree).toMatchSnapshot();

  });


  it('renders an expanded accordion', () => {
    const component = renderer.create(
      <AccordionSection open={true} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
        console.log(3, tree);

    // // manually trigger the callback
    // tree.props.toggleOpen()
    //
    //
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    //
    // // manually trigger the callback
    // tree.props.toggleOpen();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
