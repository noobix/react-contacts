import React from 'react'
import EditDelete from './EditDelete'

class contactList extends React.Component{
render(){

   return(<>
   <h4>Contact List</h4>
   <div className='d-flex flex-wrap'>
     {/* <h4>Contact List</h4> */}
     {this.props.contacts.map((contact, index) => {
       return(<div key={contact.id}>
         {/* <p>{contact.name}</p>
         <p>{contact.phoneNumber}</p>
         <p>{contact.location}</p> */}
         <EditDelete contact = {contact} editContact = {this.props.editContact} 
         deleteContact = {this.props.deleteContact} />
       </div>)
     })}
   </div>
   </>)
 }
}
export default contactList