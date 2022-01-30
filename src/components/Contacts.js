import React from 'react'

class contactList extends React.Component{
render(){
   return(<React.Fragment>
     <h4>Contact List</h4>
     {this.props.contacts.map((contact, index) => {
       return(<div key={index}>
         <p>{contact.name}</p>
         <p>{contact.phoneNumber}</p>
         <p>{contact.location}</p>
       </div>)
     })}
   </React.Fragment>)
 }
}
export default contactList