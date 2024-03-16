import React from 'react';
import styles from './teachers.module.css';

export default function Teacher() {
  return (
    <div>
      <div className={`${styles.third_box_poster} d`}>
        <h1 className={`text-center ${styles.h1}`}>Our Online Quran Tutors</h1>
        <div className="text-center">
          <img src="/underline-blue-300x28.png" alt="" className="img-fluid" />
        </div>

       <div className={`container${styles.container}`}>
       <div className="row justify-content-evenly">
          <div className={`col-md-7 ${styles.box}`}>
            <div className="text-center">
              <img src="/Teachers-Icons-male-201x300 (1).png" className={`card-img-top t1 ${styles.pictures}`} alt="Image 1" />
            </div>
            <div className="card-body">
              <p>WAHEEDULLAH SAADI</p>
            </div>
          </div>
          <div className={`col-md-7 ${styles.box}`}>
            <div className="text-center">
              <img src="/Teachers-Icons-male-201x300 (1).png" className={`card-img-top t1 ${styles.pictures}`} alt="Image 1" />
            </div>
            <div className="card-body">
              <p>WAHEEDULLAH SAADI</p>
            </div>
          </div>
          <div className={`col-md-7 ${styles.box}`}>
            <div className="text-center">
              <img src="/Teachers-Icons-male-201x300 (1).png" className={`card-img-top t1 ${styles.pictures}`} alt="Image 1" />
            </div>
            <div className="card-body">
              <p>WAHEEDULLAH SAADI</p>
            </div>
          </div>
          <div className={`col-md-7 ${styles.box}`}>
            <div className="text-center">
              <img src="/Teachers-Icons-male-201x300 (1).png" className={`card-img-top t1 ${styles.pictures}`} alt="Image 1" />
            </div>
            <div className="card-body">
              <p>WAHEEDULLAH SAADI</p>
            </div>
          </div>

          {/* ... (similar changes for other cards) ... */}
        </div>
       </div>
      </div>
    </div>
  );
}
