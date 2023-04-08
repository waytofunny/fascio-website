import 'photoswipe/dist/photoswipe.css'
import React from 'react';

import { Gallery, Item } from 'react-photoswipe-gallery'
import './galer.css'

import image1 from '../../images/gallery/1.jpg'
import image2 from '../../images/gallery/2.jpg'
import image3 from '../../images/gallery/3.jpg'
import image4 from '../../images/gallery/4.jpg'
import image5 from '../../images/gallery/5.jpg'
import image6 from '../../images/gallery/6.jpg'
import image7 from '../../images/gallery/7.jpg'
import image8 from '../../images/gallery/8.jpg'
import image9 from '../../images/gallery/9.jpg'
import image10 from '../../images/gallery/10.jpg'
import image11 from '../../images/gallery/11.jpg'
import image12 from '../../images/gallery/12.jpg'

export default function GallerySection() {

  const imageGallery = [
    image1, image2,image3,image4,image5,image6,
    image7, image8,image9,image10,image11,image12
  ]

  return (
    <>
    <section className='gallery-section' id='gallery'>
      <div className='gallery-header'>
        <h1>Galeri</h1>
        <p>"Perjalanan indah hari pernikahanmu dapat diulang kembali melalui galeri foto pernikahan kami, di mana setiap momen yang terabadikan adalah kenangan yang dijaga selamanya."</p>
      </div>
      <div className='gallery-content'>
        <div  className='img-grid'>
          <Gallery>            
            {imageGallery.map((i, el) => {
              return <Item
                    key={el}
                    className='gallery-item'
                    original={i}
                    thumbnail={i}
                    alt="Photo of seashore by Folkert Gorter"
                  >
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src={i} />
                    )}
                </Item>
            })}
          </Gallery>
        </div>
      </div>
    </section>
    </>
  );
}