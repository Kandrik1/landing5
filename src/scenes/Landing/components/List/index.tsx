import React from 'react';
import './List.sass';

export default function Index() {
    return (
        <div className='list'>
            <div className='list_block'>
                <h3>adoption pet</h3>
                <h2>Adopt the pet that has waited too long</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consectetur adipisci.</p>
                <div className='scroll_panel'>
                    <div className='button'>
                        <p>Filters</p>
                        <img src='/gallery/settings.svg'/>
                    </div>
                    <div className='scroll_arrow'>
                        <div><img src='/gallery/arrowLeft.svg'/> </div>
                        <div><img src='/gallery/arrowRight.svg'/></div>
                    </div>
                </div>
            </div>
            <div className="scroll_block">
                <div className='one'>
                    <img src='/gallery/img_13.png'/>
                    <div className='button_scroll'><p>Adopt</p></div>
                </div>
                <img src='/gallery/img_14.png'/>
                <img src='/gallery/img_15.png'/>
                <img src='/gallery/img_16.png'/>
                <div className='five'><img src='/gallery/img_17.png'/></div>
            </div>
        </div>
    );
}