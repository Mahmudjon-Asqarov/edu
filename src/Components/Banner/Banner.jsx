import React, { useState, useEffect, useContext } from 'react';
import './Banner.css'

function Banner({ data }) {
    const [index, setIndex] = useState(0)
    const countOne = () => {
        setIndex(0)
    }
    const countTwo = () => {
        setIndex(1)
    }
    const countThree = () => {
        setIndex(2)
    }
    useEffect(() => {
        const counterCount = () => {
            const ast = setTimeout(() => {
                setIndex(index + 1)
            }, 6000)
            return () => {
                clearTimeout(ast)
            }
        }
        index === 3 ? setIndex(0) : counterCount();
    }, [index])
    return (
        <div className='banner' style={{ backgroundImage: `url(${data[index].img})`, backdropFilter: "grayscale(100%)" }} >
            <div className="blur">
                <div className="container banner_container ">
                    <h1
                        className='banner_title'
                        style={index === 0 ? { animationName: "showRight" } : { animationName: "showOne" }
                            && index === 1 ? { animationName: "showTop" } : { animationName: "showOne" }
                                && index === 2 ? { animationName: "showLeft" } : { animationName: "showOne" }}
                    >
                        {data[index].title}
                    </h1>
                    <p className='banner_about'
                        style={index === 0 ? { animationName: "showRight" } : { animationName: "showOne" }
                            && index === 1 ? { animationName: "showTop" } : { animationName: "showOne" }
                                && index === 2 ? { animationName: "showLeft" } : { animationName: "showOne" }}
                    >{data[index].about}</p>
                    <button className='h_btn banner_btn'
                        style={index === 0 ? { animationName: "showRight" } : { animationName: "showOne" }
                            && index === 1 ? { animationName: "showTop" } : { animationName: "showOne" }
                                && index === 2 ? { animationName: "showLeft" } : { animationName: "showOne" }}
                    >{data[index].btn}</button>
                </div>
                <div className="circle_link">
                    <div onClick={countOne} style={index === 0 ? { backgroundColor: 'white' } : null} className="circle" > <img className='circle_img' src={data[0].img} alt="" /> <div className="rec"></div> </div>
                    <div onClick={countTwo} style={index === 1 ? { backgroundColor: 'white' } : null} className="circle"> <img className='circle_img' src={data[1].img} alt="" /><div className="rec"></div></div>
                    <div onClick={countThree} style={index === 2 ? { backgroundColor: 'white' } : null} className="circle"><img className='circle_img' src={data[2].img} alt="" /><div className="rec"></div> </div>
                </div>
            </div>
        </div>
    )
}

export default Banner