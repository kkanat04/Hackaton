import React, { useState, useEffect } from 'react';
import './HomeSpring.css'
import effortless from '../../img/effortless.jpg'
import effortless2 from '../../img/effortless2.jpg'

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
            <p className='block-text'>SPRING SUMMER 2021</p>
            <img className='girl' data-aos="zoom-out" data-aos-delay="300"  src={effortless} />
            <p className='block-text2'>Effortless French Summer Sophistication</p>
        </div>
        <div className='block2'>

        <img className='effortless2' data-aos="zoom-out" src={effortless2} />
        

        </div>
        </div>
        </div>
    );
};

export default Home1;

