import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';
import './Courses.css';
import { Link } from 'react-router-dom';
function Courses() {
    return (
        <div className='  courses ' >
            <div className="container parent">

                <div className="pages1"> </div>
                {/* left-section */}
                {/* start */}
                <div className="pages2">
                    <h2 className="courser_title"> Featured Courses </h2>
                    <div className="bc_img" style={{ backgroundImage: `url(https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/15.jpg)` }} >
                        <div className="money">
                            <span>$93.00</span>
                        </div>
                        <div className="pages_after ">
                            <div className="fa_link"> <Link to={"/"} className="faLink" ><FaLink className='' /> </Link> </div>
                        </div>
                    </div>
                    <div className="bc_text">
                        <h3 className='cuccers_child_title' >Build A Full Web Chat App From Scratch</h3>
                        <div className="bc_text_padding">
                            <BsFillPersonFill /> <span>Mike Hussy</span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                    </div>
                </div>
                {/* end */}
                <div className="pages3"> </div>
                {/* right-section */}
                {/* start */}
                {/* 1 */}
                <div className="pages4">
                    <div className="bc_img bc_imgs" style={{ backgroundImage: `url(https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/13-410x260.jpg)` }} >
                        <div className="money">
                            <span>$93.00</span>
                        </div>
                        <div className="pages_after">
                            <div className="fa_link"> <Link to={"/"} className="faLink" ><FaLink className='' /> </Link> </div>
                        </div>
                    </div>
                    <div className="bc_text">
                        <h3 className='cuccers_child_title'>Hands on With Docker From a Docker Captain</h3>
                    </div>
                </div>
                {/* 2 */}
                <div className="pages5 ">
                    <div className="bc_img bc_imgs" style={{ backgroundImage: `url(https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/10/kids_3-410x260.jpg)` }} >
                        <div className="money">
                            <span>$93.00</span>
                        </div>
                        <div className="pages_after">
                            <div className="fa_link"> <Link to={"/"} className="faLink" ><FaLink className='' /> </Link> </div>
                        </div>
                    </div>
                    <div className="bc_text">
                        <h3 className='cuccers_child_title'>Hands on With Docker From a Docker Captain</h3>
                    </div>
                </div>
                {/* 3 */}
                <div className="pages6">
                    <div className="bc_img bc_imgs" style={{ backgroundImage: `url(https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/6-410x260.jpg)` }} >
                        <div className="money">
                            <span>$93.00</span>
                        </div>
                        <div className="pages_after">
                            <div className="fa_link"> <Link to={"/"} className="faLink" ><FaLink className='' /> </Link> </div>
                        </div>
                    </div>
                    <div className="bc_text">
                        <h3 className='cuccers_child_title'>Hands on With Docker From a Docker Captain</h3>
                    </div>
                </div>
                {/* 4 */}
                <div className="pages7">
                    <div className="bc_img bc_imgs" style={{ backgroundImage: `url(https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/10/kids_5-410x260.jpg)` }} >
                        <div className="money">
                            <span>$93.00</span>
                        </div>
                        <div className="pages_after">
                            <div className="fa_link"> <Link to={"/"} className="faLink" ><FaLink className='' /> </Link> </div>
                        </div>
                    </div>
                    <div className="bc_text">
                        <h3 className='cuccers_child_title'>Hands on With Docker From a Docker Captain</h3>
                    </div>
                </div>
                {/* end */}

            </div>
        </div>
    )
}

export default Courses