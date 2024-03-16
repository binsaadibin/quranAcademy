import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AsmaUlHosna() {
  const [names, setNames] = useState('');

  useEffect(() => {
    axios.get('http://api.aladhan.com/v1/asmaAlHusna/1,2')
      .then((response) => {
        console.log('Step 1:', response);

        // Assuming you want to set data in the state
        setNames(response.data);

        // Additional logic you want to perform with the response data
        return response.data; // Pass data to the next .then block
      })
      .then((data) => {
        console.log('Step 2:', data);

        // Additional logic with the data from the previous .then block
        return data; // Pass data to the next .then block
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div>
      {/* Render your component content here */}
    </div>
  );
}

export default AsmaUlHosna;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AsmaUlHosna() {
//   const [names, setNames] = useState('');

//   useEffect(() => {
//     axios.get('http://api.aladhan.com/v1/asmaAlHusna/1,2')
//       .then((response) => {
//         // Assuming the response contains data you want to set in the state
//         setNames(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching Asma Ul Husna:', error.message);
//       });
//   }, []);

//   return (
//     <div>
//       {/* Render your component content here */}
//     </div>
//   );
// }

// export default AsmaUlHosna;

