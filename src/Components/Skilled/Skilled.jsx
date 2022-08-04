import React, { useState, useEffect, useRef } from 'react'
import './Skilled.css'
import axios from "axios"
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Teachers from './Teachers'

function Skilled() {
    const [skilledTeacher, setSkilledTeacher] = useState([]);
    useEffect(() => {
        const url = "https://reqres.in/api/users?page=2"
        axios.get(url)
            .then(res => setSkilledTeacher(res.data.data))
            .catch(err => { console.log(err) })
    }, [])
    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth"
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    return (
        <div className='skilled container'>
            <div className="skilled_bar">
                <h1>Our Skilled Instructors</h1>
                <div className='skills_teacher' >
                    <button className="skills_teacher_go"><FiArrowLeft /> <FiArrowRight /> </button>
                </div>
            </div>
            <div className="teachers_line" ref={elRef} style={{ overflow: "auto" }}>
                <Teachers users={skilledTeacher} />
            </div>
            <div className="skilled_bar"></div>
        </div>
    )
}

export default Skilled