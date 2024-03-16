import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './home.module.css';
import Tasmia from '../header/topheader/Tasmia';
import AsmaUlHosna from '../header/topheader/AsmaUlHosna';
import { Link } from 'react-router-dom';
import Teacher from './teachers/Teacher';

function HomePage() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="how-to-spiritually-prepare-for-motherhood-banner-1.png" className={`d-block w-100 ${styles.img}`} alt="Carousel Slide 1" />
      <div className={`${styles.overlay} carousel-caption d-sm-block d-md-block`}>
        {/* <div className={styles.tasmia}><Tasmia /></div> */}
        <h5  className={styles.carousleH5}> BIN SAADI ONLINE QURAN ACADEMY</h5>
        <h1 className={styles.carousleH1}>Online Quran Classes</h1>
        <p className={styles.carouslePeragraph}>When faced with overwhelming challenges, take a step back and reflect on the positive aspects of your life instead.</p>
        <button className={`btn btn-primary ${styles.carousleButton}`}>Get Admission now</button>
      </div>
    </div>

    <div className="carousel-item">
      <img src="Is-Ruqyah-with-unclear-words-permitted_.jpg" className={`d-block w-100 ${styles.img}`} alt="Carousel Slide 2" />
      <div className={`${styles.overlay} carousel-caption d-sm-block d-md-block`}>
        <div className={styles.tasmia}><Tasmia /></div>
        <h5  className={styles.carousleH5}> BIN SAADI ONLINE QURAN ACADEMY</h5>
        <h1 className={styles.carousleH1}>Expert Tutors</h1>
        <p className={styles.carouslePeragraph}>We facilitate easy Quran learning for everyone. View our packages for more information.</p>
        <button className={`btn btn-primary ${styles.carousleButton}`}>View Our Packages</button>
      </div>
    </div>

    <div className="carousel-item">
      <img src="slider_005_1200x.webp" className={`d-block w-100 ${styles.img}`} alt="Carousel Slide 3" />
      <div className={`${styles.overlay} carousel-caption d-sm-block d-md-block`}>
        <div className={styles.tasmia}><Tasmia /></div>
        <h5  className={styles.carousleH5}> BIN SAADI ONLINE QURAN ACADEMY</h5>
        <h1 className={styles.carousleH1}>Learn and Teach Quran</h1>
        <p className={styles.carouslePeragraph}>The finest among you is the individual who learns the Holy Quran and imparts its knowledge to others.</p>
        <button className={`btn btn-primary ${styles.carousleButton}`}>Contact Us</button>
      </div>
    </div>

    <div className="carousel-item">
      <img src="AdobeStock_332447389-1200x400.webp" className={`d-block w-100 ${styles.img}`} alt="Carousel Slide 4" />
      <div className={`${styles.overlay} carousel-caption d-sm-block d-md-block`}>
        <div className={styles.tasmia}><Tasmia /></div>
        <h5 className={styles.carousleH5}> BIN SAADI ONLINE QURAN ACADEMY</h5>
        <h1 className={styles.carousleH1}>We Offer The best</h1>
        <p className={styles.carouslePeragraph}>Stay connected with Bin Saadi and gain the privilege of learning and sharing that knowledge with others.</p>
        <button className={`btn btn-primary ${styles.carousleButton}`}>Feel free to ask.</button>
      </div>
    </div>

  </div>
</div>
        {/* First Section with Four Cards */}
 <section>
  <div>
    <h1 className={styles.secHeading}>Bin Saadi Online Quran academy</h1>
   <center> <img src="underline-blue-300x28.png bg-black" alt="" /></center>
    <p className={styles.secPeragraph}>Bin Saadi Online Quran Academy stands out as a premier institution dedicated to providing top-notch Quranic education. Recognizing the aspirations of parents to impart the best knowledge to their children, our academy focuses on instilling a profound understanding of the Holy Book of Allah SWT. Our commitment is to empower individuals for success in this life and the hereafter.
<br />
Our Online Academy offers Quranic courses tailored for kids, adults, males, females, and newly reverted Muslims. Specifically designed to create a joyful learning environment, our online Quran courses for children are facilitated by dedicated Arab and Non-Arab Quran teachers. You have the flexibility to interview multiple teachers and select the one that best suits your preferences. Embark on your journey of learning the Quran through personalized, one-on-one classes. In addition to Quranic studies, we provide instruction in Islamic courses, languages, and Noorani Qaida. Join us in the pursuit of comprehensive and enriching online education.</p>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-3 mb-4">
        <div className={`card ${styles.sec1Card}`}>
        <div><center><img src="icon-1-1-1-263x300.png" alt="" className={styles.sec1Cardimg}/></center></div>
          <div className="card-body text-center">
            <h2 className={`${styles.sec1Cardtitle}`}>One to One Online Quran Classes</h2>
            <p className={`card-text ${styles.sec1CardText}`}>
Enroll in personalized online Quran classes and gain knowledge from proficient instructors. Explore a complimentary demonstration and acquire education with the educators of your choice.</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-4">
        <div className={`card ${styles.sec1Card}`}>
        <div><center><img src="icon-2-1-263x300.png" alt="" className={styles.sec1Cardimg}/></center></div>
          <div className="card-body text-center">
            <h2 className={`card-title ${styles.sec1Cardtitle}`}>Take Quran Class atour Ease</h2>
            <p className={`card-text ${styles.sec1CardText}`}>Plan your Quran classes at your convenience. Bin Saadi Online Quran Academy is devising an improved schedule for e-Quran classes to cater to the needs of the students.</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-4">
        <div className={`card ${styles.sec1Card}`}>
        <div><center><img src="icon-3-1-263x300.png" alt="" className={styles.sec1Cardimg}/></center></div>
          <div className="card-body text-center">
            <h2 className={`card-title ${styles.sec1Cardtitle}`}>Qualified Online Quran Teachers</h2>
            <p className={`card-text ${styles.sec1CardText}`}>
We have a team of qualified Quran teachers. Learn the Quran online in the best way at discounted rates now! Join us to experience top-notch education with expert instructors.</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-4">
        <div className={`card ${styles.sec1Card}`}>
        <div><center><img src="icon-4-1-263x300.png" alt="" className={styles.sec1Cardimg}/></center></div>
          <div className="card-body text-center">
            <h2 className={`card-title ${styles.sec1Cardtitle}`}>Online Portal for Students</h2>
            <p className={`card-text ${styles.sec1CardText}`}>
We provide an online portal for student convenience. Access comprehensive information such as complete class history, schedules, fees, and invoices through our user-friendly platform.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      <section className={styles.second_section_poster}>
      <div className="container text-center">
        <h1 className={styles.second_section_1stHeading}>Bin Saadi Online Quran Academy Courses</h1>
        <img src="underline-blue-300x28.png" alt="underline" className="img-fluid" />
        <p className={`${styles.pera} text-dark`}>
        The Online Academy provides Quranic education tailored to various age groups, encompassing children, males, adults, recent converts, and females. Our diverse range of online courses includes Noorani Qaida designed for children, Quran Reading, Quranic Comprehension, Quran Memorization, Tajweed, Arabic, Urdu, Pashto, Islamic Studies, Quranic Exegesis (Tafsir), and Hadith.
        </p>
        <h1>Quran Classes for Kids, Adults, & Ladies</h1>
        <p className={`${styles.pera} text-dark`}>Embrace the enduring lessons of the Quran from the comfort of your own surroundings. Our dedicated online Quranic courses are crafted for children, adults, and women, featuring customized curricula adapted to their individual learning speeds and comprehension levels. Guarantee a personalized and enriching Quranic learning journey for everyone. Interactive, captivating, and imbued with profound insights, each curriculum is meticulously designed to cater to the distinctive requirements of learners. Join us and become a participant in this enlightening expedition. </p>

 <div className={`row ${styles.secondSectionRow}`}>
  <div className="col-md-4">
   <div className={`card ${styles.secondSec_rows_first_card}`}>
       <img src="fifthBBox1.png" alt="Quran Classes for Kids" className="card-img-top" />
      <div className="card-body">
         <p className={styles.second_section_poster_card_title}>Quran Classes for Kids</p>
      </div>
    </div>
 </div>

<div className={`col-md-8`}>
  <div className={`card ${styles.second_section_poster_first_card}`}>
    <h5>Quran Classes for Kids</h5>
    <ul>
      <li>
        <span>Captivating Syllabus:</span> Customized material featuring visuals, interactive exercises, and enjoyable quizzes to maintain the interest of young minds.
      </li>
      <li>
        <span>Stories from the Quran:</span> Narrate and discuss stories of the prophets and other key figures to make the learning process engaging and relatable.
      </li>
      <li>
        <span>Fundamental Tajweed Guidelines:</span> Present them in an enjoyable and easily comprehensible manner, perhaps incorporating rhymes or songs.
      </li>
      <li>
        <span>Brief Surahs:</span> Concentrate on concise chapters for the purpose of memorization and comprehension.
      </li>
      <li>
        <span>Adaptable Timetabling:</span> Take into account school hours and ensure lessons are concise to suit a child's attention span.
      </li>
      <li>
        <span>Prioritizing Safety:</span> A child-friendly platform with supervised interactions, guaranteeing a secure environment.
      </li>
    </ul>
   <Link to="kids"> <button className="btn btn-primary">Read more</button></Link>
  </div>
</div>
</div>


<div className={`row ${styles.secondSectionRow}`}>
  <div className="col-md-4">
   <div className={`card ${styles.secondSec_rows_first_card}`}>
       <img src="fifthBBox2.png" alt="Quran Classes for Kids" className="card-img-top" />
      <div className="card-body">
         <p className={styles.second_section_poster_card_title}>Quran Classes for Adults</p>
      </div>
    </div>
 </div>

<div className={`col-md-8`}>
  <div className={`card ${styles.second_section_poster_second_card}`}>
    <h5>Quran Classes for Adults</h5>
  
<ul>
    <li><span>Thorough Tajweed Instruction:</span> Concentrate on the accurate pronunciation and intonation rules for more advanced learners.</li>
    <li><span>Tafsir & Context:</span> Delve into the depth of the Quranic verses, understanding their historical context and contemporary relevance.</li>
    <li><span>Practical Life Lessons:</span> Extract and implement teachings from the Quran into daily life.</li>
    <li><span>Memorization Techniques:</span> Provide advanced techniques for those interested in Hifz (memorization of the entire Quran).</li>
    <li><span>Community Building:</span> Foster discussions and debates.</li>
    <li><span>Application in Life:</span> Examine the practical application of Quranic teachings in day-to-day life, addressing especially the issues and challenges faced by modern Muslim men.</li>
</ul>
    <Link to={"adults"}><button className="btn btn-primary">Read more</button></Link>
  </div>
</div>
</div>


<div className={`row ${styles.secondSectionRow}`}>
  <div className="col-md-4">
   <div className={`card ${styles.secondSec_rows_first_card}`}>
       <img src="fifthBox3.png" alt="Quran Classes for Kids" className="card-img-top" />
      <div className="card-body">
         <p className={styles.second_section_poster_card_title}>Quran Classes for Ladies</p>
      </div>
    </div>
 </div>

<div className={`col-md-8`}>
  <div className={`card ${styles.second_section_poster_second_card}`}>
    <h5>Quran Classes for Ladies</h5>
  

    <ul>
    <li><span>Tailored Tajweed Techniques:</span> Concentrate on the correct pronunciation and intonation rules for more advanced learners.</li>
    <li><span>Tafsir Relevant to Women:</span> Delve into the depth of the Quranic verses, understanding their historical context and contemporary relevance.</li>
    <li><span>Privacy Considerations:</span> Extracting and implementing teachings from the Quran in daily life.</li>
    <li><span>Adaptable Scheduling:</span> Provide advanced techniques for those interested in Hifz (memorization of the entire Quran).</li>
    <li><span>Sisterhood Development:</span> Foster discussions and debates.</li>
    <li><span>Application in Life:</span> Examine the practical application of Quranic teachings in day-to-day life, addressing especially the issues and challenges faced by modern Muslim women.</li>
</ul>
    <button className="btn btn-primary">Read more</button>
  </div>
</div>
</div>

        {/* Repeat the pattern for the other two sections */}
        
      </div>
    </section>

    <section><Teacher/></section>
    <section className={styles.fourth_box_poster}>
      <div className="container">
        <div className="row">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <center><img src="/header-icon-1-coloured-300x300.png" className="card-img-top" alt="Image 1" /></center>
              <div className="card-body">
                <h5 className={`card-title ${styles.h5}`}>REGISTER YOURSELF</h5>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <center><img src="/header-icon-2-coloured-300x300.png" className="card-img-top" alt="Image 2" /></center>
              <div className="card-body">
                <h5 className={`card-title ${styles.h5}`}>FREE TRIAL CLASSES</h5>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <center><img src="/header-icon-3-coloured-300x300.png" className="card-img-top" alt="Image 3" /></center>
              <div className="card-body">
                <h5 className={`card-title ${styles.h5}`}>CONTROL IN CLASSES</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className={styles.fifth_box_poster}>
      <div className="container text-center">
        <h1 className={styles.h1}>Latest For Our Blog</h1>
        <center><img src="/underline-blue-300x28.png" alt="picture" style={{ marginBottom: '20px' }} /></center>

        <div id="blogCarousel2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active" data-bs-slide-to="0">
          <div className="container">
            <div className="row ">
              {/* Card 1 */}
              <div className={`col-md-4 s1 ${styles.s1}`}>
                <div className={`card ${styles.card}`}>
                  <img src="/Al-Istikharah-400x250 (1).jpg" className="card-img-top" alt="Image 1" />
                  <div className="card-body">
                    <p className={`card-text ${styles.p}`}>Al Istikharah</p>
                    <h6 className={styles.h6}>Jun 2, 2022 | Blog</h6>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={`col-md-4 s1 ${styles.s1}`}>
                <div className={`card ${styles.card}`}>
                  <img src="/Month-of-Shawwal-400x250 (1).jpg" className="card-img-top" alt="Image 2" />
                  <div className="card-body">
                    <p className={`card-text ${styles.p}`}>Month of Shawwal</p>
                    <h6 className={styles.h6}>May 24, 2022 | Blog</h6>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={`col-md-4 s1 ${styles.s1}`}>
                <div className={`card ${styles.card}`}>
                  <img src="/what-is-Hajj-400x250.jpg" className="card-img-top" alt="Image 3" />
                  <div className="card-body">
                    <p className={`card-text ${styles.p}`}>What is Hajj?</p>
                    <h6 className={styles.h6}>May 24, 2022 | Blog</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}

        <div className="carousel-item" data-bs-slide-to="1">
          <div className="container">
            <div className="row">
              {/* Card 1 */}
              <div className={`col-md-4 s1 ${styles.s1}`}>
                <div className={`card ${styles.card}`}>
                  <img src="/Al-Istikharah-400x250 (1).jpg" className="card-img-top" alt="Image 1" />
                  <div className="card-body">
                    <p className={`card-text ${styles.p}`}>Al Istikharah</p>
                    <h6 className={styles.h6}>Jun 2, 2022 | Blog</h6>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={`col-md-4 s1 ${styles.s1}`}>
                <div className={`card ${styles.card}`}>
                  <img src="/Month-of-Shawwal-400x250 (1).jpg" className="card-img-top" alt="Image 2" />
                  <div className="card-body">
                    <p className={`card-text ${styles.p}`}>Month of Shawwal</p>
                    <h6 className={styles.h6}>May 24, 2022 | Blog</h6>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={`col-md-4 s1 ${styles.s1}`}>
                <div className={`card ${styles.card}`}>
                  <img src="/what-is-Hajj-400x250.jpg" className="card-img-top" alt="Image 3" />
                  <div className="card-body">
                    <p className={`card-text ${styles.p}`}>What is Hajj?</p>
                    <h6 className={styles.h6}>May 24, 2022 | Blog</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* Slide 3 */}


<div className="carousel-item" data-bs-slide-to="1">
          <div className="container">
            <div className="row">
              {/* Card 1 */}
              <div className={`col-md-4 s1 ${styles.s1}`}>
                <div className={`card ${styles.card}`}>
                  <img src="/Al-Istikharah-400x250 (1).jpg" className="card-img-top" alt="Image 1" />
                  <div className="card-body">
                    <p className={`card-text ${styles.p}`}>Al Istikharah</p>
                    <h6 className={styles.h6}>Jun 2, 2022 | Blog</h6>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={`col-md-4 s1 ${styles.s1}`}>
                <div className={`card ${styles.card}`}>
                  <img src="/Month-of-Shawwal-400x250 (1).jpg" className="card-img-top" alt="Image 2" />
                  <div className="card-body">
                    <p className={`card-text ${styles.p}`}>Month of Shawwal</p>
                    <h6 className={styles.h6}>May 24, 2022 | Blog</h6>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={`col-md-4 s1 ${styles.s1}`}>
                <div className={`card ${styles.card}`}>
                  <img src="/what-is-Hajj-400x250.jpg" className="card-img-top" alt="Image 3" />
                  <div className="card-body">
                    <p className={`card-text ${styles.p}`}>What is Hajj?</p>
                    <h6 className={styles.h6}>May 24, 2022 | Blog</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add additional slides similarly with different content */}
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#blogCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#blogCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
      {/* <AsmaulHusnaComponent/> */}
    </section>


    <section className={styles.sixth_box_poster}>
      <div className="container text-center">
        <h1 className={styles.h1}>Latest For Our Blog</h1>
        <center><img src="/underline-blue-300x28.png" alt="picture" style={{ marginBottom: '20px' }} /></center>

        <div id="blogCarousel2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000"> 
   <div className="carousel-inner">
    {/* Slide 1 */}
    <div className="carousel-item active">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            {/* Card 1 */}
            <div className="card">
              <img src="/Al-Istikharah-400x250 (1).jpg" className="card-img-top" alt="Image 1" />
              <div className="card-body">
                <p className="card-text">Al Istikharah</p>
                <h6>Jun 2, 2022 | Blog</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            {/* Card 2 */}
            <div className="card">
              <img src="/Month-of-Shawwal-400x250 (1).jpg" className="card-img-top" alt="Image 2" />
              <div className="card-body">
                <p className="card-text">Month of Shawwal</p>
                <h6>May 24, 2022 | Blog</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            {/* Card 3 */}
            <div className="card">
              <img src="/what-is-Hajj-400x250.jpg" className="card-img-top" alt="Image 3" />
              <div className="card-body">
                <p className="card-text">What is Hajj?</p>
                <h6>May 24, 2022 | Blog</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Add additional slides similarly with different content */}
  </div>

  {/* Carousel Controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#blogCarousel2" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#blogCarousel2" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      </div>
      {/* <AsmaulHusnaComponent/> */}
    </section>

<AsmaUlHosna/>
    </div>
  );
}

export default HomePage;
