import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from'./tasmia.module.css';

function Tasmia() {
  const [surahData, setSurahData] = useState([]);
  const [currentAyah, setCurrentAyah] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from a Quranic API (replace with a real API endpoint)
    fetch('https://api.alquran.cloud/v1/surah/1/ar.alafasy')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Check the structure of the data
        if (data.data && data.data.ayahs) {
          setSurahData(data.data.ayahs.map(ayah => ayah.text));
        } else {
          throw new Error('Invalid data structure');
        }
      })
      .catch(error => {
        console.error('Error fetching Quran data:', error);
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextAyah();
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentAyah, surahData]);

  const handleNextAyah = () => {
    setCurrentAyah(prevAyah => (prevAyah + 1) % surahData.length);
  };

  return (
    <div>
      {error ? (
        <p className="text-white">Error fetching Quran data: {error}</p>
      ) : (
        <div>
          {surahData.length > 0 && (
            <div className={styles.container}> 
              <p className={styles.tasmia}>{surahData[currentAyah]}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Tasmia;


