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
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center text-center'>
                    <div className='pricelist-content'>
                        <form 
                            action='https://wa.link/2ta1yt'
                            target='_blank'
                        >
                            <button type='submit'>Minta Daftar Harga</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}