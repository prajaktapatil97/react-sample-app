import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
// import Header from "./Header";
// import AddContact from "./AddContact";
// import ContactList from "./ContactList";
import api from '../api/contacts';
// import Profile from './Profile'
import Counter from "./Counter";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
/// retrive contacts

const retriveContacts = async() => {
  const response = await api.get("/contacts")
  return response.data;
}
  const addContactHandler = async(contact) => {
    console.log(contact);
    // setContacts([...contacts, { id: uuid(), ...contact }]);
    const request = {
      id : uuid(),
      ...contact
    }
    const response = await api.post("/contacts",request)
    setContacts([...contacts, response.data]);
  };

 
  const removeContactHandler = async(id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);

    // fetch all contacts
    const getAllContacts = async() => {
      const allContacts = await retriveContacts();
      if(allContacts) setContacts(allContacts);
 
    }
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      {/* <Header /> */}
      {/* <Profile></Profile> */}
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      <Counter/>
    </div>
  );
}

export default App;
