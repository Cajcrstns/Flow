import React, { useRef, useEffect } from "react";
import "./works.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";

import Marquee from "react-fast-marquee";
import { gsap } from "gsap";

import ProjectImg1 from "../../assets/highlights/65.jpg";
import ProjectImg2 from "../../assets/highlights/31.jpg";
import ProjectImg3 from "../../assets/highlights/52.jpg";
import Blue from "../../assets/images/projects/blue.jpg";
import Orange from "../../assets/images/projects/orange.jpg";
import Pink from "../../assets/images/projects/pink.jpg";
import Footer from "../../components/footer/Footer";

const Works = () => {
  const workCopyReveal = useRef();

  useEffect(() => {
    workCopyReveal.current = gsap.timeline({ paused: true }).to("h1", {
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.35,
    });

    workCopyReveal.current.play();
  }, []);

  const projectPreivewImages = [
    Blue,
    Orange,
    Pink,
  ];

  let lastHoveredIndex = null;
  const projectPreviewContainer = document.querySelector(".project-preview");

  const handleResetPreivew = () => {
    const projectPreviewContainer = document.querySelector(".project-preview");

    gsap.to(".project-preview img", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        lastHoveredIndex = -1;
      },
    });
  };

  const handleMouseOver = (index) => {
    const projectPreviewContainer = document.querySelector(".project-preview");

    if (index !== lastHoveredIndex) {
      console.log(`Hovered ${index}`);

      const img = document.createElement("img");
      img.src = projectPreivewImages[index - 1];
      projectPreviewContainer.appendChild(img);

      gsap.to(img, {
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          const allPrevImages = projectPreviewContainer.querySelectorAll("img");

          if (allPrevImages.length > 1) {
            Array.from(allPrevImages)
              .slice(0, -1)
              .forEach((img) => {
                setTimeout(() => {
                  img.remove();
                }, 1000);
              });
          }
        },
      });

      lastHoveredIndex = index;
    }
  };

  useEffect(() => {
    const projectItems = document.querySelectorAll(".project-item");

    return () => {
      projectItems.forEach((projectItem) => {
        projectItem.removeEventListener("mouseover", () =>
          handleMouseOver(index)
        );
      });
    };
  }, []);

  return (
    <>
      <div className="works-page">
        <div className="project-preview"></div>
        <div className="container">
          <section
            className="works-hero"
            onMouseOver={() => {
              handleResetPreivew();
            }}
          >
            <section className="about-intro">
              <h2>
                Our rooms, here we offer our bunk beds which provide a cozy and comfortable sleep each night. Each room is equipped with fresh linens and a small sink which allows you to brush your teeth, freshen up, and wash your face.
                We've got three different types of rooms; two person, four person and six person. Have a look and decide which one you prefer.
              </h2>
            </section>

          </section>

          <section className="project-list">
            <div className="project-list-row">
              <div className="project-list-col">
                <div
                  className="project-item"
                  onMouseOver={() => handleMouseOver(1)}
                >
                  <div className="project-img">
                    <Link to="/two-person-room">
                      <img src={ProjectImg1} alt="" />
                    </Link>
                  </div>
                  <div className="project-copy copy-pos-right">
                    <h2>Two Person Room</h2>
                  </div>
                </div>
              </div>
              <div className="project-list-col whitespace-col"></div>
            </div>

            <div className="project-list-row">
              <div className="project-list-col whitespace-col"></div>
              <div className="project-list-col">
                <div
                  className="project-item"
                  onMouseOver={() => handleMouseOver(2)}
                >
                  <div className="project-img">
                    <Link to="/four-person-room">
                      <img src={ProjectImg2} alt="" />
                    </Link>
                  </div>
                  <div className="project-copy copy-pos-left">
                    <h2>Four Person Room</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-list-row">
              <div className="project-list-col">
                <div
                  className="project-item"
                  onMouseOver={() => handleMouseOver(3)}
                >
                  <div className="project-img">
                    <Link to="/six-person-room">
                      <img src={ProjectImg3} alt="" />
                    </Link>
                  </div>
                  <div className="project-copy copy-pos-right">
                    <h2>Six Person Room</h2>
                  </div>
                </div>
              </div>
              <div className="project-list-col whitespace-col"></div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Transition(Works);
