import React from 'react'
import EditDelete from './EditDelete'

class contactList extends React.Component{
render(){
   return(<React.Fragment>
     <h4>Contact List</h4>
     {this.props.contacts.map((contact, index) => {
       return(<div key={contact.id}>
         {/* <p>{contact.name}</p>
         <p>{contact.phoneNumber}</p>
         <p>{contact.location}</p> */}
         <EditDelete contact = {contact} editContact = {this.props.editContact} 
         deleteContact = {this.props.deleteContact} />
       </div>)
     })}
   </React.Fragment>)
 }
}
export default contactList