import React from "react";

import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";
import Footer from "../components/Footer"

const Contact = () => {
    return (
      <div>
        <ContactHeader />
        <ContactForm />
        <ContactDetails />
        <Footer />
      </div>
    );
  };
  
  export default Contact;