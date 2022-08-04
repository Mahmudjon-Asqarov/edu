import React, { useRef, useState } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'
import './Video.css'
function Video() {
    const [videoplay, setVideoPlay] = useState(true);
    const [ videoWidth , setVideoWidth ] = useState(false)
    const videoWitdhRef = useRef()
     
    return (
        <div className="wrapper_video_component">
            <div className='video_component' >
                <h2>Watch Campus Life Video Tour</h2>
                <p>Lorem ipsum text of the printing and typesetting industryorem
                    ever since industry standard dum an unknowramble</p>
                {
                    videoplay ? <BsPlayCircle className='btn_video' onClick={() => setVideoPlay(false)} /> :
                        <>
                            <div className={"video_show"} >
                                <div className="wrapper_videobar">
                                    <FiX onClick={() => setVideoPlay(true)} className='close' />
                                    <iframe ref={videoWitdhRef} className="youtube_video" width="560" height="315" src="https://www.youtube.com/embed/f9iCbD7boyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className={"videos_show"} ></div>
                        </>
                }
            </div>
        </div>

    )
}

export default Video