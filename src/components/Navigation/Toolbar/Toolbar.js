import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './Toolbar.module.scss';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (

    <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.toggleSideDrawer} />
        
        
        <div className={styles.Logo}>
            <Logo />
        </div>
        
        
        
        <nav className={styles.DesktopOnly}>
            <div className={styles.NavigationItens}>
                <NavigationItems />
            </div>
            
        </nav>


    </header>
);

export default toolbar