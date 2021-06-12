import React, { Component } from "react";
import Filter from "./filter/Filter";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const contactExist = this.state.contacts.find(
      (contact) => contact.name === name
    );

    if (contactExist) {
      alert(`${name} already exists`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
      filter: this.state.filter,
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
      name: "",
      number: "",
      filter: "",
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filteredInput = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filteredInput)
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className="container">
        <h2 className="title">Phonebook:</h2>
        <ContactForm addContact={this.addContact} />

        <h2 className="title">Contacts:</h2>
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactList
          filteredContacts={this.filterContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
