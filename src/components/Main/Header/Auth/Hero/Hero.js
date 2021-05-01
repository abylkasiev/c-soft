import React from 'react';

const Hero = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <button onClick={handleLogout}>Выйти</button>
            </nav>
        </section>
    );
};

export default Hero;