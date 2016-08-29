// workaround for 'being called-twice' error
jest.mock('react/lib/ReactDefaultInjection');

var React = require('react');

import AccordionSectionContainer from '../containers/AccordionSectionContainer';
import renderer from 'react-test-renderer';

describe('AccordionSection Container', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <AccordionSectionContainer />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


  // it('expands the accordion when clicked', () => {
  //   const component = renderer.create(
  //     <AccordionSectionContainer open={false} />
  //   );
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  //
  //   // manually trigger the callback
  //   tree.props.toggleOpen();
  //   // re-rendering
  //   tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  //
  //   // manually trigger the callback
  //   tree.props.toggleOpen();
  //   // re-rendering
  //   tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
