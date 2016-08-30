/* global describe */
/* global it */
/* global afterEach */

import 'babel-polyfill'; // For use of Object.assign

import sinon from 'sinon';
import chai from 'chai';

var expect = chai.expect;

import AccordionPanel from '../components/AccordionPanel.jsx'; // use the .jsx
import PrintableRequest from './PrintableRequest.jsx';
// import IntroSteps from '../components/IntroSteps.jsx';
//
describe('AccordionPanel', () => {


  describe('show the text', () => {
    it('should set user id', () => {
      let initialStateForTest = { body: null };
      let body = "There is always chance of DV";
      // let action = actions.setUserId(userId);

      expect(initialStateForTest.body).to.be.null;

      // let state = reducer(initialStateForTest, action);
      // expect(state.userId).to.equal(userId);
    });
  });

  describe('show a different text', () => {
    describe('show', () => {
      it('should set text to true', () => {
        let initialStateForTest = { isWorking: false };
        let action = actions.addEventRequest();

        expect(initialStateForTest.isWorking).to.be.false;

        let state = reducer(initialStateForTest, action);
        expect(state.isWorking).to.be.true;
      });
    });

    describe('success', () => {
      it('should set isWorking to false and add event to events', () => {
        let events = [
          { id: 22, name: 'Entry', value: 20 }
        ];
        let initialStateForTest = { isWorking: true, events: events };
        let event = { id: 25, name: 'Another Entry', value: 50 };

        let action = actions.addEventSuccess(event);

        expect(initialStateForTest.isWorking).to.be.true;
        expect(initialStateForTest.events.length).to.equal(events.length);


        let state = reducer(initialStateForTest, action);
        expect(state.isWorking).to.be.false;
        expect(state.events.length).to.equal(events.length + 1);
      });
    });

    describe('failure', () => {
      it('should set isWorking to false and error and not change events', () => {
        let events = [
          { id: 22, name: 'Entry', value: 20 }
        ];
        let initialStateForTest = { isWorking: true, events: events, error: null };
        let error = 'some error';

        let action = actions.addEventFailure(error);

        expect(initialStateForTest.isWorking).to.be.true;
        expect(initialStateForTest.error).to.be.null;
        expect(initialStateForTest.events.length).to.equal(events.length);


        let state = reducer(initialStateForTest, action);
        expect(state.isWorking).to.be.false;
        expect(state.error).to.equal(error);
        expect(state.events.length).to.equal(events.length);
      });
    });
  });
});
