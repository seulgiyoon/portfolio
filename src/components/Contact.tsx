import React from 'react';
import { contacts } from '../data';

function Contact() {
  return (
    <div className="Contact">
      <div id="contact-wrapper">
        <h2>Contact</h2>
        <div id="contact-list">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-item">
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
    </div>
  );
}

export default Contact;
