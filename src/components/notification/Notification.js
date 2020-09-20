import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Notification.module.css';
import fadeNotificationStyles from '../../animationStyles/fadeNotification.module.css';
import { CSSTransition } from 'react-transition-group';

const Notification = () => {
  const [show, setShow] = useState(false);
  const { errors } = useSelector(state => state);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, [errors]);

  return (
    <>
      {errors && (
        <CSSTransition
          in={show}
          classNames={fadeNotificationStyles}
          timeout={250}
          unmountOnExit
        >
          <div className={styles.notification}>{errors}</div>
        </CSSTransition>
      )}
    </>
  );
};

export default Notification;
