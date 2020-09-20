import React from 'react';
import styles from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import fadeListStyles from '../../animationStyles/list.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/actions';

const ContactList = () => {
  const dispatch = useDispatch();
  const {
    contacts: { items, filter },
  } = useSelector(state => state);

  const filterContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <TransitionGroup component="ul">
      {filterContacts.map(({ id, name, number }) => (
        <CSSTransition key={id} classNames={fadeListStyles} timeout={250}>
          <li className={styles.item}>
            <p className={styles.itemText}>
              {name}: {number}
            </p>

            <button
              className={styles.button}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
