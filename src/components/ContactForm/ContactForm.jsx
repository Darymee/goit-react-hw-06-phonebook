import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contactsSlice';

import { ImPhone, ImUser } from 'react-icons/im';
import {
  FormWrap,
  Form,
  InputWrap,
  Label,
  Input,
  ButtonSubmit,
} from './ContactForm.styled';
import { getContacts } from 'redux/selectors';

export default function ContactForm() {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = form.elements;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.value.toLowerCase()) {
        alert(`${name.value} is already in contacts`);
        return;
      }
    }

    dispatch(addContact(name.value, number.value));

    form.reset();
  };

  return (
    <FormWrap>
      <Form onSubmit={handleSubmit}>
        <InputWrap>
          <Label>Name</Label>
          <ImUser />
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputWrap>
        <InputWrap>
          <Label>Number</Label>
          <ImPhone />
          <Input
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputWrap>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    </FormWrap>
  );
}
