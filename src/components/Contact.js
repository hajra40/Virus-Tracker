import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact container">
            <span>Contact Us</span>
            <form>
                <div className="form__field">
                    <label for="name">Name</label>
                    <input type="text" htmlfor="name" required />
                </div>

                <div className="form__field">
                    <label for="email">Email</label>
                    <input type="email" htmlfor="email" required/>
                </div>

                <div className="form__field">
                    <label for="msg">Message</label>
                    <textarea type="text" htmlfor="msg" required/>
                </div>

                <button className="btn">Send</button>
            </form>
            
        </div>
    )
}

export default Contact
