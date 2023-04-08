import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav
} from 'mdb-react-ui-kit';
import { Link } from "react-scroll";
import './Navbar.css';
import { useEffect } from 'react';
import logo from '../../images/fascio.png'
import scrollElement from 'react-scroll/modules/mixins/scroll-element';

export default function Navbar() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const [backColor, setBackColor] = useState('transparent');
  
  const listenScrollEvent = e => {
    if (window.scrollY > 50) {
        setBackColor('dark');
    } else {
        setBackColor('transparent');
    }
  };

  const ShowNavNoTogglerSecond = e => {
    setShowNavNoTogglerSecond(!showNavNoTogglerSecond)

    if (showNavNoTogglerSecond) {
        setBackColor('transparent');
    }else {
        setBackColor('dark');
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const handleClickScroll = (props) => {
    console.log(props)
    const element = document.getElementById(props);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>      
        <MDBNavbar dark bgColor={backColor} expand="lg" fixed="top" className='navbar-parent'>
        <MDBContainer fluid>
          <MDBNavbarBrand className='brand-name' href='#'>
            <img src={logo} alt="logo"/>
          </MDBNavbarBrand>
            <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => ShowNavNoTogglerSecond()}
            >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav right fullWidth={false} className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#home'>
                    Beranda
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#services'>
                    Layanan
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#gallery'>
                    Galeri
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#pricelist'>
                    Harga
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#contact-us'>
                    Hubungi
                </MDBNavbarLink>
                </MDBNavbarItem>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
    </>
  );
}