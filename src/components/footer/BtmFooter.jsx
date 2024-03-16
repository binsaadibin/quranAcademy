import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from './bottomFooter.module.css';

function BottomFooter() {
  return (
    <footer className={`bg-white text-black text-center p-3`}>
      <div className="container">
        <p className="mb-0">&copy; 2023 Learn With Bin Saadi. All rights reserved.</p>
        <p className="mb-0">Designed and developed by Waheed Ullah Saadi</p>
      </div>
    </footer>
  );
}

export default BottomFooter;
