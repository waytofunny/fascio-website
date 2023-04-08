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
                                    <i className="fa fa-camera" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className='caption'>
                                <h3 className="title">Photo</h3>
                                <p className="description">Kami melayani jasa dokumentasi foto pernikahan, pre-wedding, lamaran, ulang tahun, wisuda dan momen berharga lain yang ingin Anda abadikan.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                    <i className="fa fa-video-camera" aria-hidden="true"></i>
                                </span>
                                <h3 className="title">Video</h3>
                                <p className="description">Selain Foto, kami juga melayani jasa dokumentasi dalam bentuk videografi untuk momen berharga maupun acara penting yang ingin Anda abadikan.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                    <i className="fab fa-artstation"></i>
                                </span>
                                <h3 className="title">Event</h3>
                                <p className="description">Selain acara pernikahan, kami juga melayani jasa dokumentasi untuk momen berharga di acara korporasi, institusi, maupun organisasi Anda.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}