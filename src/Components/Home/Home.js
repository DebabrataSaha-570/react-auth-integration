import React from 'react';
import useAuth from '../Hooks/useAuth'
const Home = () => {
    const { user } = useAuth()
    return (
        <div >
            <h2>This is home component</h2>
            <h5>User: {user.displayName}</h5>

        </div>
    );
};

export default Home;