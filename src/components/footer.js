import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="padding-50">
                    <div className="width-men wow fadeInUp"  data-wow-duration="2s">
                        <div className="footer" >
                            <div className="footer-wrapper">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="footer-first">
                                            <ul>
                                                <p className="font-16 color-black w-700">Social</p>
                                            </ul>
                                            <li><a href="" className="font-14 color-2c"><img src={require('../assets/images/facebook 1.png')} alt="image" />Facebook </a></li>
                                            <li><a href="" className="font-14 color-2c"><img src={require('../assets/images/linkedin 1.png')} alt="image" />Linkedin</a></li>
                                            <li><a href="" className="font-14 color-2c"><img src={require('../assets/images/Group 20.png')} alt="image" />Google +</a></li>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="footer-first">

                                            <p className="font-16 color-black w-700">Explore</p>

                                            <li><a href="" className="font-14 color-2c"> Services</a></li>
                                            <li><a href="" className="font-14 color-2c">Team </a></li>
                                            <li><a href="" className="font-14 color-2c">Clients</a></li>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="footer-first">

                                            <p className="font-16 color-black w-700">Contact</p>

                                            <p className="font-14 color-2c">Lorem Ipsum dummy address<br /> used for display <br />1234567890 </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="footer-first">

                                            <p className="font-16 color-black w-700">Email</p>

                                            <li><a href="" className="font-14 color-2c">mendlesoncommunication@email.com </a></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="copyrite text-center padding-t-5 ">
                                <p className="font-14 color-black w-400 ">© Copyright 2018 Mendleson Communication Pty Ltd </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
