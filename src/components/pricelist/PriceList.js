import React from 'react';
import './PriceList.css'

export default function PriceList() {
    return(
        <section className="section-pricelist" id='pricelist'>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="header-section">
                            <h2 className="title">Daftar Harga</h2>
                            {/* <p className="description">"Tangkap kenangan yang akan bertahan seumur hidup dengan layanan studio foto profesional kami."</p> */}
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center text-center'>
                    <div className='pricelist-content'>
                        <button>Unduh Daftar Harga</button>
                    </div>
                </div>
            </div>
        </section>
    );
}