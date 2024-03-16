import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SocialIcons from './SocialIcons.jsx';
import DateAndTime from './DateaAndTime.jsx';
import styles from '../../components.module.css';
import topheaderStyles from './topHeader.module.css';
import Tasmia from './Tasmia.jsx';

function TopHeader() {
  return (
    <div className={`container-fluid ${topheaderStyles.TopHeader}`}>
      <div className="row justify-content-evenly">
        <div className={`col ${topheaderStyles.dateAndTime}`}>
          <DateAndTime />
        </div>
        <div className={`col-md-6 ${topheaderStyles.tasmia}`}>
         <Tasmia/>
        </div>
        <div className={`col ${topheaderStyles.SocialIcons}`}>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;

