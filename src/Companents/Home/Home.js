import React, { useState } from 'react';
import './Home.css'
import plash from '../../img/plash.jpg'
import plash1 from '../../img/plash1.jpg'
import white from '../../img/white.jpg'
import white1 from '../../img/white1.jpg'
import cardigan from '../../img/cardigan.jpg'
import cardigan4 from '../../img/cardigan4.jpg'
import pleats from '../../img/pleats.jpg'
import pleats2 from '../../img/pleats2.jpg'
import hat from '../../img/hat.jpg'
import girl from '../../img/girl.jpg'
import about from '../images/about.jpg'


import deenaDress from '../../img/deenaDress.jpg'
import deenaDress1 from '../../img/deenaDress1.jpg'
import mozaDress from '../../img/mozaDress.jpg'
import mozaDress2 from '../../img/mozaDress2.jpg'
import kiranDress from '../../img/kiranDress.jpg'
import kiranDress3 from '../../img/kiranDress3.jpg'
import noufDress from '../../img/noufDress.jpg'
import noufDress4 from '../../img/noufDress4.jpg'



import {NavLink} from 'react-router-dom'
import Footer from '../Footer/Footer.js';
import Home1 from './Home1/Home1';
import HomeSpring from './HomeSpring'
import Discover from './../Discover/Discover';

function Home(props) {

    const [data, setdata] = useState(false)
    const [name, setname] = useState(false)
    const [user, setuser] = useState(false)
    const [admin, setadmin] = useState(false)


    return (
        <div>
        <div class="ImageHero ImageHero--large">

        <div className='page1'>
            <div className='signature'>
           <h2 className='lineSignature'>SIGNATURE LINE</h2>

          <p className='discover'>Discover new styles added to our signature line</p>
            <NavLink exact to='/collection' ><p className='discover_the_collection'>Discover the collectin</p></NavLink>
           
           </div>
        </div>
         
          
           </div>

           <Home1 />

           {/* ///////////////////////////////////////// */}



           <div className='product'>

            <div className='first'>
            <NavLink  className='nav' exact to='/COTTON-PUFFED-SLEEVES'>
            <img onMouseEnter={() => setdata(true)} onMouseLeave={() => setdata(false)} className='plash' src={ data == true ? white1 : white} />
            <p>COTTON PUFFED SLEEVES <br/> SHIRT DRESS</p></NavLink>
            <p>$655</p>
            </div>
            <div className='first'>
            <NavLink  className='nav' exact to='/SIDE-PLEATS-LONG-JACKET'>
            <img onMouseEnter={() => setname(true)} onMouseLeave={() => setname(false)} className='plash' src={ name == true ? pleats2 : pleats} />

            
            <p>SIDE PLEATS LONG JACKET</p></NavLink>
            <p>$853</p>
            </div>
            <div className='first'>
            <NavLink  className='nav' exact to='/COTTON-KAFTAN-DRESS'>
            <img onMouseEnter={() => setuser(true)} onMouseLeave={() => setuser(false)} className='plash' src={ user == true ? plash1 : plash} />

            <p>COTTON KAFTAN DRESS</p></NavLink>
            <p>$589</p>
            </div>
            <div className='first'>
            <NavLink  className='nav' exact to='/CONTRASTED-LOOSE-LONG'>
            <img onMouseEnter={() => setadmin(true)} onMouseLeave={() => setadmin(false)} className='plash' src={ admin == true ? cardigan4 : cardigan} />

            <p>CONTRASTED LOOSE LONG <br /> CARDIGAN</p></NavLink>
            <p>$671</p>
            </div>
             
           </div>

            <div className='divbut'>
                  <NavLink exact to='/shop'><button className='shop-ss'>SHOP THE COLLECTION</button></NavLink>
              </div>


           <div className='vacation'>
             
             <img src={hat} />
             <div className='divp'>

                  <p className='onVacation'>ON VACATION: HOME OR AWAY!</p>
                  <p className='holiday'>Our edit of what to pack will have your holiday ready in no time.</p>
              </div>

           </div>


{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}





           


          {/* ////// / */}

            <HomeSpring />


          {/* ////////////////////////////// */}
    <p className=' text-p'>SPRING-SUMMER 2021</p>
       <div className='product'>
            

            <div className='first'>


            <NavLink  className='nav' exact to='/COTTON-PUFFED-SLEEVES'>
            <img onMouseEnter={() => setdata(true)} onMouseLeave={() => setdata(false)} className='white' src={ data == true ? deenaDress1 : deenaDress} />
            <p>COTTON PUFFED SLEEVES <br/> SHIRT DRESS</p></NavLink>
            <p>$655</p>
            </div>
            <div className='first'>
            <NavLink  className='nav' exact to='/SIDE-PLEATS-LONG-JACKET'>
            <img onMouseEnter={() => setname(true)} onMouseLeave={() => setname(false)} className='pleats' src={ name == true ? mozaDress2 : mozaDress } />

            
            <p>SIDE PLEATS LONG JACKET</p></NavLink>
            <p>$853</p>
            </div>
            <div className='first'>
            <NavLink  className='nav' exact to='/COTTON-KAFTAN-DRESS'>
            <img onMouseEnter={() => setuser(true)} onMouseLeave={() => setuser(false)} className='plash' src={ user == true ? kiranDress3 : kiranDress} />

            <p>COTTON KAFTAN DRESS</p></NavLink>
            <p>$589</p>
            </div>
            <div className='first'>
            <NavLink  className='nav' exact to='/CONTRASTED-LOOSE-LONG'>
            <img onMouseEnter={() => setadmin(true)} onMouseLeave={() => setadmin(false)} className='cardigan' src={ admin == true ? noufDress4 : noufDress} />

            <p>CONTRASTED LOOSE LONG <br /> CARDIGAN</p></NavLink>
            <p>$671</p>
            </div>

           


        </div>

          <div className='divbut'>
           <NavLink exact to='/shop'><button className='shop-ss'>VIEW ALL PRODUCTS</button></NavLink>
          </div>






        <Footer />

        </div>
    );
}

export default Home;    


