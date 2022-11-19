import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { ImUser } from 'react-icons/im';

import { deleteContact } from 'redux/contactsSlice.js';

import {
  ContactItem,
  Name,
  Number,
  ButtonDelete,
} from './ContactsListItem.styled.js';

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <Name>
        <ImUser />
        {name}:
      </Name>
      <Number>{number}</Number>
      <ButtonDelete type="button" onClick={onDelete}>
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
