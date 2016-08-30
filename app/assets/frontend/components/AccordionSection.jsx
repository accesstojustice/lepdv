import React, { Component, PropTypes } from 'react';
import { Button, Panel } from 'react-bootstrap';

import PrintableRequest from './PrintableRequest';
import AccordionPanelContainer from '../containers/AccordionPanelContainer';

let accordionData = [
  {
    title: 'Multilingual Safety Plans',
    advocacySteps: [
      ['Introduction: ', 'You cannot control your (ex) partner’s violence, but it may be possible to increase your own safety as well as the safety of your children'],
      ['Taking Care of Yourself: ', 'Take part in social activities (e.g. programs at your local community or Early Years centre, dinner with friends, etc.)'],
      ['Escape Plan: ', 'Make Copies of:  Marriage certificate, divorce papers, custody documentation, court orders, restraining orders, or other legal documents; Work Permits; Bank Books']
    ],
    sourceUrl: 'http://www.pcawa.net/uploads/1/4/7/1/14711308/pcawa_safety_handbook_2010_10_28_-_eng.pdf',
    printable: false
  },
  {
    title: 'Right to an Interpreter',
    advocacySteps: [
      ['Although the United States Constitution does not explicitly provide for the right to an interpreter, the individual rights and liberties afforded to all individuals under the Fourth, Fifth, Sixth, Eighth and Fourteenth Amendments are meaningless for non- or limited-English speakers unless they are provided with complete, competent, and accurate interpreting services.'],
      ["In recent years, the U.S. Department of Justice has been reviewing state court's compliance with this executive order."]
    ],
    sourceUrl: 'http://www.najit.org/certification/faq.php',
    printable: true,
    printableUrl: 'http://12.218.239.52/Forms/pdf_files/CCG0108.pdf'
  },
  {
    title: 'Interpretation Contact',
    advocacySteps: [
      ['Describe your roles and clarify expectations'],
      ['Ensure that the interpreter is taking notes'],
      ['Pause frequently to allow the interpreter to translate information']
    ],
    sourceUrl: 'http://www.asha.org/practice/multicultural/issues/interpret.htm',
    printable: false
  },
  {
    title: 'Legal Terms',
    advocacySteps: [
      ['Realize: ', 'Words and phrases used in the courtroom and conversational-English are not the same.'],
      ['Translations are various and my differ, according to regional dialects of target (foreign) language used, etc.'],
      ['Attention: ', 'Children of the victim, or the offending party -- do not make adequate interpreters.']

    ],
    sourceUrl: 'http://www.abajournal.com/magazine/article/justice_moves_slowly_for_those_who_need_interpreters',
    printable: false,
    altSourceText: 'more on this topic'
  },
  {
    title: "I'm Going to Court",
    advocacySteps: [
      ['You cannot contact the office of interpreter services directly.']
    ],
    sourceUrl: 'http://www.cookcountycourt.org/ABOUTTHECOURT/OfficeoftheChiefJudge/CourtRelatedServices/OfficeofInterpreterServices.aspx',
    printable: true,
    printableUrl: 'http://12.218.239.52/Forms/pdf_files/CCG0108.pdf'
  }
]


export default class AccordionSection extends Component {
  static propTypes = {
    toggleOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
  }

  render() {

    let advocacyOptions = accordionData.map((a, i) => <AccordionPanelContainer key={ 'aopts_' + i } toggleOpen={this.props.toggleOpen} open={this.props.open} {...a} />);

    return (
      <div>
        <h3 className="center block">Resource Options</h3>
        {advocacyOptions}
      </div>
    )
  }
}
