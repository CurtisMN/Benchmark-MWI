import React, { Fragment } from 'react';

//import Mail from '../components/mail.php'
import '../components/contactform.css';

export const ContactForm = () => (
  <Fragment>
    <div className='contactwrapper' style={{ paddingBottom: '2%' }}>
      <h2 className='contactheader'>CONTACT</h2>
      <div className='contactform'>
        <form action='' method='POST'>
          <label>Email</label>
          <br />
          <input type='email' className='email' name='email' pattern='*@*.' required />
          <br />
          <label>Subject</label>
          <br />
          <input type='text' className='subject' name='subject' required />
          <br />
          <label>Message</label>
          <br />
          <textarea type='textarea' className='textarea' rows='8' required />
          <button className='submit'>Submit</button>
        </form>
      </div>
    </div>
  </Fragment>
);

export default ContactForm;
