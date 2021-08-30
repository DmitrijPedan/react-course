import React from 'react';
import classes from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {

  if (visible) {
    return (
      <div className={classes.wrapper} onClick={() => setVisible(false)}>
        <div className={classes.window} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  } else {
    return ''
  }
};

export default Modal;
