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
                  If you want to book a room or ask us a question. Feel free to write a message <span>or let's be social!</span>
                </h1>
              </div>
            </div>
          </section>

          <section className="section contact-form">
            <div className="contact-row">
              <div className="contact-col">
                <h3>
                  <span>Contact</span>
                </h3>
              </div>
              <div className="contact-col">
                <form onSubmit={handleSubmit}>
                  <div className="input">
                    <input className="inputtext" type="text" name="name" placeholder="Name" />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="input">
                    <textarea className="inputtext" type="text" name="message" placeholder="Message" rows={6} />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <div className="input">
                    <input className="inputtext" type="text" name="email" placeholder="Email" />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <button classname="submit" type="submit" disabled={state.submitting}>
                      <h3><span>Submit</span></h3>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section className="contact-socials">
            <div className="contact-row">
              <div className="contact-col">
                <h3>
                  <span>Socials</span>
                </h3>
              </div>
              <div className="contact-col">
                <div className="contact-social-link">
                  <p>
                    <a href="https://www.instagram.com/flow.hostel/" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </p>
                </div>
                <div className="contact-social-link">
                  <p>
                    <a href="mailto:flow.oosterdok@gmail.com" target="_blank" rel="noopener noreferrer">mail</a>
                  </p>
                </div>
                <div className="contact-social-link">
                  <p>
                    <a href="tel:+31622761721" target="_blank" rel="noopener noreferrer">phone</a>
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
