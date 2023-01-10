import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormWrapper, Form, FormButton, ErrorPopup } from './ContactForm.styled'
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from 'styled-components';

const ContactForm = () => {

  const [mailSent, setmailSent] = useState(false);

  const [error, setError] = useState(null);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const form = useRef();

  const validate  = form => {
    if(contactForm.name.length < 3) {
      return 'Please provide your name';
    } 
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      return 'Please provide your email';
    } 
    if(!contactForm.message) {
      return 'Please provide a message';
    }
    return null;
  }


  const updateField = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  const sendEmail = (e) => {

    e.preventDefault();
    const errorMsg = validate(contactForm) 

    if(errorMsg) {
      setError(errorMsg);
      return;
    } else {
      emailjs.sendForm('service_m5s7rfa', 'template_ltheu1m', form.current, '-m0_kLMXIGFtbZHEt');
      setContactForm({
        name: '',
        email: '',
        message: '',
      });
      setmailSent(true);
      return;
    }
  }

  return (
    <FormWrapper onSubmit={sendEmail}>
      {mailSent ? (
        <h2>Thank you for your email!</h2>
      ) : (
        <div>
          {error ? <ErrorPopup>
            <AiOutlineInfoCircle/>
            <span>{error}</span>
          </ErrorPopup> : ''}
          <Form ref={form} onSubmit={sendEmail} noValidate>
            <input type="text" name="name" placeholder="Name" value={contactForm.name} onChange={updateField} required />
            <input type="email" name="email" placeholder="Email" value={contactForm.email} onChange={updateField} required />
            <textarea name="message" placeholder="Write your message..." value={contactForm.message} onChange={updateField} required />
            <FormButton type="submit">Send</FormButton>
          </Form>
        </div>
      )}
    </FormWrapper>
  )
}

export default ContactForm;