import React from 'react';
import NavigationItem from './NavigarionItem/NavigationItem';
import styles from './NavigationItems.module.scss';

const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
)

export default navigationItems;