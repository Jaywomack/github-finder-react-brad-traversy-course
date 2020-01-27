import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from '../src/components/layout/Navbar';
import UserItem from './components/layout/users/UserItem';

class App extends Component {
    // foo = () => 'Bar'
    render() {
        // const name = 'John Doe';
        // const loading = false;
        // const showName = false;

        return (
            <Fragment>
                <Navbar />
                <UserItem />
            </Fragment>
        );
    }
}

export default App;
