import React, { useState, useEffect } from 'react';
import './Home1.css'
import girl from '../../images/girl.jpg'
import girl1 from '../../images/girl1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home1 = () => {

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 1000,
          easing: 'ease'
        });
      });

    return (
        <div>
        <div className='home1'>
        <div className='block1'>
            <p className='block-text'>ECO-CONSCIOUS SIGNATURE <br /> LINE</p>
            <img className='girl' data-aos="zoom-out" data-aos-delay="300"  src={girl} />
            <p className='block-text2'>The third launch of signature line <br /> continues a pledge to sustainability <br /> at the forefront by focusing on <br /> consciousness for a smarter <br /> approach to fashion</p>
        </div>
        <div className='block2'>

        <img className='girl1' data-aos="zoom-out" src={girl1} />
        

        </div>
        </div>
        </div>
    );
};

export default Home1;

