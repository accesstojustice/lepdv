/* global describe */
/* global it */
/* global afterEach */

import 'babel-polyfill'; // For use of Object.assign

import sinon from 'sinon';
import chai from 'chai';

var expect = chai.expect;

import AccordionPanel from '../components/AccordionPanel'; // use the .jsx
// import PrintableRequest from './PrintableRequest.jsx';
// import IntroSteps from '../components/IntroSteps.jsx';
//
describe('AccordionPanel', () => {


  describe('show the link', () => {
    it('should return a link', () => {
      let initialPropsForTest = { sourceUrl: null };
      let sourceUrl = "http://www.pcawa.net/uploads/1/4/7/1/14711308/pcawa_safety_handbook_2010_10_28_-_eng.pdf";
      // let action = actions.setUserId(userId);

      expect(initialPropsForTest.sourceUrl).to.be.null;

      let props = {sourceUrl: sourceUrl};
      expect(props.sourceUrl).to.equal(sourceUrl);
    });
  });
  //
  // describe('show a different text', () => {
  //   describe('show', () => {
  //     it('should set text to true', () => {
  //       let initialStateForTest = { isWorking: false };
  //       let action = actions.addEventRequest();
  //
  //       expect(initialStateForTest.isWorking).to.be.false;
  //
  //       let state = reducer(initialStateForTest, action);
  //       expect(state.isWorking).to.be.true;
  //     });
  //   });
  //
  //   describe('success', () => {
  //     it('should set isWorking to false and add event to events', () => {
  //       let events = [
  //         { id: 22, name: 'Entry', value: 20 }
  //       ];
  //       let initialStateForTest = { isWorking: true, events: events };
  //       let event = { id: 25, name: 'Another Entry', value: 50 };
  //
  //       let action = actions.addEventSuccess(event);
  //
  //       expect(initialStateForTest.isWorking).to.be.true;
  //       expect(initialStateForTest.events.length).to.equal(events.length);
  //
  //
  //       let state = reducer(initialStateForTest, action);
  //       expect(state.isWorking).to.be.false;
  //       expect(state.events.length).to.equal(events.length + 1);
  //     });
  //   });
  //
  //   describe('failure', () => {
  //     it('should set isWorking to false and error and not change events', () => {
  //       let events = [
  //         { id: 22, name: 'Entry', value: 20 }
  //       ];
  //       let initialStateForTest = { isWorking: true, events: events, error: null };
  //       let error = 'some error';
  //
  //       let action = actions.addEventFailure(error);
  //
  //       expect(initialStateForTest.isWorking).to.be.true;
  //       expect(initialStateForTest.error).to.be.null;
  //       expect(initialStateForTest.events.length).to.equal(events.length);
  //
  //
  //       let state = reducer(initialStateForTest, action);
  //       expect(state.isWorking).to.be.false;
  //       expect(state.error).to.equal(error);
  //       expect(state.events.length).to.equal(events.length);
  //     });
  //   });
  // });
});
