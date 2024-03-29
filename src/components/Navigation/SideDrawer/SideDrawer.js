import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {

    let attachedStyles = [styles.Sidedrawer, styles.Close];
    if (props.open) {
        attachedStyles =  [styles.Sidedrawer, styles.Open];
    }

    return (

        
        <Aux>

            <Backdrop show={props.open} clicked={props.closed}/>

            <div className={attachedStyles.join(' ')}>
            
            <div className={styles.Logo}>
                <Logo />
            </div>
            
                            
            <nav>
                <NavigationItems />
                
            </nav>

        </div>


        </Aux>
        

    );
}

export default sideDrawer;