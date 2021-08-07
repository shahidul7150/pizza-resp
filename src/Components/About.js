import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="container">
            <div className="row">
                <div className="col-6 p-25">
                <h3>About Us</h3>
                <h1>WELCOME TO BADDPIZZA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit molestiae soluta assumenda earum eius laudantium vitae sapiente. Dolores, quas itaque expedita deleniti praesentium in.</p>

                <div className="about__btn">
                    <a href="" className="btn btn-smart">READ MORE</a>
                </div>
                </div>
                <div className="col-6">
                <div className="about__img">
                    <img src="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_960_720.jpg" alt="Pizza" />
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;