import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Layout from './layout/Layout';
import styles from './App.module.css';
import Notification from './notification/Notification';
import fadeStartListStales from '../animationStyles/logo.module.css';
import { useSelector } from 'react-redux';

function App() {
  const [showFilter, setShowFilter] = useState(false);

  const {
    contacts: { items },
  } = useSelector(state => state);

  useEffect(() => {
    if (items.length > 1) {
      setShowFilter(true);
    }
  }, []);

  useEffect(() => {
    if (items.length <= 1) {
      setShowFilter(false);
    }
  }, [items]);

  return (
    <Layout>
      <Notification />

      <div className={styles.box}>
        <ContactForm />
        <h2 className={styles.boxTitle}>Contacts</h2>

        <Filter showFilter={showFilter} />

        <CSSTransition
          in={true}
          appear={true}
          classNames={fadeStartListStales}
          timeout={250}
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </div>
    </Layout>
  );
}

export default App;
