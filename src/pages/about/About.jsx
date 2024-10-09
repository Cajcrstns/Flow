import React from "react";
import "./about.css";
import Faq from "react-faq-component";

import Transition from "../../components/transition/Transition";
import Footer from "../../components/footer/Footer";
import PortraitImg from "../../assets/images/home/flowSun.jpg";

const About = () => {
  const data = {
    title: "",
    rows: [
      {
        title: "What is there to do at Flow?",
        content:
          "We strive for a place where you can work, relax and connect with other travellers. We have a spacious living room to work and be creative. There is a sunny deck where it's perfect to unwind and chill. Little activity; We offer canoes, to wander around at the beautifull canals of Amsterdam.",
      },
      {
        title: "what are the check-in and check-out times at flow?",
        content:
          "Check-in at FLOW is possible from 3:00 PM. Check-out is possible until 10:00 AM. It's possible to store your bags here if it suits your flight better. "
      },
      {
        title: "What do you charge for a room?",
        content:
          "Prices at FLOW may depend on your stay (e.g. dates you select, hotel policies, etc.). You can see the prices by entering the room and dates you would prefer at Booking or Airbnb."
      },
    ],
  };

  return (
    <>
      <div className="about-page">
        <div className="container">
          <section className="about-intro">
            <h2>
              Welcome to Flow! Our vibrant and colorful hostel is located in the heart of the Amsterdam canals, just a
              short walk away from popular attractions. The Flow is a unique Amsterdam stay, as we are located on a
              boat; a boat which will be 100 years old this upcoming year. We have created a peaceful oasis that still
              offers you the benefits of being located in the center of the city.
            </h2>
          </section>

          <section className="about-intro-copy">
            <div className="about-row">
              <div className="about-col">
                <p>
                  <h3>Est. 2020</h3>
                </p>
              </div>
              <div className="about-col">
                <h3>
                  Here at The Flow we create a warm atmosphere for our guests that gives them the space to meet fellow
                  travelers while playing our games on board or enjoying a refreshing drink together, or finding time to
                  relax and reconnect with oneself on our sunny terrace. Our private rooms provide a comfortable and
                  relaxing space to wind down at the end of each day whether you are traveling solo or with a group of
                  friends and family. Enjoy a cozy lounge and terrace which offers great opportunities to meet others, a
                  space to do some work with our free wifi, and self guided kayak tours on sunny days. Our friendly staff is
                  always ready to provide recommendations and help you make the most of your stay in this magical and
                  beautiful city.
                </h3>
                <h3 style={{ textIndent: "100px" }}>
                  Our hostel is named after the word flow because it symbolizes the seamless and effortless experience we aim to provide for our guests.
                  We want them to feel a sense of ease and harmony during their stay,
                  where everything falls into place and they can relax and enjoy their time with us.
                </h3>
              </div>
            </div>
          </section>

          <section className="about-portrait">
            <div className="about-row">
              <div className="about-col">
                <p>
                  <h3>Contact</h3>
                </p>
                <br />
                <br />
                <p>
                  <h3>Email: info@flowhostel.nl</h3>
                </p>
                <p>
                  <h3>Phone: 0031 6 24281824</h3>
                </p>
                <p>
                  <h3>Address: Oosterdok 4, Amsterdam</h3>
                </p>

                <br />
                <br />
                <br />
              </div>
              <div className="about-col">
                <div className="about-portrait-img">
                  <img src={PortraitImg} alt="" />
                </div>

                <div className="faqs">
                  <Faq data={data} />
                </div>
              </div>
            </div>
          </section>

          <section className="about-awards">
            <div className="about-row">
              <div className="about-col"></div>
              <div className="about-col award-header">
                <h3>
                  Things to do nearby
                </h3>
              </div>
            </div>

            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>0.2km</p>
                </div>
                <div className="award-view">
                  <p>Nemo</p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Museum</p>
                </div>
                <div className="award-project">
                  <p>Amsterdam</p>
                </div>
              </div>
            </div>

            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>0.3km</p>
                </div>
                <div className="award-view">
                  <p>Scheepsvaart Museum</p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Museum</p>
                </div>
                <div className="award-project">
                  <p>Amsterdam</p>
                </div>
              </div>
            </div>

            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>0.6km</p>
                </div>
                <div className="award-view">
                  <p>Artis</p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Zoo</p>
                </div>
                <div className="award-project">
                  <p>Amsterdam</p>
                </div>
              </div>
            </div>

            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>0.6km</p>
                </div>
                <div className="award-view">
                  <p>Hortus Botanicus</p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Botanical Garden</p>
                </div>
                <div className="award-project">
                  <p>Amsterdam</p>
                </div>
              </div>
            </div>

            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>0.8km</p>
                </div>
                <div className="award-view">
                  <p>City Center</p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Sightseeing</p>
                </div>
                <div className="award-project">
                  <p>Amsterdam</p>
                </div>
              </div>
            </div>
            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>7km</p>
                </div>
                <div className="award-view">
                  <p>Strand Blijburg</p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Beach</p>
                </div>
                <div className="award-project">
                  <p>Amsterdam</p>
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

export default Transition(About);
