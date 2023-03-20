import React, {useState} from "react";
import './Footer.sass';
import Block from '../../scenes/Landing/components/Block'
import {list1} from '../../service/consts1'
import {list2} from '../../service/consts2'

export default function Index() {
    return (
        <div className='Footer'>
            <div className='footer_block'>
                <h3>Forum answer and question</h3>
                <h2>Adopt the pet that has waited too long</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sim dolor sit amet, consectetur adipisci.</p>
                <div className='block_wrapper'>
                    <div className="wrapper">
                        {list1.map(i => (
                            <Block title={i.title} description={i.description}/>
                        ))}
                    </div>
                    <div className="wrapper">
                        {list2.map(i => (
                            <Block title={i.title} description={i.description}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className='contacts_block'>
                <img src='/gallery/line.svg'/>
                <div className='contacts'>
                    <p>copyright 2023. Adoptme. All right reserved</p>
                    <p>(62)811-767-666 | adoptme@email.com</p>
                </div>
            </div>
        </div>
    );
}