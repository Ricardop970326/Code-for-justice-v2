import React from 'react'
import "../css/program.css"
import Old1 from "../images/Program & Prices/program-images/cute couple.jpg"
import Old2 from "../images/Program & Prices/program-images/cute couplept2.jpg"
import Old3 from "../images/Program & Prices/program-images/handsome man.jpg"
import Dl from "../images/Program & Prices/program-images/digital literacy.png"
import Dl2 from "../images/Program & Prices/program-images/dbf.png"
import Dl3 from "../images/Program & Prices/program-images/acp4.png"
import Dl4 from "../images/Program & Prices/program-images/online.png"
import Stats from "../images/Program & Prices/program-images/Stats.png"
import Logo from "../images/logo.png"




export default function Index() {
  return (  
<>
  <section>
    <img
      src={Old1}
      alt="old man"
      width="400px"
      height="350px"
      id="cutecouple"
    />
    <h1>Connectivity Campaign</h1>
    <div id="bottom-box" >
      <p id="paragraph">
        Affordable Connectivity Program. We offer a benefit program created by
        FCC (The Federal Communications Commissions) to ensure your household
        has connection to the internet for little to no cost.
      </p>
    </div>
  </section>
  <section>
    <img
      src={Old2}
      alt="old woman"
      width="400px"
      height={350}
      id="handsomeman"
    />
    <h1>Device Distribution</h1>
    <div id="bottom-box" >
      <p id="paragraph">
        Eligible households can also receive a one-time discount of up to $100
        to purchase a laptop, desktop computer, or tablet from participating
        providers if they contribute more than $10 and less than $50 toward the
        purchase price.{" "}
      </p>
    </div>
  </section>
  <section>
    <img
      src={Old3}
      alt="handsome king"
      width="400px"
      height="350px"
      id="cutercouple"
    />
    <h1>Digital Literacy Workshops</h1>
    <div id="bottom-box" >
      <p id="paragraph">
        {" "}
        With our initiative we offer classes to teach digital literacy to anyone
        who qualifies. Our workshops include: Digital Lifestyle, Staying Safe
        Online (SSO), Knowing Digital Resources, Online Transactions.
      </p>
    </div>
  </section>
  <section>
    <div className="product-grid">
      <div className="DLClass">
        <img
          src={Dl}
          alt="DLClass"
          height="100px"
          width="100px"
        />
        <h3>Digital Literacy</h3>
        {/* <p>$10.99</p> */}
        <button onclick="window.location.href='https://trainingcms.apple.com/overview';">
          Sign Up Now!
        </button>
      </div>
      <div className="product-grid">
        <div className="DLClass2">
          <img
            src={Dl2}
            alt="DLClass"
            height="100px"
            width="100px"
          />
          <h3>Staying Safe Online</h3>
          {/* <p>$9.99</p> */}
          <button onclick="window.location.href='https://trainingcms.apple.com/overview';">
            Sign Up Now!
          </button>
        </div>
        <div className="product-grid">
          <div className="DLClass3">
            <img
              src={Dl3}
              alt="DLClass"
              height="100px"
              width="100px"
            />
            <h3> Digital Resources</h3>
            {/* <p>$10.99</p> */}
            <button onclick="window.location.href='https://www.fcc.gov/acp';">
              Sign Up Now!
            </button>
          </div>
          <div className="product-grid">
            <div className="DLClass4">
              <img
                src={Dl4}
                alt="DLClass"
                height="100px"
                width="100px"
              />
              <h3>Online Transactions</h3>
              {/* <p>$3.99</p> */}
              <button onclick="window.location.href='https://trainingcms.apple.com/overview';">
                Sign Up Now!
              </button>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n            .image {border-radius: 0; \n            text-align: right;\n            width: 1000px;\n            height: 600px;\n            display: grid;\n            align-items: right;\n            margin: 36px;\n            }\n          "
              }}
            />
            <img
            id='stast'
              className="image"
              src={Stats}
              alt="Stats"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div id="bottom-box" >

    <h1  >Our Policy</h1>
    <h4 id="paragraph">
      Digital literacy is standard in todays world. We advocate to help our
      older generation navigate through technology so that they can feel more
      comfortable making technical decisions. Part of our mission is to empower
      individuals to use technology responsibly and safely. As a team we are
      very determined to help others develop their digital skills!{" "}
    </h4>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n            .logo {border-radius: 0; \n            text-align: right;\n            width: 100px;\n            height: 100px;\n            display: grid;\n            align-items: right;\n            margin: 36px;\n            }\n          "
      }}
    />
   
  </div>
</>
  


   );
}