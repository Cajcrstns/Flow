import React from "react";
import Faq from "react-faq-component";

import Transition from "../../components/transition/Transition";
import Footer from "../../components/footer/Footer";
import PortraitImg from "../../assets/highlights/111.jpg";
import Mindfullness from "../../components/mindfullness/Blog"

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
              Welcome to Flow’s unique mindfulness yoga tour for solo male and female travelers. We warmly invite
              you to come join us on our upcoming yoga retreat this summer where we will sail around Holland for 8
              peaceful days, beginning and ending in the beautiful city of Amsterdam. This is a specially curated trip in
              which we will practice yoga daily with a range of vinyasa, restorative, hatha, and yin-yang styles.
            </h2>
          </section>
        </div>
        <div className="container">
          <section className="about-intro-copy2">
            <div className="about-row">
              <div className="about-col">
                <div className="about-portrait-img">
                  <img src={PortraitImg} alt="" />
                </div>
              </div>
              <div className="about-col">
                <h3>
                  Regardless of your previous experience, this retreat caters to all levels and offers many opportunities to
                  improve your yoga skills. Along with the yoga you can expect to participate in various mindfulness
                  workshops each afternoon some may include meditation, breath-work, and journaling. Your teachers on
                  the Flow will guide you in learning new and simple practices to engage with openness. However, like the
                  rest of this retreat we will go with the flow and see what serves us best.
                  During our 8 days together on The
                  Flow we will come together each night to make tasty and healthy dinners, and experience the joy of
                  cooking with one another. As we stroll through the charming towns of The Netherlands we will find
                  biological and organic food markets and pick out our groceries together. The Flow yoga retreat is a time
                  to practice yoga and mindfulness but also to create a small community on board. We will keep the group
                  small with a maximum of 12 guests on board. With smaller groups it gives everyone plenty of space to
                  practice their yoga, and allows the choice to share a room with other guests or to reserve a private room.
                </h3>
                <h3 style={{ textIndent: "100px" }}>
                  To step onto The Flow this summer is to take the time for you, to tune in and open up to the inspiration
                  which is all around. We will unplug from our phones and rediscover the joy within that nature can bring
                  to all of us. The Flow is the perfect space to allow your authentic self to flourish and feel the healing
                  benefits of your yoga practice, nourishing meals, and the fresh air on your face each morning. Everyday
                  will be a new adventure filled with yoga, self-exploration, swimming in the sea, and mediating by anchor.
                  Come and practice, rest and renew yourself.
                </h3>
              </div>
            </div>
          </section>
          <section className="about-awards">
            <div className="about-row">
              <div className="about-col award-header">
                <h3>
                  <span>A typical schedule may look like</span>
                </h3>
              </div>
            </div>

            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>7 - 8 am</p>
                </div>
                <div className="award-view">
                  <p></p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Morning Wake up Yoga Flow or Meditation</p>
                </div>
                <div className="award-project">
                  
                </div>
              </div>
            </div>

            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>8:30 - 9:30 am</p>
                </div>
                <div className="award-view">
                  <p></p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Breakfast</p>
                </div>
                <div className="award-project">
                  <p></p>
                </div>
              </div>
            </div>

            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>9:30 - 10:30 am</p>
                </div>
                <div className="award-view">
                  <p></p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>time to relax and get ready for sailing!</p>
                </div>
                <div className="award-project">
                  <p></p>
                </div>
              </div>
            </div>

            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>10:30 - 12:30 </p>
                </div>
                <div className="award-view">
                  <p></p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Mindfulness workshop</p>
                </div>
                <div className="award-project">
                  <p></p>
                </div>
              </div>
            </div>

            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>1 - 2 pm</p>
                </div>
                <div className="award-view">
                  <p></p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Lunch time!</p>
                </div>
                <div className="award-project">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>2 - 5 pm</p>
                </div>
                <div className="award-view">
                  <p></p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Trip to the food markets/visit cultural sites/ swim in the IJsselmeer</p>
                </div>
                <div className="award-project">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>5 - 6:30 pm</p>
                </div>
                <div className="award-view">
                  <p></p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Free time</p>
                </div>
                <div className="award-project">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>6:30 - 8:30 pm</p>
                </div>
                <div className="award-view">
                  <p></p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Prepare and Eat Dinner</p>
                </div>
                <div className="award-project">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="about-row award-row">
              <div className="about-col">
                <div className="award-year">
                  <p>9 - 10 pm</p>
                </div>
                <div className="award-view">
                  <p></p>
                </div>
              </div>
              <div className="about-col">
                <div className="award-info">
                  <p>Yin / Restorative Yoga</p>
                </div>
                <div className="award-project">
                  <p></p>
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
