import { Container } from './App.styled';
import { InputForm } from './inputForm/InputForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <InputForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
