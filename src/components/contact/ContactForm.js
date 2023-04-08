import React from 'react';
import {
  MDBBtn
} from 'mdb-react-ui-kit';
import './ContactForm.css'

export default function ContactUs() {
    function handleSendMessage(){
        let message =document.getElementById("wa-message").value;
        let encodedMessage = encodeURI(message);
        window.open('https://api.whatsapp.com/send?phone=6289512216735' + '&text=' + encodedMessage, '_blank');
    }
    
  return (
    <section className="section-contact" id='contact-us'>
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-md-10 col-lg-8">
                    <div className="header-section">
                        <h2 className="title">Kontak Kami</h2>
                        <p className="description">"Tanya-tanya dulu boleh kak."</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className='col-md-5'>
                    <form>
                        <textarea className="form-control mb-4" rows="6" placeholder="MESSAGE" name="wa-message" id="wa-message" required></textarea>
                        <MDBBtn type='submit' onClick={()=> handleSendMessage()}>
                            Whatsapp Admin
                        </MDBBtn>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}