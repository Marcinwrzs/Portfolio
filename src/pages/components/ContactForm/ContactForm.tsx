import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormWrapper, Form, FormButton, ErrorPopup } from './ContactForm.styled'
import { AiOutlineInfoCircle } from "react-icons/ai";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {

  const [mailSent, setMailSent] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [contactForm, setContactForm] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
  });

  const form = useRef<HTMLFormElement>(null);

  const validate = (form: ContactFormState) => {
    if (form.name.length < 3) {
      return 'Please provide your name';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      return 'Please provide a valid email';
    } else if (!form.message) {
      return 'Please provide a message';
    }
    return null;
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorMsg = validate(contactForm); 
    if(errorMsg) {
      setError(errorMsg);
      return;
    } else {
      try {
        if (form.current) {
          await emailjs.sendForm('service_m5s7rfa', 'template_ltheu1m', form.current, '-m0_kLMXIGFtbZHEt');
        }
        setContactForm({
          name: '',
          email: '',
          message: '',
        });
        setMailSent(true);
      } catch (error) {
        setError('An error occurred while sending the email. Please try again later.');
      }
    }
  };


  return (
    <FormWrapper>
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