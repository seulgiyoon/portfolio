import React from 'react';
import { contacts } from '../data';
import '../styles/Contact.scss';

function Contact() {
  return (
    <div className="Contact">
      <div id="wrapper">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-items">
            <h3>{contact.label}</h3>
            <a
              className="contact-url"
              href={contact.url}
              target={contact.isMail ? '' : '_blank'}
              rel="noopener noreferrer"
            >
              {contact.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
