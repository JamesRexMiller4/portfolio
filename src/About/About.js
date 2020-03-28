import React, { useEffect } from 'react';
import './About.scss';
import mountainPic from '../images/mountain-pic.jpg';
import familyPic from '../images/family-pic.jpg';
import childPic from '../images/child-pic.jpg';
import Vara from 'vara';

const About = () => {
  useEffect(() => {
    let fontSize = 190;
if(window.screen.width < 700) 
  fontSize = 100;
else if(window.screen.width < 1200)
  fontSize= 150;

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
        <div className='intro'>
        <img className='mountain-pic' src={mountainPic} alt='group of people posing while skiing, with a mountain range in the background'/>
        <p>
          Hello! <br /><br />Welcome to my personal website. My name is James Rex Miller IV, 
          but typically I go by Jim, sometimes JimJames. I am a Front End engineer who 
          has worn many hats. Prior to software development I worked in sales in a myriad 
          of industries: financial services, logistics, hospitality, event planning. I even did a stint 
          as a substitute teacher. 
        </p>
        </div>
        <div className='lifestory'>
        <p>
          In addition to working in many industries, I have lived in many places. Originally, I was born in 
          Chicago, IL. But then I lived in a lot of different parts of Indiana, before moving back to Chicago at 
          the beginning of fourth grade where I would remain for the rest of grade school. 
          <br /><br />
          Then I hopped over to the Bay Area for high school, before heading off to Tuscon, Arizona to attend the University
          of Arizona where I got my Bachelor's Degree in Communications, with a minor in Business Administration. Since college, 
          I have moved back to Chicago, moved to Los Angeles, and moved to Denver, Colorado where I currently reside. 
        </p>
        <img className='child-pic' src={childPic} alt='two children opening Christmas presents'/>
        </div>
        <div className='experience'>
        <img className='family-pic' src={familyPic} alt="a family with margaritas in hand"/>
        <p>
          I have lived an unconventional life, and I think that is why I remain so curious. There is no greater sense of excitement and hope when 
          you embark on a new adventure. For most of professional life I have been searching for the place that felt like home. While the sales 
          career gave me gifts in articulation and development in professionalism, it left me craving something more. 
          <br /><br />
          That's why in August of 2019 I decided to make the career switch into software development by enrolling in to the FrontEnd engineering 
          program at the Turing School of Software and Design. For the next 7 months I learned about the fundamentals of Object Oriented Programming, 
          Test Driven Development, UI/UX Design, and the moral intersections we as a society find ourselves as we integrate technology more and more into
          our daily lives.
          <br /><br />
          Enrolling into Turing was the best decision I have made in my life, because it opened a world of possibilities for me. With a never ending amount of 
          new technologies and paradigms to learn and master, my propensity for diving into rabbit holes and learning ALL THE THINGS will forever remain a work
          work in progress (kinda like this website).
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