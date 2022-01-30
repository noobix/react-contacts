import React from "react";

class form extends React.Component{
constructor(){
    super()
    this.state={name: "", phoneNumber: "", location: ""}
}
    handleNameChange = (e) =>{
        this.setState({name: e.target.value})
    }
    handlephoneChange = (e) =>{
        this.setState({phoneNumber: e.target.value})
    }
    handleLocationChange = (e) =>{
        this.setState({location: e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        let newContact={name: this.state.name, phoneNumber: this.state.phone, location:this.state.location}
        this.props.addNewContact(newContact)
        this.setState({name: "", phoneNumber: "", location: ""})
    }
render(){
    return(<React.Fragment>
        <form onSubmit={this.handleSubmit}>
            <label name="name">Name</label>
            <input name="name" type="text" placeholder="Name" 
            value={this.state.name} onChange={this.handleNameChange}/>
            <label name="Phone">Phone Number</label>
            <input name="phone" type="text" placeholder="Phone Number" 
            value={this.state.phoneNumber} onChange={this.handlephoneChange}/>
            <label name="location">Location</label>
            <input name="location" type="text" placeholder="Location" 
            value={this.state.location} onChange={this.handleLocationChange}/>
            <input name="submit" type="submit" />
        </form>
    </React.Fragment>)
    }
}
export default form