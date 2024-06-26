import React, { useState } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Divider from '../divider/Divider'
import "../modal/modal.css"

const Contact = () => {
  const form = useRef();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  const sendEmail = (e) => {
    toggleModal();

    e.preventDefault();

    emailjs.sendForm('service_ygywjye', 'template_qqp5xkq', form.current, 'XYXJihG1gzsl3slkU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <Divider/>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='email_extra_styling'>marioskampouris2@gmail.com</h5>
            <a href='mailto:marioskampouris2@gmail.com' target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Function not implememented yet</h5>
            <a href='mailto:dummyegator@gmail.com' target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Function not implememented yet</h5>
            <a href='mailto:dummyegator@gmail.com' target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Submit Form</button>
        </form>
      </div>

      {modal && (      
      <div className='modal'>
        <div className='overlay'>
            <div className='modal__content'>
                <h2 className='modal__header'>Success!</h2>
                <p>Message successfully sent.</p>
                <button className='btn btn-primary close__modal__button' onClick={toggleModal}>CLOSE</button>
            </div>
        </div>
      </div>
      )}

    </section>
  )
}

export default Contact