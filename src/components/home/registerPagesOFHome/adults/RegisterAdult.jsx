// // RegisterAdultMain.js
// import React from 'react';


// const RegisterAdultMain = () => {
//   return (
//     <div>
//       <HeaderComponent title="Online Quran Classes" />

//       <ParagraphComponent content="Online Madrasa, one of the leading online Quran academies in Western countries like the USA, UK, Canada, and Australia. Have a team of qualified and foremost Quran teachers with 12+ years of experience in teaching the Quran online. Your Journey to learning Quran online starts here. Online Madrasa offers online Quran, Islam, and Arabic courses for all ages, and levels. No age limit but we have separate online Quran classes for kids." />

//       <h1 className="headingForAllBlue">Learn in Online Quran Classes</h1>

//       <div className="container rego">
//         <div className="row">
//           <ListItemsComponent
//             items={[
//               'Learn Noorani Qaida',
//               'Learn Quran Reading',
//               'Learn Quran with Tajweed',
//               'Quran Hifz/Memorization Course',
//               'Quran Translation',
//               'Tafseer ul Quran',
//             ]}
//           />

//           <ImageComponent src="pictures/regAdult1.png" alt="Image" />
//         </div>
//       </div>

//       <ParagraphComponent content="We offer online Quran courses for both kids and adults. Also, the online madrasa has a team of qualified male and female Quran teachers. Experience free demo Now! choose a Quran teacher that you want to learn from." />

//       <h1 className="headingForAllBlue">Online Quran Teachers</h1>

//       <ListItemsComponent
//         items={[
//           'Special Designed Course; Quran for Kids',
//           'Female Quran teachers for kids',
//           'Female Quran teacher for women, ladies or female',
//           'Male teacher for kids',
//           'Male teacher for Adults',
//         ]}
//       />

//       <h1 className="headingForAllBlue">Quran Classes For Kids</h1>

//       <div className="container">
//         <div className="row">
//           <ParagraphComponent content="Online Quran classes education system gives you the power to have control over your understanding. In online classes without any hesitation, kids can ask any question from their teachers freely. But in traditional in-class education mostly kids hesitate to ask questions. With us, you can clear all your doubts by asking any question subject-related question or Islam. Online Madrasa offers much more just than learning the course." />

//           <ImageComponent src="pictures/regAdult2.png" alt="Image" />
//         </div>
//       </div>

//       <ParagraphComponent content="Online Madrasa has a team of specialized and well-trained male & female Quran teachers for kids. Our teachers will help and motivate the kids to learn Quran reading or Tajweed in a very professional way. It is very difficult to find the right teacher for your kids online. To avoid any mishap, you can interview female or male teachers and choose the one that you or your kids want to learn from." />

//       <ButtonComponent buttonText="Learn Quran with Trial Class With Us" link="register.html" />

//       <h1 className="headingForAllBlue">Online Quran Courses for kids</h1>

//       <ListItemsComponent
//         items={[
//           'Noorani Qaida for kids',
//           'Quran Reading Course for kids',
//           'Online Quran Tajweed Course for Kids',
//         ]}
//       />

//       <h1 className="headingForAllBlue">Quran Classes for Male/Female</h1>

//       <ParagraphComponent content="Foremost and Certified Female and male Quran teachers for both adults male and females or women. Online Madrasa offers online Quran classes for all, there is no age limit. Being Muslims we should learn and read the Quran properly it is never too late to learn or start the Quran by reading or Tajweed. Our expert teachers will teach the Holy Quran in a very easy and professional way." />

//       <h1 className="headingForAllBlue">Quran Courses for Adults</h1>

//       <ListItemsComponent
//         items={[
//           'Quran Reading Course',
//           'Online Quran Tajweed Course',
//           'Hifz Ul Quran or Memorization Quran',
//           'Tafseer Ul Quran',
//           'Advance Tafseer Ul Quran',
//           'Hadith',
//           'Advance Hadith',
//           'Quran Translation Course',
//         ]}
//       />

//       <ParagraphComponent content="Learn Quran online Now! online Madrasa offers one-on-one online Quran classes both for kids and Adults. Experience free demo for 3 days. Interview teachers, choose the best Quran teacher and start learning from. Feel free to contact us for quotations." />
//     </div>
//   );
// };

// export default RegisterAdultMain;





// // HeaderComponent.js
// const HeaderComponent = ({ title }) => {
//     return (
//       <div>
//         <h1>{title}</h1>
//       </div>
//     );
//   };


// // ParagraphComponent.js


// const ParagraphComponent = ({ content }) => {
//   return <p>{content}</p>;
// };




// // ListItemsComponent.js


// const ListItemsComponent = ({ items }) => {
//   return (
//     <div>
//       <ol>
//         {items.map((item, index) => (
//           <React.Fragment key={index}>
//             <li>{item}</li>
//             <br />
//           </React.Fragment>
//         ))}
//       </ol>
//     </div>
//   );
// };




// // ImageComponent.js


// const ImageComponent = ({ src, alt }) => {
//   return (
//     <div>
//       <center>
//         <img src={src} className="card-img-top pic" alt={alt} />
//       </center>
//     </div>
//   );
// };



// // ButtonComponent.js


// const ButtonComponent = ({ buttonText, link }) => {
//   return (
//     <h1 className="h1">
//       {buttonText}
//       <a href={link}>
//         <button>ENROLL NOW</button>
//       </a>
//     </h1>
//   );
// };





