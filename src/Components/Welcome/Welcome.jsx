import React from 'react'
import './Welcome.css'
import { MdCastForEducation } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiWhiteBook } from 'react-icons/gi';


function Welcome() {
    return (
        <div className="container">
            <div className='welcome' >
                <h1 className='welcome_title' >Welcome To Eikra</h1>
                <p className='welcome_paragraph'>Tmply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                <div className="wrapper_skilled">
                    <div className="welcome_skilled">
                        <div className="avatar " > <MdCastForEducation className='avatar_img' /></div>
                        <h3 className='title' >Scholarship Facility</h3>
                        <p className='about'>Dorem Ipsum has been the industry’s standard dummy text ever since the en an unknown printer galley dear.</p>
                    </div>
                    <div className="welcome_skilled" >
                        <div className="avatar"> <BsFillPersonFill className='avatar_img' /> </div>
                        <h3 className='title' >Scholarship Facility</h3>
                        <p className='about'>Dorem Ipsum has been the industry’s standard dummy text ever since the en an unknown printer galley dear.</p>
                    </div>
                    <div className="welcome_skilled">
                        <div className="avatar"> <GiWhiteBook className='avatar_img' /> </div>
                        <h3 className='title' >Scholarship Facility</h3>
                        <p className='about'>Dorem Ipsum has been the industry’s standard dummy text ever since the en an unknown printer galley dear.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome