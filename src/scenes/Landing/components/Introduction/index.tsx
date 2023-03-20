import React from 'react';
import './Introduction.sass';

export default function Index() {
    return (
        <div className='introduction'>
            <div className='introduction_upper'>
                <h3>our mission for pet</h3>
                <div className='in_up_block'>
                    <h2>Let’s Choose and Adopt your New Lovely Pet</h2>
                    <p>You need to see some pets in Adoptme. We have the friend that's you need to have. We also have the equipment you need to take care of it.</p>
                </div>
            </div>
            <div className='introduction_lower'>
                <div className='collage'>
                    <img className='collage_wrapper' src='/gallery/img_9.png' />
                    <div className='cat_border'> <img className='collage_cat' src='/gallery/img_10.png'/> </div>
                    <img className='collage_dog' src='/gallery/img_11.png'/>
                </div>
                <div className='in_lower_block'>
                    <h3>adoptme community</h3>
                    <h2>Connect with adoptme across the country</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consec</p>
                    <div className='in_lower_columns'>
                        <div className="in_lower_column">
                            <h2>150+</h2>
                            <p>proin vestibulum, duis. im dol.</p>
                        </div>
                        <div className="in_lower_column">
                            <h2>2k+</h2>
                            <p>proin ulduis. isimuim dol.</p>
                        </div>
                        <div className="in_lower_column">
                            <h2>3k+</h2>
                            <p>proin vestibulum, duis. im dua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}