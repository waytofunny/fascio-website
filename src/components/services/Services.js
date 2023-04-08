import React from 'react';
import './Services.css';

export default function Services() {
    return(
        <section className="section-services" id='services'>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="header-section">
                            <h2 className="title">Layanan</h2>
                            <p className="description">"Tangkap kenangan yang akan bertahan seumur hidup dengan layanan studio foto profesional kami."</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                    <i class="fa fa-camera" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className='caption'>
                                <h3 className="title">Photo</h3>
                                <p className="description">Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                    <i class="fa fa-video-camera" aria-hidden="true"></i>
                                </span>
                                <h3 className="title">Video</h3>
                                <p className="description">Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                    <i className="fab fa-artstation"></i>
                                </span>
                                <h3 className="title">Many Event</h3>
                                <p className="description">Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}