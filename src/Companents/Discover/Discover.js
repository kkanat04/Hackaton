import React from 'react';
import './Discover.css'

import about from '../images/about.jpg'
import girlDress from '../images/girlDress.jpg'
import girlDress1 from '../images/girlDress1.jpg'
import girlDress2 from '../images/girlDress2.jpg'
import girlDress3 from '../images/girlDress3.jpg'
import girlDress4 from '../images/girlDress4.jpg'
import HomeProduct from '../Home/HomeProduct';
import Footer from './../Footer/Footer';



function Discover(props) {
    return (
        <div>

         <div className='discover'>
           
           <div className='line'>
            <h3 className='singatureLine'>THE SIGNATURE LINE</h3>
            <h2 className='h2'>An eco-conscious range of elegant signature silhouettes.</h2>
           </div>
           <div className='thirdlaunch'>
               
               <div className='divColectionP'>
                   <p className='aboutTheColection'>ABOUT THE COLLECTION</p>
                    <p>The third launch of Bouguessa’s Signature Line continues a pledge to put <br />
                     sustainability at the forefront of the brand ethos, by focusing on <br />
                     consciousness and by using deadstock materials for a smarter approach to <br />
                     fashion.</p>
               </div>
               <div className='divAbout'>
                   <img className='about' src={about} />
               </div>

             </div>
             <div className='dreses'>
                    <div className='dresimg'>
                    <img className='girlimg' src={ girlDress } />
                    </div>
                    <div className='dresimg'>
                    <img className='girlimg' src={ girlDress1 } />
                    </div>
                </div>

                 <div className='signature'>
                 <img className='signatureImg' src={ girlDress2 } />

                 <p>The new Signature line is made up of comfortable dresses and light basics in a neutral color palette. By fusing classic <br />
                  styles with fine details the free-spirited pieces are wearable throughout summer as well as ramadan festivities and cosy <br />
                  get-togethers at home, but above all, will last in your wardrobe for many years to come.</p>
                 
                 </div> 

                  <div className='lastimg'>
                 <img src={ girlDress3 } />

                 <img src={girlDress4} />
                 
                 </div>
    



        

         </div>

         <HomeProduct />

         <Footer />


            
        </div>
    );
}

export default Discover;