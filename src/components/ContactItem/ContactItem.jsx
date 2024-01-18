import React from 'react';
import './ContactItem.scss';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className="ContactList__item" key={id}>
      <p className="text">{name}</p>
      <a className="number" href="tel">
        {number}
      </a>
      <button className="Delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
