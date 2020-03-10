import React from 'react';
import { contacts } from '../data';

function Contact() {
  return (
    <div>
      {contacts.map((contact, index) => (
        <div key={index}>
          <h3>{contact.label}</h3>
          <a href={contact.url} target={contact.isMail ? '' : '_blank' } rel="noopener noreferrer">
            {contact.value}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Contact;
