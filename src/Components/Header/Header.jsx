import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io';
function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        < >
            <header className='header'>
                <div className=" container wrapper_header">
                    <div className="header_icon">
                        <img src="https://icones.pro/wp-content/uploads/2021/06/icone-de-l-education-jaune.png" alt="" />
                    </div>
                    <ul className="h_collection  ">
                        <li className="h_collection_link  "><Link to={"/"} className='h_collection_link h_link h_link_menu' > Home <IoIosArrowDown /></Link>
                            <div className="hover_container_pages">
                                <ul className='hover_container_pages_collection' >
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                </ul>
                                <ul className='hover_container_pages_collection' >
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                </ul>   
                            </div>

                        </li>
                        <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > Pages<IoIosArrowDown /> </Link>
                            <div className="hover_container_pages">
                                <ul className='hover_container_pages_collection' >
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                </ul>

                            </div>
                        </li>
                        <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > Elements<IoIosArrowDown /></Link>
                            <div className="hover_container_pages">
                                <ul className='hover_container_pages_collection' >
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                </ul>

                            </div>
                        </li>
                        <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > Courses<IoIosArrowDown /></Link>
                            <div className="hover_container_pages">
                                <ul className='hover_container_pages_collection' >
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                </ul>
                                <ul className='hover_container_pages_collection' >
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                </ul>
                            </div>
                        </li>
                        <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > Reaserch<IoIosArrowDown /></Link>
                            <div className="hover_container_pages">
                                <ul className='hover_container_pages_collection' >
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                </ul>

                            </div>
                        </li>
                        <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > News<IoIosArrowDown /></Link>
                            <div className="hover_container_pages">
                                <ul className='hover_container_pages_collection' >
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                </ul>
                                <ul className='hover_container_pages_collection' >
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                    <li className='hover_container_pages_items'><p>Link</p></li>
                                </ul>
                            </div>
                        </li>
                        <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > Contact<IoIosArrowDown /></Link>
                            <div className="hover_container_pages">

                            </div>
                        </li>
                        <Link to={"/"} className='h_collection_link h_btn'>Apply now</Link>
                    </ul>
                    <div className="clothe">{sidebarOpen ? <IoMdClose onClick={() => setSidebarOpen(!sidebarOpen)} /> : <IoMdMenu onClick={() => setSidebarOpen(true)} />} </div>
                </div>
            </header>
            <div className={sidebarOpen ? "sidebar" : "sidebar_activer"}>
                <ul>
                    <li className="sidebar_collection_link"><Link to={"/"} className='sidebar_collection_link h_link sidebar_link' > Home </Link></li>
                    <li className="sidebar_collection_link"><Link to={"/"} className='sidebar_collection_link h_link sidebar_link' > Pages </Link></li>
                    <li className="sidebar_collection_link"><Link to={"/"} className='sidebar_collection_link h_link sidebar_link' > Elements</Link></li>
                    <li className="sidebar_collection_link"><Link to={"/"} className='sidebar_collection_link h_link sidebar_link' > Courses</Link></li>
                    <li className="sidebar_collection_link"><Link to={"/"} className='sidebar_collection_link h_link sidebar_link' > Courses</Link></li>
                    <li className="sidebar_collection_link"><Link to={"/"} className='sidebar_collection_link h_link sidebar_link' > News</Link></li>
                    <li className="sidebar_collection_link"><Link to={"/"} className='sidebar_collection_link h_link sidebar_link' > Contact</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header