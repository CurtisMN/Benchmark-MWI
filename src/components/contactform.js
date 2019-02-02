import React from 'react';

import '../components/contactform.css';

export const ContactForm = () => (
  <div className='contactwrapper'>
    <div className='contactform'>
      <h2 className='contactheader'>CONTACT</h2>
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
);

export default ContactForm;
