import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './mainHeader.module.css'
function MainHeader() {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar} `}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="/slazzer-edit-image.png" alt="" className={styles.logo} /></Link>
          <button className={`navbar-toggler ${styles.togleBtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className={`navbar-toggler-icon ${styles.togleBtn}`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className={`nav-link ${styles.list}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.list}`} to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.list}`} to="contact">Contact</Link>
              </li>
              {/* Courses Dropdown */}
              <li className="nav-item dropdown">
                <Link className={`nav-link dropdown-toggle ${styles.list}`} to="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses</Link>
                <div className="dropdown-menu" aria-labelledby="coursesDropdown">
                  <Link className={`dropdown-item ${styles.list}`} to="course">Course 1</Link>
                  <Link className={`dropdown-item ${styles.list}`} to="course">Course 2</Link>
                  <Link className={`dropdown-item ${styles.list}`} to="course">Course 3</Link>
                </div>
              </li>
              {/* End of Courses Dropdown */}
              {/* Additional Pages */}
              <li className="nav-item">
                <Link className={`nav-link ${styles.list}`} to="service">Services</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.list}`} to="download">Download</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.list}`} to="login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.list}`} to="payment">Payment</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.list}`} to="register">Register</Link>
              </li>
              {/* End of Additional Pages */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainHeader;