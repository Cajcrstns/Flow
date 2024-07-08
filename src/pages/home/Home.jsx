import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger  from 'gsap/dist/ScrollTrigger';

import Transition from '../../components/transition/Transition';
import View from "../../components/view/View";
import About from '../../components/about/About';
import Sleep from "../../components/sleep/Sleep"
import Blog from "../../pages/blog/Blog"
import Info from "../../components/info/Info"

gsap.registerPlugin(ScrollTrigger)

import "./home.css";

function Home() {
useEffect(() => {
    const sectionColor = document.querySelectorAll('[data-bgcolor]');
    sectionColor.forEach((colorSection, i) => {
      const prevBgColor = i === 0 ? '' : sectionColor[i - 1].dataset.bgcolor;
      const prevTextColor =
        i === 0 ? '' : sectionColor[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        start: 'top 50%',
        onEnter: () =>
          gsap.to('.main', {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: 'auto',
        }),
        onLeaveBack: () =>
          gsap.to('.main', {
            backgroundColor: prevBgColor,
            color: prevTextColor,
            overwrite: 'auto',
          }),
      });
    });

    return () => {};
}, []); 
  return (
    <div className='main'>
        <div className='bgcolor'></div>
        <section 
            className="flow"
            data-bgcolor="#FAF0DC"
            data-textcolor="#000"
        >
            <div
                className="home"
                
            >
                <View />  
            </div>
        </section>     
        <section
            className="section"
            data-bgcolor="#a0d0e5"
            data-textcolor="#FFFFFF"
        >
            <div
                className="about"
            >

                <About />
            </div>
        </section>
        <section
            className="section"
            data-bgcolor="#a0d0e5"
            data-textcolor="#FFFFFF"
            id="Sleep"
        >
            <div
                className="sleep"
            >
                <Sleep />
            </div>
        </section>
        <section
            className="section"
            data-bgcolor="##e8dcca"
            data-textcolor="#FFFFFF"
            id="Mindfulness"
        >
            <div
                className="mindfulness"   
            >
                <Blog />
            </div>
        </section>
        <section
            className="section"
            data-bgcolor="#eebca5"
            data-textcolor="#FFFFFF"
            id='info'
        >
            <div
                className="mindfulness"   
            >
                <Info />
                
            </div>
        </section>
    </div>
  );
}

export default Transition(Home);
