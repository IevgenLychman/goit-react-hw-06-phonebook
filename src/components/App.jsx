import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { InputForm } from './inputForm/InputForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialState
  );
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    const isSet = contacts.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );

    if (!isSet) {
      setContacts(prevState => [contact, ...prevState]);
    } else {
      alert(`${data.name} is already is contact`);
    }
  };

  const filerContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContact = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <InputForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={filerContacts} />
      <ContactList options={visibleContact} onDelete={deleteContact} />
    </Container>
  );
}
