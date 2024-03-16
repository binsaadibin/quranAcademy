import React from 'react';
import styles from './about.module.css'
import Teacher from '../home/teachers/Teacher.jsx';

const About = () => {
  return (
    <>
   <h1 className={styles.aboutMainHeading}>About Us</h1>
      <section>
      <p className={styles.text}>Welcome to our Online Madrasa, a Quran teaching organization providing online Quran classes worldwide. As a leading online Quran academy in the West for the past 12 years, we have designed special courses for both kids and elders. Our team comprises certified and experienced teachers, both male and female. <br />

Our vision is to offer the best opportunity for learning the Quran online, equipped with the latest technology, catering to people of all ages around the world. Our motivation stems from the realization that Muslims in Western or non-Muslim countries often lack access to mosques or Quran teaching institutes. <br />

Recognizing that Muslims in North America and Western countries prefer learning the Quran from native Arab tutors, we strive to hire the most qualified Quran tutors, especially from Arab countries. <br />

Our goal is to provide you with the best online Quran classes in the comfort of your own home. Our classes cater to people of all age groups, including kids, youth, and the elderly. All you need is a computer/laptop/mobile, a fast internet connection, and a headphone set to embark on your journey of learning to read the Quran online.</p>
</section>
<section className={styles.secondSection}>
<h1 className={styles.heading}>Why Learn the Quran?</h1>
           <p className={styles.text}>As Muslims, it is our obligation to learn the Quran and pass its teachings to our children. The Quran, when learned properly, helps us understand what Allah expects from us. It completes the iman (faith) of a Muslim, providing insight into the logic behind Islamic rules and teachings.</p>
                <h2 className={styles.secondSectionHeading2} >As Stated in the Quran</h2>
                  <p className={styles.text}>Translation: "And We revealed to you the message (Quran) that you may make clear to the people what was sent down to them and that they might give thought." [AlQur’a 16:44]</p>
                  <h2  className={styles.secondSectionHeading2}>Numerous hadiths also emphasize the importance of learning the Quran:</h2>
                  <p className={styles.text}>Narrated Uthman bin Affan: The Prophet said, “The most superior among you (Muslims) are those who learn the Quran and teach it.” [Sahih Bukhari Volume 6, Book 61, Number 545] <br />
             “O People of the Quran, do not treat the Quran casually. Read it day and night as if it is the Haq of Recitation. Reflect upon its teachings to attain success. Do not rush for its reward, for the reward is great and will be given in the Hereafter.” [Bahiqi]</p>
      
        <div className={`row ${styles.secondSectionRow}`}>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center">
              <img src="istockphoto-1216661554-612x612.jpg" className="card-img-top" alt="Your Card Title 1" />
              <div className="card-body">
                <h2 className={`${styles.secondSectionCardTitle}`}>The Essence of Quranic Learning</h2>
                <p className={styles.secondSectionCardText}>Embark on a journey of spiritual growth and understanding as you delve into the teachings of the Quran. Strengthen your faith and gain insights into the profound wisdom that guides our lives, discovering a path that leads to inner peace and enlightenment.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="card text-center">
              <img src="istockphoto-453218359-612x612.jpg" className="card-img-top" alt="As Stated in the Quran" />
              <div className="card-body">
                <h2 className={`${styles.secondSectionCardTitle}`}>Guidance from the Quran</h2>
                <p className={styles.secondSectionCardText}>The Quran, revealed as a guidance for humanity, urges us to reflect upon its verses. "And We revealed to you the message (Quran) that you may make clear to the people what was sent down to them and that they might give thought." [AlQur’a 16:44]</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="card text-center">
              <img src="istockphoto-482765777-612x612.jpg" className="card-img-top" alt="Numerous hadiths also emphasize the importance of learning the Quran:" />
              <div className="card-body">
                <h2 className={`${styles.secondSectionCardTitle}`}>Prophetic Emphasis on Quranic Education</h2>
                <p className={styles.secondSectionCardText}>Follow Prophet Muhammad's wisdom: "The most superior among you are those who learn and teach the Quran." [Sahih Bukhari Volume 6, Book 61, Number 545] Embrace this noble path of spiritual growth through Quranic learning and sharing.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="card text-center">
              <img src="istockphoto-623955570-612x612.jpg" className="card-img-top" alt="Your Card Title 4" />
              <div className="card-body">
                <h2 className={`${styles.secondSectionCardTitle}`}>A Lifelong Journey with the Quran</h2>
                <p className={styles.secondSectionCardText}>Embrace the Quran as a lifelong companion, reading, reflecting, and internalizing its teachings for a fulfilling life. Its great reward in the Hereafter awaits; let its timeless guidance bring enduring peace to your soul's transformative journey.</p>
              </div>
            </div>
          </div>
        </div>


</section>

<section className={styles.thirdSection}>
<h1>Meet Our Quran Tutors</h1>
<p className={styles.thirdSectionP}>We take pride in introducing our dedicated team of Quran tutors who hail from various parts of the world. Our carefully selected instructors possess expertise in Quran Tajweed, Quran Recitation, Arabic Grammar, Fiqh, and Hadith Courses. Whether you prefer a male or female Quran tutor, our online Madrassa ensures a diverse and qualified faculty for your learning needs.</p>

<p className={styles.thirdSectionP}>When it comes to hiring Quran Teachers/Tutors, we uphold stringent criteria to guarantee the highest quality of education. Our tutors are:</p>
<p className={styles.thirdSectionList}><strong>1. Graduates from recognized Institutes, Jaamias, or Universities:</strong> Our instructors hold degrees from prestigious educational institutions.</p>
<p className={styles.thirdSectionList}><strong>2. Experts in Quran & Tajweed:</strong> Mastery in Quranic studies and Tajweed is a fundamental qualification for our tutors.</p>
<p className={styles.thirdSectionList}><strong>3. Equipped with Training & Teaching Skills:</strong> Our instructors have undergone specialized training to enhance their teaching abilities.</p>
<p className={styles.thirdSectionList}><strong>4. Possess a Friendly & Approachable Nature:</strong> Creating a positive and supportive learning environment is a priority for our tutors.</p>

<p className={styles.thirdSectionP}>These qualifications are not just preferences but prerequisites for our esteemed teachers. Additionally, we are proud to have a panel of “make-shift Instructors” from diverse regions such as Egypt, Jordan, Pakistan, and Saudi Arabia. Our qualified instructors are proficient in teaching in various languages, including Arabic, English, Urdu, Pashto, and Hindi, ensuring that you can learn the Quran in your preferred language.</p>

<p className={styles.thirdSectionP}>At our online Madrassa, we go beyond qualifications. Our curriculum is designed to provide a comprehensive understanding of the Quran, and our teaching methods focus on fostering a deep connection with the sacred text. We also offer additional services, such as personalized learning plans, interactive sessions, and continuous support to enhance your learning experience.</p>

             <Teacher/>
</section>

    <section className={styles.fourthSection}>
    <div className={styles.card}>
  <h1 className={styles.heading}>How to Join Us?</h1>
  <p className={styles.text}>
    If you're eager to start your Quranic learning journey online, guided by the grace of Allah Almighty, follow these simple steps:
  </p>
  <ol className={styles.fourthSectionList}>
    <li>Complete a straightforward registration form.</li>
    <li>Select the Quran course/courses aligned with your learning goals.</li>
    <li>Choose convenient days and times for personalized one-to-one classes.</li>
    <li>Specify your preferred language for instruction.</li>
    <li>Finalize the registration process.</li>
  </ol>
</div>

<div className={styles.card}>
  <h1 className={styles.heading}>Why Choose Us?</h1>
  <p className={styles.text}>
    At [Your Institution's Name], we offer more than just Quranic education. Here's why you should choose us:
  </p>
  <ul className={styles.fourthSectionList}>
    <li>Qualified and experienced instructors dedicated to your learning success.</li>
    <li>Flexible schedules to accommodate your busy lifestyle.</li>
    <li>Interactive and engaging one-to-one classes for personalized attention.</li>
    <li>Comprehensive courses suitable for beginners and advanced learners alike.</li>
    <li>Continual support and guidance throughout your learning journey.</li>
  </ul>
  <p className={styles.text}>
    Join us and experience a holistic approach to Quranic education that goes beyond the curriculum, fostering a deeper connection with the sacred teachings.
  </p>
</div>


    </section>

    </>
  );
};

export default About;
