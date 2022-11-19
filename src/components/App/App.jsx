import { MdOutlineContactPhone } from 'react-icons/md';

import ContactForm from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import {
  PhonebookWrap,
  ContactWrap,
  Title,
  ContactsTitle,
} from './App.styled.js';

export default function App() {
  return (
    <PhonebookWrap>
      <Title>
        Phonebook <MdOutlineContactPhone />
      </Title>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactWrap>
        <Filter />
        <ContactsList />
      </ContactWrap>
    </PhonebookWrap>
  );
}
