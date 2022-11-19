import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';

import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

import { ContactsUl } from './ContactsList.styled.js';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContact = () => {
    const normalizedValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };

  const filteredContacts = getFilteredContact();

  return (
    <ContactsUl>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} name={name} number={number} id={id} />
      ))}
    </ContactsUl>
  );
};
