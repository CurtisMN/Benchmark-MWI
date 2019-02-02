import React, { Fragment } from 'react';

import '../components/contactform.css';

export const ContactForm = () => (
  <Fragment>
    <div className='contactwrapper'>
    <h2 className='contactheader'>CONTACT</h2>
      <div className='contactform'>
        <form action='/action_page.php'>
          Email
          <br />
          <input type='text' name='email' />
          <br />
          Subject
          <br />
          <input type='text' name='subject' />
          <br />
          Message
          <br />
          <textarea type='textarea' rows='8' />
          <button>Submit</button>
        </form>
      </div>
    </div>
  </Fragment>
);

export default ContactForm;
