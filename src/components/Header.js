import React from 'react'

import image from '../Images/bank.png';
import {Link} from 'react-router-dom';

const First = () => {
    return (
        <section className='header'>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-md-6'>
                        <div className="text">
                            {/* <h1>Welcome to Spark Bank of India</h1> */}
                            <h1>Money transfer got Quick $ Easy </h1>
                            <p className="para">Fastest way to transfer monay</p>

                        </div>
                    </div>
                    <div className='col-md-6 '>
                        <img className="Image" src={image} ></img>
                    </div>

                </div>
            </div>
            
            <section>
            {/* <h3 className="middle-heading">Our Facilities</h3> */}
            <div class="page-wrapper">
                <div class="custom-modal">
                    <div class="succes succes-animation icon-top"><i class="fa fa-user"></i></div>
                    <div class="succes border-bottom"></div>
                    <div class="content">
                        <Link to="/customers"><p class="type">Customers</p></Link>
                        <p class="message-type">List of customers</p>
                    </div>
                </div>
                <div class="custom-modal">
                    <div class="succes succes-animation icon-top"><i class="fa fa-money-bill-transfer"></i></div>
                    <div class="succes border-bottom"></div>
                    <div class="content">
                        <Link to="/credit"><p class="type">Transfer Money</p></Link>
                        <p class="message-type">Money transfer can<br/>be done</p>
                        
                    </div>
                </div>
                <div class="custom-modal">
                    <div class="succes succes-animation icon-top"><i class="fa fa-list"></i></div>
                    <div class="succes border-bottom"></div>
                    <div class="content">
                    <Link to="/transactions"><p class="type">ledger</p></Link>
                        <p class="message-type">All transactions are displayed</p>
                    </div>
                </div>

            </div>
            </section>
        </section>



    )
}

export default First;

