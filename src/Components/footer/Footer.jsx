import React from 'react';
import './Footer.css';
import { BiCaretRight } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'
import { IoMdCall } from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="wrapper_footer">
                    <div className="footer_page">
                        <h1>Education</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ullam quas itaque ad exercitationem cum modi illum, eligendi molestias sequi soluta, voluptates voluptatum ipsa sint rem, excepturi error ducimus culpa.</p>
                    </div>
                    <div className="footer_page">
                        <h1>Featured Links</h1>
                        <ul>
                            <li><BiCaretRight /> Graduation</li>
                            <li><BiCaretRight /> Graduation</li>
                            <li><BiCaretRight /> Graduation</li>
                            <li><BiCaretRight /> Graduation</li>
                            <li><BiCaretRight /> Graduation</li>
                            <li><BiCaretRight /> Graduation</li>
                            <li><BiCaretRight /> Graduation</li>
                        </ul>
                    </div>
                    <div className="footer_page">
                        <h1>Information</h1>
                        <Link target={"_blank"} href={`https://goo.gl/maps/oMYnCWnfD2g8pVAX6`}><GoLocation />Nammqi IT Park</Link>
                        <Link target={"_blank"} href={`https://www.instagram.com/mahmudjon_asqarov/`}><IoMdCall />+998 94 056 60 66</Link>
                        <Link target={"_blank"} href={`https://www.instagram.com/mahmudjon_asqarov/`}><MdAlternateEmail />reactdevv@gmail.com</Link>
                    </div>
                    <div className="footer_page">
                        <h1>Newsletter</h1>
                        <p>Fusce varittus, dolor tempor interdum tristiquei bibendum</p>
                    </div>
                </div>
            </div>
            <div className="footer_absolute">
                <div className="container footer_container">
                    <span>© Mahmudjon Educatioon {new Date().getFullYear()}</span>
                    <Link href="" className='footer_networks'>
                        <FaTelegramPlane />
                        <BsInstagram />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer