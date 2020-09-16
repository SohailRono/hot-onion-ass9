import React from 'react';
import bgImg from '../../images/bannerbackground.png';

const sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${bgImg})`,
  };

const Banner = () => {
    return (
        <div class="card" style={sectionStyle}>
            <div class="card-body">
                <h1>Best food waiting for your belly</h1>
            </div>
        </div>
    );
};

export default Banner;