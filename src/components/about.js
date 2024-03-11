import React from 'react'
import "../css/about.css"
import Some from "../images/about-images/youngandold.png"
import Some1 from "../images/about-images/techgma.png"
import Ric from "../images/about-images/ricardo.jpg"
import Cris from "../images/about-images/cri.jpg"
import Ken from "../images/about-images/kennidy.png"
import Cha from "../images/about-images/chase.png"
import Kam from "../images/about-images/kam.jpeg"




export default function Index() {
  return ( 

<main>
<section className="fun-facts">
      <p id="fact1">
      <div className="item-1">
      <h3 className="hthree">The Power of Connection</h3>
      <p>
        Digital technology connects every aspect of modern life. Access to the
        digital world can quickly turn i solation into potentialempowering the
        elderly with time for learning, communication, and participating
        actively in the digital era.
      </p>
    </div>
    </p>
      <p id="fact2">
      <div className="item-2">
      <h3>The Global Digital Gap</h3>
      <p>
        Today, 350 million elderly people 1 in 15lack access to the internet and
        500 million elderly people 1 in 12 lack digital literacy skills. These
        are the seniors we empower.
      </p>
    </div>
      </p>
      <p id="fact3">
      <div className="item-3">
      <h3>Economic Impacts</h3>
      <p>
        The elderly, when connected, can contribute to the economy by engaging
        in online commerce, availing services, and even starting digital
        ventures or jobs. The potential is vast, and its time to bridge the gap
      </p>
    </div>
      </p>
    </section>


  <section className="greenback"></section>
  <section className="container">
    <div className="mission-state">
      <div className="center">
        <h1 className="ms"> Our Mission </h1>
        <p className="statement">
          At the Digital Bridge Foundation, we are dedicated to empowering our
          senior community by bridging the digital divide. Through education,
          access, and personalized support, we aim to enhance the quality of
          life for the elderly, ensuring they remain connected, informed, and
          valued in our ever-evolving digital world.
        </p>
      </div>
    </div>
    <img
      className="img-one"
      src={Some}
      alt="something"
    />
  </section>
  <section className="container">
    <img className="img-two" src={Some1} alt="something" />
    <div className="mission-state">
      <h1 className="ms">Vision </h1>
      <p className="statement">
        We envision a world where age is not a barrier to digital engagement. A
        world where every senior, regardless of background or location, has the
        tools and knowledge to connect with loved ones, share their wisdom, and
        engage with the digital community. At DBF, we believe in a future where
        technology fosters unity, understanding, and an enriched life for our
        elderly population
      </p>
    </div>
  </section>
 
  <h1 className="main-head">Meet the team</h1>
  <section className="containertwo">
  
    <div className="box">
      <img className="img-head" src={Ric} alt="Ricardo" />
      <h4>Ricardo Peña</h4>
      {/* <p class="type">Action Man</p> */}
      <p className="price">
        Hi! My name is Ricardo Peña, I'm 26 years old and from Venezuela. I am
        incharge of taking action in initiatives at our non-profit, ensuring
        that everyone has a clear and engaging way to contribute and make a
        difference. I'm fervent about helping people understand the importance
        of being up-to-date with today's advances in tech. Outside of work, I
        like to go jogging every morning, read many books, and listen to music.
      </p>
    </div>{" "}
    {/*// flex items  */}
    <div className="box">
      <img className="img-head" src={Cris} alt="Cristian" />
      <h4>Cristian Mosqueda</h4>
      {/* <p class="type">something</p> */}
      <p className="price">
        {" "}
        Hi, My name is Cristian Mosqueda I am from Charlotte, NC. I lead the
        team with design and helping evolve our non-profit organization to what
        it is today. I enjoy going on hikes and exploring nature.{" "}
      </p>
    </div>{" "}
    {/*// flex items  */}
    <div className="box">
      <img className="img-head" src={Ken} alt="Kennidy" />
      <h4>Kennidy Stillwell</h4>
      {/* <p class="type">CEO</p> */}
      <p className="price">
        I’m Kennidy Stillwell from Mooresville, North Carolina. I lead the
        design and functionality of our homepage and navigation bar, ensuring
        visitors get a comprehensive view of our organization right from the
        start. I’m passionate about educating individuals about technology and
        teaching digital literacy! When I’m not working, I enjoy hiking,
        discovering new movies and shows, and spending quality time with friends
        and family.
      </p>
    </div>
    <div className="box">
      <img className="img-head" src={Cha} alt="Chase" />
      <h4>Chase Gaither</h4>
      {/* <p class="type">Outreach Expert</p> */}
      <p className="price">
        {" "}
        Hi! My name is Chase, I am 21 years old from Charlotte, NC. As a Digital
        Outreach Expert, I ensure that our cause reaches as many people as
        possible, leveraging various online platforms. Thank you so much for
        supporting our mission. If you'd like to get to know more about me or
        our cause, feel free to connect via the social media links below.
      </p>
    </div>
    <div className="box">
      <img className="img-head" src={Kam} alt="Kamara" />
      <h4>Kamara Rackley</h4>
      {/* <p class="type"> Event Cordinator </p> */}
      <p className="price">
        Hello! My name is Kamara Rackley. Born and raised in Charlotte, NC, I
        manage our 'Contact' page, ensuring that those who want to reach out or
        need our support can do so seamlessly. I'm passionate about bridging the
        digital divide for overlooked members of our community and giving them
        the tools to thrive in our evolving world. When I'm off-duty, I love
        listening to music and cherishing moments with family.
      </p>
    </div>
    <br/><br/>
  </section>
</main>
   
   

  


   );
}