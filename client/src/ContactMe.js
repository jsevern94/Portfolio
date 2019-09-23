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
            url: "http://localhost:3001/send",
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
        const styles = {

        }
        return (
            <div>
                <h2 style={{ width: '80%', textAlign: 'center', margin: '0 auto', marginBottom: '20px', fontFamily: "'Nunito', sans-serif", color: '#1a202c' }}>Send me a message if you'd like to get in touch</h2>
                <div className='container'>
                    <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea type="text" className="form-control" rows="5" id="message"></textarea>
                        </div>
                        <button type="submit" style={{  backgroundColor: '#1a202c', border: 'none', borderRadius: '.5rem', color: 'white', padding: '1rem', textAlign: 'center', textDecoration: 'none'}}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactMe;




