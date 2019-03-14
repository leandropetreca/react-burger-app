import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrower from '../../components/Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.scss';

class Layout extends Component{

    state = {
        showSideDrawer: false
    }

    SideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    SideDrawerToggleHandler = () => {
     
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
       
    }


    render () {
        return (

            <Aux>
                <Toolbar toggleSideDrawer={this.SideDrawerToggleHandler} />
                <SideDrower open={this.state.showSideDrawer} closed={this.SideDrawerCloseHandler} />         
            <main className={styles.Content}>
                {this.props.children}
            </main>

            </Aux>
        )
            
    }
} 
export default Layout