/* eslint-disable */

import React, { Fragment, Component } from 'react';

import '../components/jstest.css';

// Create the two arrays, and an empty array
var nameListOne = ['Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Michael Spangler'];
var nameListTwo = ['Matt Johnson', 'Bart Paden', 'Jordan Heigle', 'Tyler Viles'];
var nameListUnique = [];

//Go through each item in the arrays, adding any unique name to the unique item array
nameListOne.forEach((name) => {
  if (!nameListUnique.includes(name)) nameListUnique.push(name);
});
nameListTwo.forEach((name) => {
  if (!nameListUnique.includes(name)) nameListUnique.push(name);
});

const displayListUnique = nameListUnique.map((name) => <li>{name}</li>);

class JsTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
    };
  }
  showList(event) {
    this.setState({
      hide: false,
    });
  }

  render() {
    return (
      <Fragment>
        <h1>HEADING ONE</h1>
        <div className='statement'>
          Remove the duplicates in 2 Javascript objects and output the list of distinct names in an
          unordered list when this{' '}
          <a
            className='activationlink'
            href='javascript: document.body.scrollIntoView(false);'
            id='switch'
            onClick={this.showList.bind(this)}
          >
            link is clicked
          </a>
          , if the operation has been completed already notify the user that this has already been
          done.
        </div>
        <div className={this.state.hide ? 'hidden' : 'shown'}>{displayListUnique}</div>
      </Fragment>
    );
  }
}

export default JsTest;
