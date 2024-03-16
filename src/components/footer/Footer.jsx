import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import SocialIcon from '../header/topheader/SocialIcons.jsx';
import styles from './footer.module.css'

const cardStyle = {
  fontFamily: 'MuseoSans-500',
  color: 'white',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          {/* Company Name */}
          <div className="col-md-3">
            <div className="text-white bg-dark mb-3" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title mb-3">Learn Quran With BinSaadi</h5>
                <p className={styles.contact}>Bin Saad Online Academy functions as a self-governing institution overseen by a dedicated group of professionals.</p>
              </div>
            </div>
          </div>

          {/* Important Links 1 */}
          <div className="col-md-3">
            <div className="text-white bg-dark mb-3" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title mb-3">Important Links</h5>
                <ul className="list-unstyled">
                  <li><i className="bi bi-arrow-right"></i> <Link to="/" style={linkStyle}>Home</Link></li>
                  <li><i className="bi bi-arrow-right"></i> <Link to="/about" style={linkStyle}>About</Link></li>
                  <li><i className="bi bi-arrow-right"></i> <Link to="/contact" style={linkStyle}>Contact</Link></li>
                  {/* Add more links from the header */}
                  <li><i className="bi bi-arrow-right"></i> <Link to="/course" style={linkStyle}>Course 1</Link></li>
                  <li><i className="bi bi-arrow-right"></i> <Link to="/course" style={linkStyle}>Course 2</Link></li>
                  <li><i className="bi bi-arrow-right"></i> <Link to="/course" style={linkStyle}>Course 3</Link></li>
                  {/* End of additional links from the header */}
                </ul>
              </div>
            </div>
          </div>

          {/* More Links */}
          <div className="col-md-3">
            <div className="text-white bg-dark mb-3" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title mb-3">More Links</h5>
                <ul className="list-unstyled">
                  {/* Additional links after "Courses" */}
                  <li><i className="bi bi-arrow-right"></i> <Link to="/service" style={linkStyle}>Services</Link></li>
                  <li><i className="bi bi-arrow-right"></i> <Link to="/download" style={linkStyle}>Download</Link></li>
                  <li><i className="bi bi-arrow-right"></i> <Link to="/login" style={linkStyle}>Login</Link></li>
                  <li><i className="bi bi-arrow-right"></i> <Link to="/payment" style={linkStyle}>Payment</Link></li>
                  <li><i className="bi bi-arrow-right"></i> <Link to="/register" style={linkStyle}>Register</Link></li>
                  {/* Add more links as needed */}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <div className="text-white  mb-3" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title mb-3">Contact</h5>
                <p className={styles.contact}>Address: Mulim town Lahore Pakistan</p>
                <p className={styles.contact}>Email: binsaadibin@gmail.com</p>
                <p className={styles.contact}>Phone: +92 (322) 9604360</p>
                <p><SocialIcon /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
