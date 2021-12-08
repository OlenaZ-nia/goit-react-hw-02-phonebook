import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './components/Container/Container';
import  ContactForm  from "./components/ContactForm/ContactForm";
import { ContactList } from './components/ContactList/ContactList';
import SearchFilter from './components/SearchFilter/SearchFilter';

import 'modern-normalize/modern-normalize.css';

class App extends Component{
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    // const includeName = contacts.find(contact => contact.name.includes(name));
    const includeName = contacts.find(contact => contact.name === name);

    (includeName !== undefined) ?
      (alert(`${name} is already in contacts`)
      ):
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact]
    }))

  };

  handleChange = (e) => {
    this.setState({ filter: e.target.value });
    console.log(this.state.filter)
  };

  getExistsContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

  };

  deleteContact = (nameId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== nameId),
    }))
  };
  
  render() {
    const { filter } = this.state;
    const existsContacts = this.getExistsContact();

    return (
      <Container>
        <h1>Phone</h1>
        <ContactForm onSubmit={ this.addContact}/>
        <h2>Contacts</h2>
        <SearchFilter value={filter} onChange={ this.handleChange}/>
        <ContactList contacts={existsContacts} onDeleteContact={ this.deleteContact}/>
      </Container>
    );
}
}

export default App;
