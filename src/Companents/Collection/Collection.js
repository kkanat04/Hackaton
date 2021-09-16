import React from 'react';

import './Collection.css'

import item1 from '../img/collection1.jpeg'

import item2 from '../img/collection2.jpeg'


const Collections = () => {

    return (

        <>

            <div className='collections'>

            <h3 className='collecton_h3'>COLLECTIONS</h3>

                <div className='wrap_collections'>

                    <div className='collections_item'>

                        <img src={item1}/>

                        <p className='collection_title'>COLLECTION</p>

                        <p className='year'>SPRING/SUMMER 2021</p>

                    </div>

                    <div className='collections_item'>

                        <img src={item2}/>

                        <p className='collection_title'>COLLECTION</p>

                        <p className='year'>SPRING/SUMMER 2021</p>

                    </div>

                    <div className='collections_item'>

                        <img src={item1}/>

                        <p className='collection_title'>COLLECTION</p>

                        <p className='year'>SPRING/SUMMER 2021</p>

                    </div>




                    

                </div>




            </div>

        </>

    );

};







export default Collections;