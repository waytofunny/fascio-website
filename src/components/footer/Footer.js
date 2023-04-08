import React from 'react';
import './Footer.css'
import logo from '../../images/fascio.png'

export default function Footer() {
    var currentTime = new Date()
    var year = currentTime.getFullYear()

    return(
        <footer className="footer-section">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <a style={{color:'#757575'}} href='https://goo.gl/maps/Lbeff5ToJBnzjY4x5'>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text map-position">
                                        <h4>Find us</h4>
                                        <span>Fascio Maps </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>+6285640007695</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>fasciophotography@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html"><img src={logo} className="img-fluid" alt="logo"/></a>
                                </div>
                                <div className="footer-text">
                                    <p>Masuklah ke studio foto kami dan biarkan fotografer ahli kami menangkap esensi Anda dengan sentuhan kreatif dan presisi teknis, menghasilkan gambar yang memukau yang akan bertahan seumur hidup. Dengan peralatan berteknologi tinggi dan lingkungan yang nyaman dan ramah, studio kami adalah pengaturan yang sempurna untuk mewujudkan visi fotografi Anda.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="https://www.instagram.com/fasciophoto/"><i className="fab fa-instagram facebook-bg"></i></a>
                                    <a href="https://twitter.com/wtstomi"><i className="fab fa-twitter twitter-bg"></i></a>
                                    <a href="mailto:fasciophotography@gmail.com"><i className="fab fa-google-plus-g google-bg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Menu</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#gallery">Gallery</a></li>
                                    <li><a href="#pricelist">Price List</a></li>
                                    <li><a href="#contact-us">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Langganan</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Jangan lewatkan untuk berlangganan umpan berita baru kami, silakan isi formulir di bawah ini.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address"/>
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; {year}, All Right Reserved <a href="https://www.instagram.com/debvjalanan/">debujalanan</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}