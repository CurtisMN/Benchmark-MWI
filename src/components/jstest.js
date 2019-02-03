import React, { Fragment } from 'react';

import '../components/jstest.css';

export const JsTest = () => (
  <Fragment>
    <h1>HEADING ONE</h1>
    <div className='statement'>
      Remove the duplicates in 2 Javascript objects and output the list of distinct names in an
      unordered list when this{' '}
      <a className='actiavtionlink' href='/index/'>
        link is clicked
      </a>
      , if the operation has been completed already notify the user that this has already been done.
    </div>
  </Fragment>
);

export default JsTest;
