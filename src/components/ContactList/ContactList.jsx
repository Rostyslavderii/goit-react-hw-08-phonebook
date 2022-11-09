import React from 'react';

import PropTypes from 'prop-types';

import { ContactItem } from './ContactItem/ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  // console.log(onDelete);
  return (
    <>
      <ul className="contacts">
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                number={number}
                id={id}
                onDelete={onDelete}
              />
            );
          })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
