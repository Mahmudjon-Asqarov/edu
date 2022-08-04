import React, { useRef, useEffect } from 'react'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { IoLogoYoutube } from "react-icons/io";
function Teachers({ users }) {
    const { avatar, first_name, email } = users;

    return (
        <div className="wrapper_teachers">
            {
                users.map((el, index) =>
                    <div key={index} className="content_teacher">
                        <div className="img_teacher" style={{ backgroundImage: `url(${el.avatar})` }} ></div>
                        <div className="teacher_about">
                            <h2>{el.first_name}</h2>
                            <p>{el.email}</p>
                            <div className="btn_network">
                                <a target="_blank" href="https://www.instagram.com/mahmudjon_asqarov/"><BsInstagram /></a>
                                <a target="_blank" href="https://www.instagram.com/mahmudjon_asqarov/"><FaFacebookSquare /></a>
                                <a target="_blank" href="https://www.youtube.com/channel/UCZE2MYCs_ELGBwkeYhubW8Q"><IoLogoYoutube /></a>
                                <a target="_blank" href="https://tme/mahmudjonasqarov"  ><BsTelegram /></a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Teachers