import React from 'react';
import './Header.sass';

export default function Index() {
    return (
        <div className='header'>
            <div className='cap'>
                <div className='cap_left'>
                    <div className='cap_logo'>
                        <p>Adoptme</p>
                        <img src='/gallery/paw.svg'/>
                    </div>
                    <div className='navigation'>
                        <p className='home'>Home</p>
                        <div className='adoption'> <p>Adoption</p> <img src='/gallery/arrow.svg'/></div>
                        <p>Community</p>
                        <p>Stories with pet</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <div className='cap_right'>
                    <img src='/gallery/magnifier.svg'/>
                    <p>Sign in</p>
                    <div className='cap_button'><p>Sign up</p></div>
                </div>
            </div>
            <div className='cover'>
                <div className='cover_left'>
                    <div className='cover_block'>
                        <div className='cover_text'>
                            <h1>Let’s Choose and <img src='/gallery/bigPaw.svg'/> Adopt your new Pet</h1>
                            <p>Adopt a pet, give them the best treatment, and you will feel really happy of friendship with your pet.</p>
                        </div>
                        <div className='cover_buttons'>
                            <div className='cover_button'> <p>Adopt now</p> </div>
                            <p>Donate for food</p>
                        </div>
                    </div>
                    <div className='supported'>
                        <p>Supported by:</p>
                        <div className='supportedLogos'>
                            <img src="/gallery/img_5.png"/>
                            <img src="/gallery/img_6.png"/>
                            <img src="/gallery/img_7.png"/>
                            <img src="/gallery/img_8.png"/>
                        </div>
                    </div>
                </div>
                <div className='cover_right'>
                    <img className="frame" src='/gallery/frame.svg'/>
                    <img className='img1' src='/gallery/img_1.png'/>
                    <img className='img2' src='/gallery/img_2.png'/>
                    <img className='img3' src='/gallery/img_3.png'/>
                    <img className='img4' src='/gallery/img_4.png'/>
                </div>
            </div>
        </div>
    );
}