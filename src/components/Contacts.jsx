import React from 'react';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ data: { id, name, number } }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
