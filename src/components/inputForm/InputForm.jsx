import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Input, Form, Button } from './InputForm.styled';

const id = nanoid();

export function InputForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      <Input
        id={id}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        value={name}
        onChange={onChange}
      />

      <Input
        id={id}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Telephone"
        value={number}
        onChange={onChange}
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

InputForm.propTypes = {
  onSubmit: PropTypes.func,
};
