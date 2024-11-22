import React from 'react';
import './About.css'; // Assume this CSS file contains styling to match the design

const About = () => {
  return (
    <div className="about-us-container">
      <section className="about-us">
        <h2>About us</h2>
        <p>
          boOkBuS is India's largest online bus ticketing platform that has transformed bus travel in the country by bringing ease and convenience to millions of Indians who travel using buses. Founded in 2006, boOkBuS is part of India’s leading online travel company MakeMyTrip Limited (NASDAQ: MMYT). By providing the widest choice, superior customer service, lowest prices, and unmatched benefits, boOkBuS has served over 18 million customers. boOkBuS has a global presence with operations across Indonesia, Singapore, Malaysia, Colombia, and Peru apart from India.
        </p>
      </section>

      <section className="management-team">
        <h2>Management Team</h2>
        <div className="team-member">
          <img src="https://www.kbuses.in/resources/water_busimages/Bus.svg" alt="Prakash Sangam, CEO" className="team-photo" />
          <div className="team-details">
            <h3>Ramesh, CEO</h3>
            <p>
              Ramesh has been Chief Executive Officer of boOkBuS since June 2014. Prior to boOkBuS, he served as an Executive Vice President of Info Edge India (Naukri group), heading two group businesses namely Shiksha.com and Jeevansathi.com. He’s also worked as General Manager of Marketing and Innovation at Airtel and has also had multiple roles across Marketing, Brand Management and Sales at Hindustan Unilever. Prakash has completed his MBA from IIM Calcutta and also holds an Honours degree in Production Engineering from Mumbai University.
            </p>
          </div>
        </div>

        <div className="team-member">
          <img src="https://www.kbuses.in/resources/water_busimages/Bus.svg" alt="Anoop Menon, CTO" className="team-photo" />
          <div className="team-details">
            <h3>Rohit M S, CTO</h3>
            <p>
             Rohit M S serves as Chief Technology Officer at boOkBuS.who plays an integral role in setting the company's strategic direction, development and future growth. At boOkBuS, he leads effective delivery of scalable systems to the customers, agents and bus operators by incorporating the latest technology. A tech enthusiast, he comes with over 18 years of extensive experience in building scalable and high-performing products across telecom, internet and mobile ecommerce domains. He completed BE in Mechanical Engineering from Madras University and loves sports, movies, TV and music.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
