import React, { Fragment } from 'react';

//import Mail from '../components/mail.php'
import '../components/contactform.css';

export const ContactForm = () => (
  <Fragment>
    <div className='contactwrapper' style={{paddingBottom: '2%'}}>
    <h2 className='contactheader'>CONTACT</h2>
      <div className='contactform'>
        <form action='' method="POST">
          Email
          <br />
          <input type='email' name='email' pattern='*@*.' required />
          <br />
          Subject
          <br />
          <input type='text' name='subject' required/>
          <br />
          Message
          <br />
          <textarea type='textarea' rows='8' required/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  </Fragment>
);

export default ContactForm;
