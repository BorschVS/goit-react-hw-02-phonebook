import React from 'react';
import './ContactList.scss';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => {
        return (
          <li className="ContactList__item" key={id}>
            <p className="text">{name}</p>
            <a className="number" href="tel">
              {number}
            </a>
            <button className="Delete-button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
