// import React from 'react';

// const Header = () => (
//   <header>
//     <center>
//       <h1>Online Learning Center</h1>
//     </center>
//   </header>
// );

// const Introduction = () => (
//   <section>
//     <p>
//       Welcome to our Online Learning Center, a leading platform for virtual education in the USA, UK, Canada, and Australia. Our team consists of qualified Quran instructors with over 12 years of experience in online teaching.
//       <br/><br/>
//       Begin your journey of learning the Quran online with us. We offer online courses in Quranic studies, Islam, and Arabic for all age groups and skill levels. While there's no age limit, we do provide separate online Quran classes for children.
//     </p>
//   </section>
// );

// const OnlineClasses = () => (
//   <section>
//     <h1>Explore Online Courses</h1>
//     <div className="container rego">
//       <div className="row">
//         <div className="col-md-6">
//           <div>
//             <div>
//               <p className="card-text"></p>
//               <ol>
//                 <li>Learn Basic Arabic</li>
//                 <br/>
//                 <li>Islamic Studies</li>
//                 <br/>
//                 <li>Quranic Recitation</li>
//                 <br/>
//                 <li>Quran Memorization</li>
//                 <br/>
//                 <li>Advanced Tafseer</li>
//               </ol>
//             </div>
//           </div>
//         </div> 
//         <div className="col-md-6">
//           <div>
//             <center>
//               <img src="path/to/image" className="card-img-top pic" alt="Image" />
//             </center>
//           </div>
//         </div>
//       </div>
//     </div>
//     <p className="peraForAllBlue">Discover a variety of online courses for both kids and adults. Our platform features a team of qualified male and female instructors. Experience a free demo now and choose the Quran teacher that best suits your learning preferences.</p>
//   </section>
// );

// const QuranInstructors = () => (
//   <section>
//     <h1>Dedicated Quran Instructors</h1>
//     <ol>
//       <li className="peraForAllBlue">Specially Crafted Courses for Kids</li>
//       <li className="peraForAllBlue">Female Instructors for Kids</li>
//       <li className="peraForAllBlue">Female Instructors for Women</li>
//       <li className="peraForAllBlue">Male Instructors for Kids</li>
//       <li className="peraForAllBlue">Male Instructors for Adults</li>
//     </ol>
//   </section>
// );

// const QuranClassesForKids = () => (
//   <section>
//     <h1>Quran Classes For Kids</h1>
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <div>
//             <div>
//               <p className="card-text">Our online Quran classes provide a conducive learning environment for kids to freely ask questions and enhance their understanding. Online Learning Center offers more than just courses; it's a platform for clearing doubts and exploring Islam.</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6" style={{ marginBottom: '-100px' }}>
//           <div>
//             <center>
//               <img src="path/to/image" className="card-img-top pic" alt="Image"/>
//             </center>
//           </div>
//         </div>
//       </div>
//     </div>
//     <p className="peraForAllBlue">Our team comprises specialized and well-trained male & female Quran instructors for kids. Motivate your children to learn Quran reading or Tajweed professionally. Interview our instructors to find the perfect fit for your child's learning journey.</p>
//   </section>
// );

// const QuranLearningJourney = () => (
//   <section>
//     <h1>Start Your Quran Learning Journey with a Trial Class</h1>
//     <h1>Enroll Now</h1>
//   </section>
// );

// const QuranCoursesForKids = () => (
//   <section>
//     <h1>Online Quran Courses for Kids</h1>
//     <ul>
//       <li className="peraForAllBlue">Basic Quranic Recitation for Kids</li>
//       <li className="peraForAllBlue">Quran Reading Course for Kids</li>
//       <li className="peraForAllBlue">Online Quran Tajweed Course for Kids</li>
//     </ul>
//   </section>
// );

// const QuranCoursesForAdults = () => (
//   <section>
//     <h1>Quran Classes for Adults</h1>
//     <ul>
//       <li className="peraForAllBlue">Quran Reading Course</li>
//       <li className="peraForAllBlue">Online Quran Tajweed Course</li>
//       <li className="peraForAllBlue">Quran Memorization Course</li>
//       <li className="peraForAllBlue">Tafseer Ul Quran</li>
//       <li className="peraForAllBlue">Advanced Tafseer Ul Quran</li>
//       <li className="peraForAllBlue">Hadith</li>
//       <li className="peraForAllBlue">Advanced Hadith</li>
//       <li className="peraForAllBlue">Quran Translation Course</li>
//     </ul>
//     <p className="peraForAllBlue">Start learning the Quran online now! Online Learning Center offers one-on-one online Quran classes for both kids and adults. Experience a free demo for 3 days, interview instructors, choose the best Quran teacher, and begin your learning journey. Contact us for quotations.</p>
//   </section>
// );

// const Footer = () => (
//   <footer>
//     <p>
//       Start learning the Quran online now! Online Learning Center offers personalized one-on-one online Quran classes for both kids and adults. Experience a free 3-day demo, interview teachers, choose the best Quran instructor, and begin your learning journey. Feel free to contact us for quotations.
//     </p>
//   </footer>
// );

// const OnlineQuranClasses = () => (
//   <main className="RegisterAdultMain">
//     <Header />
//     <Introduction />
//     <OnlineClasses />
//     <QuranInstructors />
//     <QuranClassesForKids />
//     <QuranLearningJourney />
//     <QuranCoursesForKids />
//     <QuranCoursesForAdults />
//     <Footer />
//   </main>
// );

// export default OnlineQuranClasses;



// import React from 'react';

// const Header = ({ title }) => (
//   <header>
//     <center>
//       <h1>{title}</h1>
//     </center>
//   </header>
// );

// const Introduction = ({ content }) => (
//   <section>
//     <p>{content}</p>
//   </section>
// );

// const OnlineClasses = ({ courses, imageSrc, description }) => (
//   <section>
//     <h1>Explore Online Courses</h1>
//     <div className="container rego">
//       <div className="row">
//         <div className="col-md-6">
//           <div>
//             <div>
//               <p className="card-text"></p>
//               <ol>
//                 {courses.map((course, index) => (
//                   <React.Fragment key={index}>
//                     <li>{course}</li>
//                     <br />
//                   </React.Fragment>
//                 ))}
//               </ol>
//             </div>
//           </div>
//         </div> 
//         <div className="col-md-6">
//           <div>
//             <center>
//               <img src={imageSrc} className="card-img-top pic" alt="Image" />
//             </center>
//           </div>
//         </div>
//       </div>
//     </div>
//     <p className="peraForAllBlue">{description}</p>
//   </section>
// );

// const QuranInstructors = ({ instructors }) => (
//   <section>
//     <h1>Dedicated Quran Instructors</h1>
//     <ol>
//       {instructors.map((instructor, index) => (
//         <li key={index} className="peraForAllBlue">{instructor}</li>
//       ))}
//     </ol>
//   </section>
// );

// const QuranClassesForKids = ({ content, imageSrc }) => (
//   <section>
//     <h1>Quran Classes For Kids</h1>
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <div>
//             <div>
//               <p className="card-text">{content}</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6" style={{ marginBottom: '-100px' }}>
//           <div>
//             <center>
//               <img src={imageSrc} className="card-img-top pic" alt="Image" style={{ paddingBottom: '100px' }} />
//             </center>
//           </div>
//         </div>
//       </div>
//     </div>
//     <p className="peraForAllBlue">{content}</p>
//   </section>
// );

// const QuranLearningJourney = ({ content, enrollButtonText }) => (
//   <section>
//     <h1>{content}</h1>
//     <h1>{enrollButtonText}</h1>
//   </section>
// );

// const QuranCoursesForKids = ({ courses }) => (
//   <section>
//     <h1>Online Quran Courses for Kids</h1>
//     <ul>
//       {courses.map((course, index) => (
//         <li key={index} className="peraForAllBlue">{course}</li>
//       ))}
//     </ul>
//   </section>
// );

// const QuranCoursesForAdults = ({ courses, content }) => (
//   <section>
//     <h1>{content}</h1>
//     <ul>
//       {courses.map((course, index) => (
//         <li key={index} className="peraForAllBlue">{course}</li>
//       ))}
//     </ul>
//   </section>
// );

// const Footer = ({ content }) => (
//   <footer>
//     <p>{content}</p>
//   </footer>
// );

// const OnlineQuranClasses = ({ headerTitle, introContent, onlineClassProps, instructorsProps, kidsClassProps, learningJourneyProps, kidsCoursesProps, adultsCoursesProps, footerContent }) => (
//   <main className="RegisterAdultMain">
//     <Header title={headerTitle} />
//     <Introduction content={introContent} />
//     <OnlineClasses {...onlineClassProps} />
//     <QuranInstructors {...instructorsProps} />
//     <QuranClassesForKids {...kidsClassProps} />
//     <QuranLearningJourney {...learningJourneyProps} />
//     <QuranCoursesForKids {...kidsCoursesProps} />
//     <QuranCoursesForAdults {...adultsCoursesProps} />
//     <Footer content={footerContent} />
//   </main>
// );

// export default OnlineQuranClasses;



// import React from 'react';
// import OnlineQuranClasses from './OnlineQuranClasses'; // Assuming the file is in the same directory

// const App = () => {
//   const headerTitle = "Online Quran Classes";
//   const introContent = "Online Quran Academy is a leading platform providing quality online Quran classes for learners of all ages and levels. Our qualified Quran teachers, with years of experience, ensure effective and personalized learning.";

//   const onlineClassProps = {
//     courses: [
//       "Noorani Qaida",
//       "Quran Reading",
//       "Quran with Tajweed",
//       "Quran Hifz/Memorization Course",
//       "Quran Translation",
//       "Tafseer ul Quran",
//     ],
//     imageSrc: "path/to/onlineClassImage.png",
//     description: "Explore our comprehensive online Quran courses designed for both kids and adults. Join us and start your Quranic journey today!",
//   };

//   const instructorsProps = {
//     instructors: [
//       "Special Designed Course; Quran for Kids",
//       "Female Quran teachers for kids",
//       "Female Quran teacher for women, ladies or females",
//       "Male teacher for kids",
//       "Male teacher for Adults",
//     ],
//   };

//   const kidsClassProps = {
//     content: "Our online Quran classes provide a comfortable and interactive learning environment for kids. They can freely ask questions and engage with dedicated male and female Quran teachers.",
//     imageSrc: "path/to/kidsClassImage.png",
//   };

//   const learningJourneyProps = {
//     content: "Embark on your Quranic learning journey with a free trial class. Choose your preferred Quran teacher and enroll now for an enriching experience.",
//     enrollButtonText: "ENROLL NOW",
//   };

//   const kidsCoursesProps = {
//     courses: ["Noorani Qaida for kids", "Quran Reading Course for kids", "Online Quran Tajweed Course for Kids"],
//   };

//   const adultsCoursesProps = {
//     courses: [
//       "Quran Reading Course",
//       "Online Quran Tajweed Course",
//       "Hifz Ul Quran or Memorization Quran",
//       "Tafseer Ul Quran",
//       "Advance Tafseer Ul Quran",
//       "Hadith",
//       "Advance Hadith",
//       "Quran Translation Course",
//     ],
//     content: "Our expert male and female Quran teachers offer online Quran courses for adults of all ages. It's never too late to start learning or improve your Quranic knowledge.",
//   };

//   const footerContent = "Join Online Quran Academy now and experience the convenience of personalized one-on-one Quran classes. Contact us for quotations and further information.";

//   return (
//     <OnlineQuranClasses
//       headerTitle={headerTitle}
//       introContent={introContent}
//       onlineClassProps={onlineClassProps}
//       instructorsProps={instructorsProps}
//       kidsClassProps={kidsClassProps}
//       learningJourneyProps={learningJourneyProps}
//       kidsCoursesProps={kidsCoursesProps}
//       adultsCoursesProps={adultsCoursesProps}
//       footerContent={footerContent}
//     />
//   );
// };

// export default App;


// MainComponent.js
// import React from 'react';
// import RegisterAdultMain from './RegisterAdult';

// const MainComponent = () => {
//   return (
//     <main className="RegisterAdultMain">
//       <RegisterAdultMain />
//     </main>
//   );
// };

// export default MainComponent;


import styles from './adults.module.css'

import React from 'react';

const OnlineQuranClasses = () => {
  return (
    <main className="RegisterAdultMain">

      <h1 className={styles.adultsMainHeading}>Online Quran Classes</h1>


     <section>
     <p className={styles.text}>
        Online Madrasa, one of the leading online Quran academies in Western countries like the USA, UK, Canada, and Australia. Have a team of qualified and foremost Quran teachers with 12+ years of experience in teaching the Quran online.
        <br /><br />
        Your journey to learning Quran online starts here. Online Madrasa offers online Quran, Islam, and Arabic courses for all ages and levels. No age limit, but we have separate online Quran classes for kids.
      </p>
     </section>

     <section className={styles.secondSection}>
     <h1>Learn in Online Quran Classes</h1>
      <div className="container">
        <div className={`row ${styles.secondSectionRow}`}>
          <div className={`col-md-6 ${styles.secondSectionCard}`}>
            <div>
              <div>
                <ol className={styles.secondSectionList}>
                  <li>Learn Noorani Qaida</li>
                  <br />
                  <li>Learn Quran Reading</li>
                  <br />
                  <li>Learn Quran with Tajweed</li>
                  <br />
                  <li>Quran Hifz/Memorization Course</li>
                  <br />
                  <li>Quran Translation</li>
                  <br />
                  <li>Tafseer ul Quran</li>
                </ol>
              </div>
            </div>
          </div>

          <div className={`col-md-6 ${styles.secondSectionCard}`}>
            <div>
              <center><img src="free-online-quran-classes-removebg-preview.png" className="card-img-top pic" alt="Image" /></center>
            </div>
          </div>
          <p className="peraForAllBlue">We offer online Quran courses for both kids and adults. Also, the online madrasa has a team of qualified male and female Quran teachers. Experience free demo Now! Choose a Quran teacher that you want to learn from.</p>

        </div>
      </div>
     </section>

     <section className={styles.secondSection}>
     <h1>Online Quran Teachers</h1>
      <div className="container">
        <div className={`row ${styles.secondSectionRow}`}>
          <div className={`col-md-6 ${styles.secondSectionCard}`}>
            <div>
              <div>
              <ol className={styles.secondSectionList}>
                <li>Special Designed Course; Quran for Kids</li>
                <br />
                <li>Female Quran teachers for kids</li>
                <br />
                <li>Female Quran teacher for women, ladies, or female</li>
                <br />
                <li>Male teacher for kids</li>
                <br />
                <li>Male teacher for Adults</li>
              </ol>
              </div>
            </div>
          </div>

          <div className={`col-md-6 ${styles.secondSectionCard}`}>
            <div>
              <center>  <img src="Learn-Quran-Online-Pros-and-Cons-of-Online-Quran-Learning-removebg-preview.png"  className="card-img-top pic mb-10px"  alt="Image" /></center>
            </div>
          </div>

        </div>
      </div>
     </section>

  <section>   <h1 className={styles.enroll}>Embark on a Quran Learning Journey with Our Trial Class <a href="register.html"><button>ENROLL NOW</button></a></h1></section>

   <section className={styles.fourthSection}>
    <h1>Quran Classes for Kids, Adults, & Ladies</h1>
    <p className={styles.fourthSectionText}>Embrace the enduring lessons of the Quran from the comfort of your own surroundings. Our dedicated online Quranic courses are crafted for children, adults, and women, featuring customized curricula adapted to their individual learning speeds and comprehension levels. Guarantee a personalized and enriching Quranic learning journey for everyone. Interactive, captivating, and imbued with profound insights, each curriculum is meticulously designed to cater to the distinctive requirements of learners. Join us and become a participant in this enlightening expedition.</p>
    <div className={styles.fourthSectionBox}>
      <p className={styles.fourthSectionText}><span>Online Quran Courses for kids </span> Certainly! The educational programs tailored for children encompass a comprehensive approach to Quranic studies. These include Noorani Qaida, a foundational course designed to instill fundamental reading skills. Additionally, there is a Quran Reading Course, concentrating on essential reading proficiency. Furthermore, an Online Quran Tajweed Course is available, aimed at refining pronunciation and recitation. Together, these courses provide a holistic learning experience, nurturing a deep understanding of the Quran among young learners.</p>
      <p className={styles.fourthSectionLine}>&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;</p>
      </div>

      <div className={styles.fourthSectionBox}>
      <p className={styles.fourthSectionText}><span>Quran Classes for Male/Female </span> Foremost and Certified Female and male Quran teachers for both adults male and females or women. Online Madrasa offers online Quran classes for all, there is no age limit. Being Muslims we should learn and read the Quran properly it is never too late to learn or start the Quran by reading or Tajweed. Our expert teachers will teach the Holy Quran in a very easy and professional way.</p>
      <p className={styles.fourthSectionLine}>&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;</p>
      </div>

      <div className={styles.fourthSectionBox}>
      <p  className={styles.fourthSectionText}> <span>Quran Courses for Adults </span> An extensive selection of Quranic courses provides a holistic approach to Islamic education. These offerings include Quran Reading, Online Quran Tajweed, Hifz Ul Quran (Memorization), Tafseer Ul Quran, Advance Tafseer, Hadith, Advance Hadith, and Quran Translation. Each course is meticulously designed to cater to different facets of understanding and practicing the teachings of the Quran, ensuring a well-rounded and enriching educational experience.</p>
      <p className={styles.fourthSectionLine}>&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;&#x02AD8;</p>
      </div>
      <p className={styles.fourthSectionText}>Learn Quran online Now! Online Madrasa offers one-on-one online Quran classes both for kids and Adults. Experience free demo for 3 days. Interview teachers, choose the best Quran teacher and start learning from. Feel free to contact us for quotations.</p>
   
   
   </section>
    </main>
  );
};

export default OnlineQuranClasses;
