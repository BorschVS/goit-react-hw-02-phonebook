import React from 'react';
import ContactItem from 'components/ContactItem';
import './ContactList.scss';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={deleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
