import React from 'react';

function Home() {
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // height: 'calc(100vh - 64px)', // Adjust this value to align with Navbar's height
        minHeight: 'calc(100vh - 64px)', // Use minHeight instead of height
        backgroundColor: '#374151',
        color: '#FCD34D',
        fontSize: '2rem',
        fontWeight: 'bold',
    };

    return (
        <div style={divStyle}>
            Welcome to Dinnerator
    </div>
    );
}

export default Home;








