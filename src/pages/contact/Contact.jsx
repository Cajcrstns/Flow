import React from "react";
import Transition from "../../components/transition/Transition";
import { useForm, ValidationError } from '@formspree/react';

import Footer from "../../components/footer/Footer";
import FormDone from "./formDone";
import "./contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xleqonge");
  if (state.succeeded) {
    return (
      <FormDone />
    );
  }

  return (
    <>
    <div className="contact page">
      <div className="container">
        <section className="contact-hero">
          <div className="contact-row">
            <div className="contact-col"></div>
            <div className="contact-col">
              <h1>
                Feel free to write me a message <span>or let's be social!</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="section contact-form">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Contact</span>
              </p>
            </div>
            <div className="contact-col">
              <form onSubmit={handleSubmit}>
                <div className="input">
                  <input type="text" name="name" placeholder="Name" />
                  <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div className="input">
                  <textarea type="text" name="message" placeholder="Message" rows={6} />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div className="input">
                  <input type="text" name="email" placeholder="Email" />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                  <button classname="submit" type="submit" disabled={state.submitting}>
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-socials">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Socials</span>
              </p>
            </div>
            <div className="contact-col">
              <div className="contact-social-link">
                <p>
                <a href="https://www.instagram.com/flow.hostel/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="https://soundcloud.com/user-130338946" target="_blank" rel="noopener noreferrer">Airbnb</a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="https://www.booking.com/hotel/nl/flow-amsterdam.nl.html" target="_blank" rel="noopener noreferrer">Booking</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default Transition(Contact);
