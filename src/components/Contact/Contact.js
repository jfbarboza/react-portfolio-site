import React, { useRef, useState }from 'react'
import './contact.css';

import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {RiWhatsappLine} from 'react-icons/ri'

import emailjs from 'emailjs-com';

const Contact = () => {

  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setShowMessage(false);

    emailjs.sendForm('service_o0ah7vg', 'template_wsbx1b9', form.current, 'gD2Umj7GhDJXGK7lm')
      .then((result) => {
          console.log(result.text);
          setMessage('Your email was sent');
          setShowMessage(true);
          e.target.reset();
      }, (error) => {
          setMessage('There was an error!');
          setShowMessage(true);
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jorge@cloud-go.net</h5>
            <a href="mailto:jorge@cloud-go.net" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>jfbarboza81</h5>
            <a href="https://m.me/jfbarboza81" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=17863408054" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send</button>
          { showMessage && <div className='form__message'>{message}</div> }
        </form>
        
      </div>
      
    </section>
  )
}

export default Contact
