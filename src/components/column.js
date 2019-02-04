import React, { Fragment } from 'react';

export const Column = () => (
  <Fragment>
    <div className='coloredblock' />
    <h2>Heading 2</h2>
    <p>
      This is a paragraph text that is meant to flex and wrap a new line based on the number of
      characters in this container. Please make sure this is looking pretty based on the amount of
      characters this is taking up.
    </p>
    <button>Read More</button>
  </Fragment>
);

export default Column;
