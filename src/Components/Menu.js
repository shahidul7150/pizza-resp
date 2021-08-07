import React from 'react';

const Menu = () => {
    return (
        <div className="about">
            <div className="container">
            <div className="row">
                
                <div className="col-6">
                <div className="about__img">
                    <img src="https://images.unsplash.com/photo-1617470703128-26a0fc9af10f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="Pizza" />
                </div>
                </div>
                <div className="col-6 p-25">
                <h3>The Pizza Menu</h3>
                <h1>CALIFORNIA <br /> THIN CRUST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit molestiae soluta assumenda earum eius laudantium vitae sapiente. Dolores, quas itaque expedita deleniti praesentium in.</p>

                <div className="about__btn">
                    <a href="" className="btn btn-smart">VIEW MORE</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Menu;