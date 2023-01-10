import Motion from 'pages/Motion';
import ContactForm from 'pages/components/ContactForm/ContactForm';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { ContactWrapper, SocialLink } from './Contact.styled';

const Contact = () => {
  return (
    <Motion>
      <ContactWrapper>
      <h1>Get In Touch</h1>

      <ContactForm />

      <div>
        <SocialLink href='https://github.com/Marcinwrzs/' target='_blank'>
          <GoMarkGithub />
          <h2>Github</h2>
        </SocialLink>

        <SocialLink href='https://linkedin.com/in/marcin-wrzoś' target='_blank'>
          <BsLinkedin />
          <h2>Linkedin</h2>
        </SocialLink>
      </div>

      <div>Designed and Built by Marcin Wrzoś</div>

      </ContactWrapper>
    </Motion>
  );
};



export default Contact;