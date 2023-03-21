import React from 'react';
import PropTypes from 'prop-types';
import { BtnContact, ContactItem } from './Contacts.styled';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => {
      const { id, name, number } = contact;
      return (
        <ContactItem key={id}>
          <li>
            <p>
              {name}: <b>{number}</b>
            </p>
          </li>
          <BtnContact type="BtnContact" onClick={() => onDeleteContact(id)}>
            Delete
          </BtnContact>
        </ContactItem>
      );
    })}
  </ul>
);

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
