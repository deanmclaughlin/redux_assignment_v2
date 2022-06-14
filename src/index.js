import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import contactForm from './reducers/';
import Contacts from './Contacts';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(contactForm);
const root = ReactDOM.createRoot(document.getElementById('root'));

function renderListener() {

const ContactsProps =
            {  items: store.getState(),
			
               onClear: ()=>{store.dispatch({ type: 'CLEAR' })},
			   
			   onAdd: (callbackItem)=>{
			      if (callbackItem[0]==="" ) {
				    alert("NAME cannot be empty");
				} else if (callbackItem[1]==="") {
					alert("PHONE NUMBER cannot be empty");
				} else {
 				    store.dispatch({ type: 'ADD', newItem: callbackItem }); 
				}
			  }
			};

root.render(
  <React.StrictMode>
    <BrowserRouter>
	
    <Contacts {...ContactsProps} />

    </BrowserRouter>
  </React.StrictMode>
);
}

reportWebVitals();
renderListener();
store.subscribe(renderListener);
