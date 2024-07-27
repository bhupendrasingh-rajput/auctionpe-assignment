import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleSessionStart = () => {
        navigate('/session');
    }
    return (
        <div className='home'>
            <h1>Welcome to the AuctionPe!</h1>
            <button onClick={handleSessionStart}>Click to go on Session Page</button>
        </div>
    )
}

export default Home;