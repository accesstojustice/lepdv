import React, { Component } from 'react';
import ExitButtonContainer from '../containers/ExitButtonContainer';
import InfoMarqueeContainer from '../containers/InfoMarqueeContainer';
import AccordionSectionContainer from '../containers/AccordionSectionContainer'
import LandingViz from './LandingViz'
import LandingMap from './LandingMap'

let popularUrls = [
  {id: 1, url: "http://google.com"},
  {id: 2, url: "http://yahoo.com"},
  {id: 3, url: "http://bing.com"},
  {id: 4, url: "http://amazon.com"},
  {id: 5, url: "http://duckduckgo.com"},
  {id: 6, url: "http://ebay.com"},
  {id: 7, url: "http://twitter.com"},
  {id: 8, url: "http://wikipedia.com"},
]

let infoParagraphs = [

  { id: 1, body: "Every 9 seconds in the US, a woman is assaulted or beaten.", url: "http://www.bjs.gov/content/pub/pdf/FEMVIED.PDF"},
  { id: 2, body: "On average, nearly 20 people per minute are physically abused by an intimate partner in the United States. During one year, this equates to more than 10 million women and men.", url: "http://www.cdc.gov/violenceprevention/pdf/nisvs_report2010-a.pdf"},
  { id: 3, body: "1 in 3 women and 1 in 4 men have been victims of [some form of] physical violence by an intimate partner within their lifetime.", url: "http://www.cdc.gov/violenceprevention/pdf/nisvs_report2010-a.pdf"},
  { id: 4, body: "1 in 5 women and 1 in 7 men have been victims of severe physical violence by an intimate partner in their lifetime.", url: "http://www.cdc.gov/violenceprevention/pdf/nisvs_report2010-a.pdf"},
  { id: 5, body: "1 in 7 women and 1 in 18 men have been stalked by an intimate partner during their lifetime to the point in which they felt very fearful or believed that they or someone close to them would be harmed or killed.", url: "http://www.cdc.gov/violenceprevention/pdf/nisvs_report2010-a.pdf"},
  { id: 6, body: "On a typical day, there are more than 20,000 phone calls placed to domestic violence hotlines nationwide.", url: "http://nnedv.org/downloads/Census/DVCounts2013/DVCounts13_NatlSummary.pdf"},
  { id: 7, body: "The presence of a gun in a domestic violence situation increases the risk of homicide by 500%.", url: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1447915/"},
  { id: 8, body: "Intimate partner violence accounts for 15% of all violent crime.", url: "http://www.bjs.gov/content/pub/pdf/ndv0312.pdf"},
  { id: 9, body: "Women between the ages of 18-24 are most commonly abused by an intimate partner.", url: "http://www.bjs.gov/content/pub/pdf/ndv0312.pdf"},
  { id: 10, body: "19% of domestic violence involves a weapon.", url: "http://www.bjs.gov/content/pub/pdf/ndv0312.pdf"},
  { id: 11, body: "Domestic victimization is correlated with a higher rate of depression and suicidal behavior.", url: "http://www.bjs.gov/content/pub/pdf/ndv0312.pdf"},
  { id: 12, body: "Only 34% of people who are injured by intimate partners receive medical care for their injuries.", url: "http://www.bjs.gov/content/pub/pdf/ndv0312.pdf"},
]

let safetyQuestions = [
  { id: 1, body: "Do you have independence in your finances?" }
]

const header = (
  <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="top-0 bottom-0">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <h4><span className="sr-only">Toggle navigation</span></h4>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className='navbar-brand' href="/">LEPDV in Chicago</a>
            <div id="btn-exit" className="my0 inline-block">
            <ExitButtonContainer someUrl={popularUrls}/>
            </div>

        </div>

      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav pull-right">
          <li><a href="#address-search">Search</a></li>
          <li><a href="#about">About</a></li>

          <li>
          </li>

        </ul>
      </div>
    </div>
  </div>
)

export default class App extends Component {
  render() {
    return (
      <div>

        {header}
        <div className="container">
          <div className="mt4 pt3 px2">
            <div className="mt2">
              <div className="row">
                <div className="py3">
                  <div className="col-md-2 col-xs-2 right">

                  </div>
                  <div className="row">
                    <div className="col-md-10 col-xs-10">
                      <h2 className="intro">In My Language</h2>
                      <span className="intro-subtext">Failures in protection for Victims of Domestic Violence are augmented when a person has Limited English Proficiency.</span>

                      <InfoMarqueeContainer
                        engageQuestion={safetyQuestions}
                        moreYouKnowText={infoParagraphs} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-4">
                      <div className="react-wrapper">

                        <AccordionSectionContainer />
                      </div>
                    </div>

                    <div className="col-sm-7 col-sm-offset-1">

                      <LandingMap />
                      <div className='col-sm-12 my2 mln4 py4'>

                        <LandingViz />
                      </div>
                    </div>
                  </div>


                </div>
              </div>
              <br/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
