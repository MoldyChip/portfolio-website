import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

export default function Contact() {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_drrdczn", "template_l8qn4bd", form.current, "JFVaZuYpqT5CpY6cQ")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
            alert("'Message sent successfully!'");
    }

    return <form className="contact-form" ref={form} onSubmit={handleSubmit}>
        <h1>Contact <span>Me</span></h1>
        <input type='text' name='user_name' required placeholder='Enter name' />
        <input type='email' name='user_email' required  placeholder='example@gmail.com' />
        <input type='phone' name='user_phone' placeholder='Enter phone (optional)' />
        <textarea name='user_message' cols={"30"} rows={"10"} required placeholder='Enter message' />
        <button type='submit' value="Send">Submit</button>
        </form>
    
};
