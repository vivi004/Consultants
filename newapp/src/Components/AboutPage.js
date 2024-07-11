
import React from 'react';
import styles from '../Css/AboutPage.css';
import Image1 from '../Assets/Images/twog.png';
import Image2 from '../Assets/Images/new.png';
import Image3 from '../Assets/Images/two.png';

function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#our-mission">Our Mission</a></li>
            <li><a href="#our-team">Our Team</a></li>
            <li><a href="#our-values">Our Values</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.aboutUs} id="about-us">
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.paragraph}>
            Welcome to Overseas Consultants, your trusted partner for international consulting services. Our team of experts has years of experience in providing top-notch consulting services to clients worldwide.
          </p>
          <img src={Image1} alt="About" />
        </section>
        <section className={styles.ourMission} id="our-mission">
          <h2 className={styles.title}>Our Mission</h2>
          <p className={styles.paragraph}>
            Our mission is to provide innovative and practical solutions to our clients, helping them succeed in their international endeavors. We are committed to delivering exceptional service, building long-term relationships, and making a positive impact on our clients' businesses.
          </p>
          <img src={Image2} alt="Our " />
        </section>
        <section className={styles.ourTeam} id="our-team">
          <h2 className={styles.title}>Our Team</h2>
          <ul className={styles.team}>
            <li>
              <img src={Image3} alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </li>
            <li>
              <img src={Image3} alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>CTO & Co-Founder</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </li>
            <li>
              <img src={Image3} alt="Team Member 3" />
              <h3>Bob Johnson</h3>
              <p>Director of Operations</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </li>
          </ul>
        </section>
        <section className={styles.ourValues} id="our-values">
          <h2 className={styles.title}>Our Values</h2>
          <ul className={styles.values}>
            <li>Excellence: We strive for exceptional quality in everything we do.</li>
            <li>Integrity: We operate with transparency, honesty, and ethical standards.</li>
            <li>Collaboration: We believe in teamwork and partnerships to achieve common goals.</li>
            <li>Innovation: We embrace creativity and innovation to drive growth and success.</li>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Copyright © 2024 Overseas Consultants. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;

