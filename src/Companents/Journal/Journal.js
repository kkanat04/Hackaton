import React from 'react';
import './Journal.css';
import journal1 from '../img/journal1.jpg'
import journal2 from '../img/journal2.jpg'
import journal3 from '../img/journal3.jpg'
import journal4 from '../img/journal4.jpg'
import journal5 from '../img/journal5.jpg'
import journal6 from '../img/journal6.jpg'
const Journal = () => {
    return (
        <>
            <div className='journal'>
                <div className='journal_h3'><p>JOURNAL</p></div>
                <div className='wrap_journal'>

                    <div className='journal_card'>
                        <div className='img_journal'><img   src={journal1}/></div>
                        <div className='j_title_description'>
                            <p className='journal_title'>The Creatives: Ana D'Castro</p>
                            <p className='journal_description'>Ana D’Castro is a Portuguese architect and visual artist. </p>
                        </div>
                    </div>

                    <div className='journal_card'>
                        <div className='img_journal' ><img src={journal2}/></div>
                        <div className='j_title_description'>
                            <p className='journal_title'>We Ask the Stylist: Jade Chilton</p>
                            <p className='journal_description'>Dubai-based Fashion Director and Stylist Jade Chilton shows us how she’s styling the SS21 Kiran Pocket Dress for three different occasions.</p>
                        </div>
                    </div>

                    <div className='journal_card'>
                        <div className='img_journal' ><img src={journal3}/></div>
                        <div className='j_title_description'>
                            <p className='journal_title'>The Bouguessa Voice: Rabah Saeid</p>
                            <p className='journal_description'>Rabah Saeid, founder and creative director of STYLED HABITAT tells us what it takes to be a good designer and her signature design style </p>
                        </div>
                    </div>

                    <div className='journal_card'>
                        <div className='img_journal' ><img src={journal4}/></div>
                        <div className='j_title_description'>
                            <p className='journal_title'>The Creatives: Olivia Lee</p>
                            <p className='journal_description'>We speak to Liv Lee, the artist behind our SS21 Lily Hawaiian print shirt, on her signature style and her dream summer vacation.</p>
                        </div>
                    </div>

                    <div className='journal_card'>
                        <div className='img_journal'><img src={journal5}/></div>
                        <div className='j_title_description'>
                            <p className='journal_title'>The Bouguessa Voice: Farrah Storr</p>
                            <p className='journal_description'>We speak to Farrah Storr, Editor-in-Chief of ELLE UK and author of The Discomfort Zone, about positivity during a pandemic and getting out of your ...</p>
                        </div>
                    </div>

                    <div className='journal_card'>
                        <div className='img_journal' ><img src={journal6}/></div>
                        <div className='j_title_description'>
                            <p className='journal_title'>The Bouguessa Voice: Rabah Saeid</p>
                            <p className='journal_description'>Rabah Saeid, founder and creative director of STYLED HABITAT tells us what it takes to be a good designer and her signature design style </p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Journal;