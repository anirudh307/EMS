import React from "react";
import Heading from "./Heading";
import img1 from "../assets/img1.jpg"
//  import "./App.css"

const About = () => {
  return (<>
         <div>
      {/* <h2 className="main-heading1">About Employee Administration System</h2> */}
      <Heading/>
      </div>
        {/* Left Side - Text Content */}
        <div className="text-content1">
          <h3>About Employee Administration System</h3>
          <p>
            Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. 
            Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance 
            workers, and complex regulations.
            Technology, whether it’s workforce administration software or a human capital administration solution, can often help 
            business leaders maintain productivity more effectively in rapidly changing environments.
            Employee administration is the process by which employers ensure workers perform their jobs to the best of their abilities 
            to achieve business goals. It entails building and maintaining healthy relationships, monitoring daily labor, and measuring progress.
          </p>
        <div className="employee-section1">
          <div className="container1">
          {/* Cards Section */}
          <div className="info-cards1">
            <div className="card1">
              <div className="icon1">📖</div>
              <div>
                <h4>Employee Administration System</h4>
                <p>Uses coaching to motivate and build trust with workers, unlocking human potential.</p>
              </div>
            </div>

            <div className="card1">
              <div className="icon1">💰</div>
              <div>
                <h4>Salary Administration System</h4>
                <p>Uses structured financial planning to ensure employee salary management efficiency.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="image-container1">
          <img
            src={img1} 
            alt="Employee Administration System"
          />
        </div>
      </div>
    </div>
</>);
};

export default About;
