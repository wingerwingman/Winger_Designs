import React, { Component } from 'react'


export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return (
            <div>
                
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <fieldset>
                    <div className="form-group">
                        <label value={this.state.name} htmlFor="name">Name:<br/></label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label value={this.state.email}htmlFor="exampleInputEmail1">Email address:<br/></label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label value={this.state.message} htmlFor="message">Message:<br/></label>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
                
            </div>
        )
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    
    handleSubmit(event) {
          debugger;
        event.preventDefault();
        console.log(this.state);
    }

}
