import React, { useEffect } from 'react';
import './About.scss';
import mountainPic from '../images/mountain-pic.jpg';
import familyPic from '../images/family-pic.jpg';
import childPic from '../images/child-pic.jpg';
import Vara from 'vara';
import $ from 'jquery';

const About = () => {
  useEffect(() => {
    let fontSize = 190;
// if(window.screen.width < 700) 
//   fontSize = 100;
// else if(window.screen.width < 1200)
//   fontSize= 150;

  var vara = new Vara("#container","https://cdn.jsdelivr.net/gh/akzhy/vara/fonts/Pacifico/PacificoSLO.json",[{
    text:"Hello!",
    x:20,
    y:20,
    id:"fetch",
    strokeWidth:2
  }],{
    fontSize: fontSize,
    textAlign: "center"
  });
  vara.ready(function(){
    var parent = document.querySelector("#container");
    var svg = parent.querySelector("svg");
    svg.setAttribute("width",parent.clientWidth);
    svg.setAttribute("height",parent.clientHeight);
    var container = vara.get("fetch").container;
    vara.setPosition(container,{
    x:10,
    y:50,
    },{
    x:true,
    y:true
    })
  })
  }, [])
  return ( 
    <main>
      <section>
        <div id="container"></div>
        <h2 className='neon hidden'>Hello!</h2>
        <div className='intro'>
        <img className='mountain-pic' src={mountainPic} alt='group of people posing while skiing, with a mountain range in the background'/>
        <p>
          <strong>Welcome to my website.</strong><br /><br />
          My name is James Rex Miller IV.
          <br /><br /> Typically I go by Jim (sometimes JimJames), but feel free to call
          me whatever you like.
          <br /><br />I am a Front End engineer who 
          has worn many hats. 
          <br /><br />No, seriously.
          <br /><br /> Like at least 3 hats.🎓🧢🎩  
        </p>
        </div>
        <div className='lifestory'>
        <p>
          <strong>In addition to working in many industries,<br /> I have lived in many places.</strong> <br/><br/>Originally, I was born in 
          Chicago, IL. But since then I have lived in the Bay Area, Indiana, Los Angeles, Tucson, and Denver. 
          <br /><br />
          While in Tuscon, I attended the University
          of Arizona and got a Bachelor's Degree in Communications, with a minor in Business Administration.

          <br /><br />Beardown! 
        </p>
        <img className='child-pic' src={childPic} alt='two children opening Christmas presents'/>
        </div>
        <div className='experience'>
        <img className='family-pic' src={familyPic} alt="a family with margaritas in hand"/>
        <p>
          <strong>I have lived an unconventional life, and that is why I remain so curious.</strong> <br /><br />There is no greater sense of excitement and hope when 
          you embark on a new adventure.
          <br /><br />
          That's why in August of 2019, I decided to enroll at the Turing School of Software and Design to learn software engineering.
          <br /><br />
          Easily one of the best decisions I have made in my life, because it opened a world of possibilities for me. <br /><br />With a never ending amount of 
          new technologies and paradigms to learn and master, my propensity for diving into rabbit holes and learning ALL THE THINGS will forever remain a work
          in progress (kinda like this website).
        </p>
        </div>
        <div>
        <p>
          If you would like to contact me for any opportunities I can be reached via email at james.rex.miller.4@gmail.com.
        </p>
        </div>
      </section>
    </main>
  );
}

export default About;