import React from 'react';
import styles from './Button.module.scss'

const button = (props) => (
    
    

  <button 
    onClick={props.clicked}
    className={[styles.button, styles[props.btnType]].join(' ')}
    >{props.children}</button>  
);

export default button