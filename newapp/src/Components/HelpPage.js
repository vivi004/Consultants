
import React from 'react';
import styles from '../Css/HelpPage.css';

function HelpPage() {
  return (
    <div className={styles.container}>
   
      <main className={styles.main}>
        <section className={styles.faq} id="faq">
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <dl>
            <dt>What is the purpose of this page?</dt>
            <dd>This page is dedicated to providing helpful information to overseas consultants.</dd>
            <dt>How do I contact support?</dt>
            <dd>You can reach us via email at <a href="mailto:support@example.com">support@example.com</a> or by phone at +1 (123) 456-7890.</dd>
          </dl>
        </section>
        <section className={styles.contact} id="contact">
          <h2 className={styles.title}>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button>Send</button>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Copyright © 2024 Overseas Consultants. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HelpPage;

