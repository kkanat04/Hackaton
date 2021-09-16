import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './About.css'
import { API } from './../Home/Home1/index';

const About = () => {

    const [name, setName]=useState([])

    const req = () => {
        axios.get(API)
        .then((data) => {
            console.log(data.data)
            setName(data.data.results)
        })
    }

    useEffect(() => {
        req()
    }, [])

    return (
        <div>
            <div className='about'>
                
                <h1>ABOUT</h1>

                <div className='about-img'>
                    <img className='about_img' src='https://cdn.shopify.com/s/files/1/1320/6057/files/530C6425-4733-40CA-AB30-114E816F1759_600x.JPG?v=1590587113' />
                    <img className='about_img' src='https://cdn.shopify.com/s/files/1/1320/6057/files/B2ECAEF1-EA48-4291-BA92-2AE04A807657_600x.JPG?v=1590587151' />
                </div>
                
                <div className='about-text'>
                    <p><span className='first-child'>BOUGUESSA</span> is a contemporary ready-to-wear label that aims to offer a minimalist wardrobe focused on clean cuts and impeccable <br /> details to strong sophisticated women.</p>
                    <p>At the centre of Bouguessa is an ethos of minimalist sophistication and feminine elegance. Merging global trends and contemporary <br /> classics inspired by art, architecture and modern design, the signature silhouettes lie in highly modern cuts, bold lines, and geometric <br /> precision.</p>
                    <p><span className='first-child'>BOUGUESSA</span> was founded in Dubai by Faiza Bouguessa in 2014. From her studio in Dubai Design District, she designs 3 collections a <br /> year.</p>
                    <p>Faiza’s first encounter with garment making took place during her early years while spending time with her grandmother who was a <br /> seamstress herself, and who taught her the basics of knighting and sewing. Her passion led her to take numerous internships in tailor <br /> shops while studying English literature in university. Through these internships she learned the basics of pattern making and developed <br /> an understanding for fabric characteristics.</p>
                </div>

                <div className='kanat-v-dele-skill-na-pridele'>
                    <img className='ab' src='//cdn.shopify.com/s/files/1/1320/6057/files/IMG_4820_400x.jpg?v=1590587479 400w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_4820_600x.jpg?v=1590587479 600w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_4820_700x.jpg?v=1590587479 700w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_4820_800x.jpg?v=1590587479 800w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_4820_900x.jpg?v=1590587479 900w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_4820_1000x.jpg?v=1590587479 1000w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_4820_1200x.jpg?v=1590587479 1200w' />
                    <img src='//cdn.shopify.com/s/files/1/1320/6057/files/IMG_9512_400x.jpg?v=1590587510 400w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_9512_600x.jpg?v=1590587510 600w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_9512_700x.jpg?v=1590587510 700w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_9512_800x.jpg?v=1590587510 800w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_9512_900x.jpg?v=1590587510 900w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_9512_1000x.jpg?v=1590587510 1000w, //cdn.shopify.com/s/files/1/1320/6057/files/IMG_9512_1200x.jpg?v=1590587510 1200w' />
                </div>
        </div>
    </div>
    );
};

export default About;