import React, { Component } from 'react';
import './ContactMe.css';
import axios from 'axios'

class ContactMe extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: "https://fathomless-waters-64353.herokuapp.com/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
        this.resetForm();
    }

    resetForm = () => {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div>
                <h2 style={{ width: '80%', textAlign: 'center', margin: '0 auto', marginBottom: '20px', fontFamily: "'Nunito', sans-serif", color: '#1a202c' }}>Send me a message if you'd like to get in touch</h2>
                <div className='container'>
                    <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" />
                        </div>
                        <div>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea type="text" rows="5" id="message"></textarea>
                        </div>
                        <button type="submit" style={{  backgroundColor: '#1a202c', border: 'none', borderRadius: '.5rem', color: 'white', padding: '1rem', textAlign: 'center', textDecoration: 'none'}}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactMe;




