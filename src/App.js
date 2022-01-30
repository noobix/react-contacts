import React from 'react';
import './App.css';
import Form from './components/ContactForm'
import Contacts from './components/Contacts'

class App extends React.Component{
  constructor(){
    super();
    this.state = {contacts:[
      {name: "Grace", phoneNumber: "000-000-0000", location: "Accra"},
      {name: "Amanda", phoneNumber: "111-111-1111", location: "Tema"},
      {name: "Clarence", phoneNumber: "222-222-2222", location: "Kumasi"},
      {name: "Mitchill", phoneNumber: "333-333-3333",location: "Tafo"}
    ]};
  }
  addNewContact = (newContact) =>{
    this.setState({contacts: [...this.state.contacts, newContact]});
  }

  render() {
    return <>
      <Form addNewContact = {this.addNewContact} />
      <Contacts contacts = {this.state.contacts} />
    </>
  }

  // render(){
  //   return(<React.Fragment>
  //       console.log(contacts)
  //       <Form addNew = {this.addNewContact()} />
  //       {/* <Contacts contacts = {this.state.contacts} /> */}
  //   </React.Fragment>)
  // }
}
export default App;
