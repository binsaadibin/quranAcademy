import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopHeader from './components/header/topheader/TopHeader.jsx';
import MainHeader from './components/header/MainHeader.jsx';
import Footer from './components/footer/Footer.jsx';
import Contact from './components/contact/Contact.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Service from './components/services/Service.jsx';
import Course from './components/courses/Course.jsx';
import Download from './components/download/Download.jsx';
import Login from './components/login/Login.jsx';
import Payment from './components/payment/Payment.jsx';
import Register from './components/register/Register.jsx';
import BottomFooter from './components/footer/BtmFooter.jsx';
import Kids from './components/home/registerPagesOFHome/kids/Kids.jsx';
import OnlineQuranClasses from './components/home/registerPagesOFHome/adults/Adults.jsx';
function App() {
  return (
    <div>
    <BrowserRouter>
        <TopHeader />
        <MainHeader />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/course" element={<Course />} />
          <Route path="/download" element={<Download />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/adults" element={<OnlineQuranClasses />} />
        </Routes>
        <Footer />
        <BottomFooter/>
    </BrowserRouter>
    </div>
  );
}

export default App;

