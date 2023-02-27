import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { List, ListContent, Content, Button } from './ContactList.styled';

const getVisibleContacts = (contacts, filterValue) => {
  if (!filterValue) {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filterValue = useSelector(getFilter);

  const filteredContacts = getVisibleContacts(contacts, filterValue);

  function onDelete(id) {
    dispatch(deleteContact(id));
  }

  return (
    <List>
      {filteredContacts.map(contact => (
        <ListContent key={contact.id}>
          <div>
            <Content>{contact.name}:</Content>
            <Content> {contact.number}</Content>
          </div>
          <Button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
        </ListContent>
      ))}
    </List>
  );
};
