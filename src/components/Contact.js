import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="offices-container">
      <section className="head-office">
        <h2>Corporate Head Office - Bengalore</h2>
        <div className="head-office-details">
          <div className="office-location">
            <h3>Bangalore</h3>
            <p>
              boOkBuS India Private Limited<br />
              Indiqube Leela Galleria,<br />
               #No 55, Old Airport Road,<br />
              HAL 7th Stage, Kodihalli Village,<br />
              Varthur Hobli, Ward No: 94,<br />
              Bengaluru, Karnataka - 560008.
            </p>
          </div>
          <div className="office-location">
            <h3>Bangalore</h3>
            <p>
              boOkBuS India Private Limited.<br />
              3rd Floor, Tower B1,<br />
              Golden Enclave, HAL Old Airport Road,<br />
              Murgesh Pallya, Bengaluru, Karnataka - 560017.
            </p>
          </div>
          <div className="contact-details">
            <p>Ph: +91333146000</p>
            <p>
              For any Support or Complaints: <a href="#">Chat with Us</a><br />
              Support Time: 24*7
            </p>
            <p>
              For Press enquiries: enqir@boOkBuS.com<br />
              <em>Only for Press/Media enquiries</em>
            </p>
          </div>
        </div>
      </section>

      <section className="other-offices">
        <h2>Other Offices</h2>
        <div className="office-locations">
          <div className="office-location">
            <h3>Coimbatore</h3>
            <p>
              boOkBuS India Private Limited,<br />
              JK Centre, 2nd floor, 5th,<br />
              Kannapiran Mills Rd, Sowri Palayam,<br />
              Nearby KIA service center,<br />
              Coimbatore, Tamil Nadu - 641015.
            </p>
          </div>
          <div className="office-location">
            <h3>Ahmedabad</h3>
            <p>
              boOkBuS India Private Limited.<br />
              Dynasty, Unit No. 905, 9th Floor,<br />
              Beside SBI Bank, CG Road Branch,<br />
              Near Stadium Circle,<br />
              CG Road, Navrangpura,<br />
              Ahmedabad, Gujarat - 380009.
            </p>
          </div>
          <div className="office-location">
            <h3>Indore</h3>
            <p>
              boOkBuS India Private Limited,<br />
              # 207, 2nd floor, Fortune Ambience,<br />
              Near Hotel Surya, Dhakkan wala kuan,<br />
              South Tukoganj,<br />
              Indore 452001 - MP
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
