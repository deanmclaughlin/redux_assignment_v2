import React from 'react';
import './Contacts.css';
import AddressBook from './pages/AddressBook';
import ContactForm from './pages/ContactForm';
import { Routes, Link, Route } from 'react-router-dom';

function Contacts(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contacts</h1>
        <nav>
          <ul>
            <li><Link to="/address_book">Address Book</Link></li>
            <li><Link to="/new_contact">New Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
		
          <Route path="/address_book"
		         element={<AddressBook {...props} />}
		  />
		  
          <Route path="/new_contact"
		         element={<ContactForm {...props} />}
		  />
		  
        </Routes>
      </main>
	  <footer>
	      <p>&copy; 2022</p>
	  </footer>
    </div>
  );
}

export default Contacts;
