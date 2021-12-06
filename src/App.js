import  { Component } from 'react';
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from './components/ContactList/ContactList';
import SearchFilter from './components/SearchFilter/SearchFilter';

class App extends Component{
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  render() {
    return (
      <div>
        <h1>Phone</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <SearchFilter />
        <ContactList />
      </div>
    );
}
}

export default App;
