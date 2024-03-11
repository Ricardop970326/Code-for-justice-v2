import React from 'react'
import "../css/homepage.css"
import Old1 from "../images/homepage-images/old person 1.jpg"
import Old2 from "../images/homepage-images/old person 2.jpg"
import Old3 from "../images/homepage-images/old person 3.jpg"



export default function Index() {
  return (  <main>

<section>
      <h1 id="DBG">BRIDGING THE DIGITAL DIVIDE</h1>
      <h2 id="DBG2">ONE SENIOR AT A TIME</h2>
    </section>

<section id="people-phones">
      <img
        src={Old1}
        alt="old lady on phone"
        id="first-pic"
        className="old-phones"
      />
      <img
        src={Old2}
        alt="old man on phone"
        id="second-pic"
        className="old-phones"
      />
      <img
        src={Old3}
        alt="old man on phone again"
        id="third-pic"
        className="old-phones"
      />
    </section>

    <section id="bottom-box">
      <p id="paragraph">
        At the Digital Bridge Foundation, we aim to raise awareness about the
        digital literacy gap among older generations. <br />
        With technology's increasing importance, many seniors lack access to
        resources for learning. Our mission is to bridge this gap by providing{" "}
        <br />
        resources and information to empower seniors with digital skills.
      </p>
    </section>

<section className="fun-facts">
      <p id="fact1">
        Only 41% of adults aged 65 <br />
        and older use the internet regularly, <br />
        highlighting a significant digital
        <br /> divide between generations.
      </p>
      <p id="fact2">
        About half of adults over
        <br /> 65 don't have internet access
        <br /> at home.
      </p>
      <p id="fact3">
        A study found that nearly 50% <br /> of seniors aged 65 and older feel
        <br /> that the internet is not easy to
        <br />
        use or are afraid of making a<br />
        mistake online.
      </p>
    </section>
    <br/>
   
   
   
  </main>
  


   );
}