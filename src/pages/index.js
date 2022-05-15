import React, { Component } from 'react'
import WOW from 'wowjs';

export default class Index extends Component {
    // Defining WOW 
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div>
                {/* section 1  */}
                <div className="home-div-wrapper position-relative">
                    <div className="images-abso-home">
                        <img src={require('../assets/images/Asset 1.png')} className="h-shape-1" alt="image" />
                        <img src={require('../assets/images/Asset 2.png')} className="h-shape-2" alt="image" />
                        <img src={require('../assets/images/Assets 3.png')} className="h-shape-3" alt="image" />
                        <img src={require('../assets/images/Assets 4.png')} className="h-shape-4" alt="image" />
                        <img src={require('../assets/images/Graphic 1 2.png')} className="h-shape-3" alt="image" />
                        <img src={require('../assets/images/Vector Smart Object21 1.png')} className="h-graphich1 wow shake" data-wow-delay="0.5s" alt="image" />
                    </div>
                    <div className="container">
                        <div className="section-one position-relative">
                            <div className="first-text-wrapper">
                                <div className="headding-first">
                                    <div className="row">
                                        <div className="col-md-6"></div>
                                        <div className="col-md-6  wow fadeInRight center" data-wow-duration="2s" data-wow-delay="0s">
                                            <h1 className="font-56 color-black w-500 mr-top-h">Mendleson Communication and Engagement</h1>
                                            <p className="font-18 color-2c w-400 padding-t-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                {/* section 2 */}
                <div className="section-2 position-relative">
                    <div className="container">
                        <div className="padding-50">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <div className="about-div-image wow fadeInLeft center" data-wow-duration="2s" data-wow-delay="0s" >
                                        <img src={require('../assets/images/about us 1.png')} className="padding-t-5" alt="image" />
                                    </div>
                                </div>
                                <div className="col-md-7 wow fadeInRight center" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="main-headding">
                                        <p className="w-500 font-48 color-black">ABOUT US</p>
                                        <div className="border-for-headding"></div>
                                    </div>
                                    <div className="detail-text-s2">
                                        <p className="font-18 color-2c w-400 padding-t-5">We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src={require('../assets/images/Enagagement icon 1.png')} className="padding-t-5" alt="image" />
                                                <p className="font-24 color-black w-500 padding-t-5">Engagement</p>
                                                <p className="font-18 color-2c w-400 ">We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.<a href="" className="color-2c"> READ MORE</a></p>
                                            </div>
                                            <div className="col-md-6">
                                                <img src={require('../assets/images/coomunication icon 1.png')} className="padding-t-5" alt="image" />
                                                <p className="font-24 color-black w-500 padding-t-5">Communications</p>
                                                <p className="font-18 color-2c w-400 ">We are award-winning leaders in communications and campaign management.<a href="" className="color-2c"> READ MORE</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 3 */}
                <div className="section-3 position-relative">
                    <img src={require('../assets/images/Asset 5 1.png')} className="first-service-abso" alt="image" />
                    <img src={require('../assets/images/Asset 6 1.png')} className="second-service-abso" alt="image" />
                    <img src={require('../assets/images/Asset 7 1.png')} className="third-service-abso" alt="image" />
                    <img src={require('../assets/images/Asset 8 2.png')} className="forth-service-abso" alt="image" />
                    <div className="container">
                        <div className="padding-50">
                            <div className="row">
                                <div className="col-md-5"></div>
                                <div className="col-md-2">
                                    <div className="headding-center ">
                                        <div className="main-headding wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                                            <p className="w-500 font-48 color-black">SERVICES</p>
                                            <div className="border-for-headding"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5"></div>
                            </div>
                            <div className="div-service ">
                                <div className="row align-items-center rev-row">
                                    <div className="col-md-6 t-r wow fadeInLeft center" data-wow-duration="2s" data-wow-delay="0.3s" >
                                        <p className="w-500 font-42 color-black">Engagement</p>
                                        <p className="w-400 font-16 color-2c">We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-5 wow fadeInRight center" data-wow-duration="2s" data-wow-delay="0s">
                                        <img src={require('../assets/images/Engagement vector 1.png')} alt="image" />
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-6 wow fadeInLeft center" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <img src={require('../assets/images/Coominucation vector 1.png')} alt="image" />
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-5 wow fadeInRight center" data-wow-duration="2s" data-wow-delay="0s">
                                        <p className="w-500 font-42 color-black">Communications</p>
                                        <p className="w-400 font-16 color-2c">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. </p>
                                    </div>
                                </div>
                                <div className="row align-items-center rev-row">
                                    <div className="col-md-6 t-r wow fadeInLeft center" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <p className="w-500 font-42 color-black">facilitation</p>
                                        <p className="w-400 font-16 color-2c">We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-5 wow fadeInRight center" data-wow-duration="2s" data-wow-delay="0s">
                                        <img src={require('../assets/images/facilation vector 1.png')} alt="image" />
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-6 wow fadeInLeft center" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <img src={require('../assets/images/Consultation vector 1.png')} alt="image" />
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-5 wow fadeInRight center" data-wow-duration="2s" data-wow-delay="0s">
                                        <p className="w-500 font-42 color-black">Consultation and Research</p>
                                        <p className="w-400 font-16 color-2c">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. </p>
                                    </div>
                                </div>
                                <div className="row align-items-center position-relative rev-row">
                                    <div className="col-md-6 t-r wow fadeInLeft center" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <p className="w-500 font-42 color-black">Traning & Mentoring</p>
                                        <p className="w-400 font-16 color-2c">We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-5 wow fadeInRight center" data-wow-duration="2s" data-wow-delay="0s">
                                        <img src={require('../assets/images/Training and vector 1.png')} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 4 */}
                <div className="section-4 position-relative">
                    <img src={require('../assets/images/Asset 5 2.png')} className="team-abso" alt="image" />
                    <div className="container">
                        <div className="padding-50">
                            <div className="row">
                                <div className="col-md-5"></div>
                                <div className="col-md-4">
                                    <div className="headding-center ">
                                        <div className="main-headding wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                                            <p className="w-500 font-48 color-black">OUR TEAM</p>
                                            <div className="border-for-headding"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="our-team-div">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                        <div className="team-div-wrapper wow pulse" data-wow-duration="2s" data-wow-delay="0s">
                                            <a href=""><img src={require('../assets/images/Person 1 img 1.png')} className="padding-t-5" alt="image" /></a>
                                            <p className="font-22 color-2c w-400 padding-t-5">Jessica D’suza</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="team-div-wrapper wow pulse" data-wow-duration="2s" data-wow-delay="0.2s">
                                            <a href=""><img src={require('../assets/images/Person 2 img 1.png')} className="padding-t-5" alt="image" /></a>
                                            <p className="font-22 color-2c w-400 padding-t-5">Johny Williams</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="team-div-wrapper wow pulse" data-wow-duration="2s" data-wow-delay="0.4s">
                                            <a href=""><img src={require('../assets/images/Person 3 img 1.png')} className="padding-t-5" alt="image" /></a>
                                            <p className="font-22 color-2c w-400 padding-t-5">Sanya R,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 5 */}
                <div className="section-5 position-relative">
                    <img src={require('../assets/images/Asset 8 3.png')} className="project-abso" alt="image" />
                    <div className="container">
                        <div className="padding-50">
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-5">
                                    <div className="headding-center ">
                                        <div className="main-headding wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                                            <p className="w-500 font-48 color-black" >OUR PROJECTS</p>
                                            <div className="border-for-headding"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="our-project-div">
                                <div className="row">
                                    <div className="col-md-6 wow fadeInLeft center" data-wow-duration="2s" data-wow-delay="0s">
                                        <img src={require('../assets/images/Our Project_ 1 img 1.png')} className="padding-t-5" alt="image" />
                                    </div>
                                    <div className="col-md-6 wow fadeInRight center" data-wow-duration="2s" data-wow-delay="0.2s">
                                        <div className="content position-relative">
                                            <div class="content-overlay"></div>
                                            <img src={require('../assets/images/Our Project _ 2 img 1.png')} className="padding-t-5-m" alt="image" />
                                            <div class="content-details fadeIn-bottom">
                                                <h3 class="content-title color-white w-500 font-42">project name</h3>
                                            </div>
                                        </div>
                                        <div className="content position-relative">
                                            <div class="content-overlay"></div>
                                            <img src={require('../assets/images/Our Project_ 3 img 1.png')} className="padding-t-5-m" alt="image" />
                                            <div class="content-details fadeIn-bottom">
                                                <h3 class="content-title color-white w-500 font-42">project name</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 6 */}
                <div className="section-6 position-relative">
                    <img src={require('../assets/images/Assets 9 1.png')} className="client-abso" alt="image" />
                    <div className="container">
                        <div className="padding-50">
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-5">
                                    <div className="headding-center ">
                                        <div className="main-headding wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s" >
                                            <p className="w-500 font-48 color-black">OUR CLIENTS</p>
                                            <div className="border-for-headding"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="our-client-div text-center">
                                <div className="wrapper-client">
                                    <a href="" className="wow rubberBand" data-wow-duration="2s"><img src={require('../assets/images/Layer 19.png')} className="padding-t-5" alt="image" /></a>
                                    <a href="" className="wow rubberBand" data-wow-duration="2s" ><img src={require('../assets/images/Layer 20.png')} className="padding-t-5" alt="image" /></a>
                                    <a href="" className="wow rubberBand" data-wow-duration="2s" ><img src={require('../assets/images/1280px-Brigitte-Logo.png')} className="padding-t-5" alt="image" /></a>
                                    <a href="" className="wow rubberBand" data-wow-duration="2s" ><img src={require('../assets/images/Layer 22.png')} className="padding-t-5" alt="image" /></a>
                                    <a href="" className="wow rubberBand" data-wow-duration="2s" ><img src={require('../assets/images/BHP_2017_logo.png')} className="padding-t-5" alt="image" /></a>
                                    <a href="" className="wow rubberBand" data-wow-duration="2s" ><img src={require('../assets/images/Layer 21.png')} className="padding-t-5" alt="image" /></a>
                                    <a href="" className="wow rubberBand" data-wow-duration="2s" ><img src={require('../assets/images/Layer 23.png')} className="padding-t-5" alt="image" /></a>
                                    <a href="" className="wow rubberBand" data-wow-duration="2s" ><img src={require('../assets/images/Layer 24.png')} className="padding-t-5" alt="image" /></a>
                                    <a href="" className="wow rubberBand" data-wow-duration="2s" ><img src={require('../assets/images/MelbourneWaterLogo-1024x282.png')} className="padding-t-5" alt="image" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
