import React, {useState} from 'react';
import './HomeProduct.css'
import deenaDress from '../../img/deenaDress.jpg'
import deenaDress1 from '../../img/deenaDress1.jpg'
import mozaDress from '../../img/mozaDress.jpg'
import mozaDress2 from '../../img/mozaDress2.jpg'
import kiranDress from '../../img/kiranDress.jpg'
import kiranDress3 from '../../img/kiranDress3.jpg'
import noufDress from '../../img/noufDress.jpg'
import noufDress4 from '../../img/noufDress4.jpg'
import { NavLink } from 'react-router-dom';


function HomeProduct(props) {

    const [data, setdata] = useState(false)
    const [name, setname] = useState(false)
    const [user, setuser] = useState(false)
    const [admin, setadmin] = useState(false)

    return (
        <div>
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
                  <button className='shop'>SHOP THE COLLECTION</button>
              </div>
        </div>
    );
}

export default HomeProduct;