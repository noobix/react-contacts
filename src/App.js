import React from 'react';
import './App.css';
import Form from './components/ContactForm'
import Contacts from './components/Contacts'
import {v4 as uuid} from 'uuid'
import {Container, Row, Col} from 'react-bootstrap'

class App extends React.Component{
  constructor(){
    super();
    this.state = {contacts:[
      {id: uuid(), name: "Grace", phoneNumber: "000-000-0000", location: "Accra"},
      {id: uuid(),name: "Amanda", phoneNumber: "111-111-1111", location: "Tema"},
      {id: uuid(),name: "Clarence", phoneNumber: "222-222-2222", location: "Kumasi"},
      {id: uuid(),name: "Mitchill", phoneNumber: "333-333-3333",location: "Tafo"}
    ]};
  }
  addNewContact = (newContact) =>{
    this.setState({contacts: [...this.state.contacts, newContact]});
  }
  editContact = (id, newContact) => {
    const editContact = this.state.contacts.map((contact) => {
      if (contact.id === id) {
        return newContact
      }
      return contact
    })
    this.setState({contacts: editContact})
  }
  deleteContact = (id) => {
    const filteredContacts = this.state.contacts.filter((contact) => {
      if (contact.id !== id) {
        return contact
      }
    })
    this.setState({contacts: filteredContacts})
  }

  render() {
    return <>
    <Container>
      <Row>
        <Col md={4}><Form addNewContact = {this.addNewContact} /></Col>
        <Col md={8}><Contacts contacts = {this.state.contacts} editContact={this.editContact} deleteContact={this.deleteContact} /></Col>
      </Row>
    </Container>
      
      
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
