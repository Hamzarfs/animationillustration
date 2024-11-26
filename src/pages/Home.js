import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/header';
import '../App.css'

const Home = () => {
    return (
        
        <div>
            <Header/>
            <h1>Home Page</h1>
            <p>Welcome to our website!</p>
            <Link to="/about">Go to About Us</Link>
        </div>
    );
};

export default Home;
