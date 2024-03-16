import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styles from './dateAndTime.module.css';


function DateaAndTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the current time based on the user's IP
        const response = await fetch('https://worldtimeapi.org/api/ip');
        const data = await response.json();

        // Check if daylight saving time is in effect
        const isDST = data.dst === true;

        // Calculate the offset and apply it to the current time
        const offset = isDST ? data.utc_offset + 1 : data.utc_offset;
        const adjustedDate = moment.utc(data.utc_datetime).utcOffset(offset);
        
        // Format the adjusted date using moment.js with seconds
        const formattedDate = adjustedDate.format('DD/MM/YYYY hh:mm:ss a');


        setCurrentTime(formattedDate);
      } catch (error) {
        console.error('Error fetching time:', error);
      }
    };

    // Fetch the initial data
    fetchData();

    // Set up an interval to fetch the time every second
    const intervalId = setInterval(fetchData, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <p  className={styles.DateaAndTime}>{currentTime}</p>
    </div>
  );
}

export default DateaAndTime;
