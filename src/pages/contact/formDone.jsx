import React from "react";
import Footer from "../../components/footer/Footer";


const FormDone = () => {
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
              <h3>Thanks for reaching out! I'll answer as soon as possible :)</h3>
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
                  <a href="#">Instagram</a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="#">Twitter</a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="#">LinkedIn</a>
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

export default FormDone;
