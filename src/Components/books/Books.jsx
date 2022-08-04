import React from 'react'
import "./Books.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
function Books() {
    return (
        <div className='wrapper_swiper'>
            <div className="container">
                <div className="skilled_bar books_bar">
                    <h1>Our Skilled Instructors</h1>
                    <div className='skills_teacher' >

                    </div>
                </div>
                <div className="books_show">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={40}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{ margin: "24px 16px ", overflow: "hidden" }}   >
                            <div className="content_teacher books_color">
                                <div className="img_teacher img_book" style={{ backgroundImage: `url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505007508i/36213797._UY500_SS500_.jpg)` }} ></div>
                                <div className="teacher_about">
                                    <h2>1.Quickstart Step-By-Step Guide To Learning React Javascript Library</h2>
                                    <p>This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ margin: "24px 16px " }} >
                            <div className="content_teacher">
                                <div className="img_teacher img_book" style={{ backgroundImage: `url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505007508i/36213797._UY500_SS500_.jpg)` }} ></div>
                                <div className="teacher_about">
                                    <h2>2.Quickstart Step-By-Step Guide To Learning React Javascript Library</h2>
                                    <p>This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ margin: "24px 16px " }} >
                            <div className="content_teacher">
                                <div className="img_teacher img_book" style={{ backgroundImage: `url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505007508i/36213797._UY500_SS500_.jpg)` }} ></div>
                                <div className="teacher_about">
                                    <h2>3.Quickstart Step-By-Step Guide To Learning React Javascript Library</h2>
                                    <p>This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ margin: "24px 16px " }} >
                            <div className="content_teacher">
                                <div className="img_teacher img_book" style={{ backgroundImage: `url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505007508i/36213797._UY500_SS500_.jpg)` }} ></div>
                                <div className="teacher_about">
                                    <h2>4.Quickstart Step-By-Step Guide To Learning React Javascript Library</h2>
                                    <p>This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ margin: "24px 16px " }} >
                            <div className="content_teacher">
                                <div className="img_teacher img_book" style={{ backgroundImage: `url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505007508i/36213797._UY500_SS500_.jpg)` }} ></div>
                                <div className="teacher_about">
                                    <h2>5.Quickstart Step-By-Step Guide To Learning React Javascript Library</h2>
                                    <p>This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ margin: "24px 16px " }} >
                            <div className="content_teacher">
                                <div className="img_teacher img_book" style={{ backgroundImage: `url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505007508i/36213797._UY500_SS500_.jpg)` }} ></div>
                                <div className="teacher_about">
                                    <h2>6.Quickstart Step-By-Step Guide To Learning React Javascript Library</h2>
                                    <p>This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ margin: "24px 16px " }} >
                            <div className="content_teacher">
                                <div className="img_teacher img_book" style={{ backgroundImage: `url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505007508i/36213797._UY500_SS500_.jpg)` }} ></div>
                                <div className="teacher_about">
                                    <h2>7.Quickstart Step-By-Step Guide To Learning React Javascript Library</h2>
                                    <p>This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ margin: "24px 16px " }} >
                            <div className="content_teacher">
                                <div className="img_teacher img_book" style={{ backgroundImage: `url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505007508i/36213797._UY500_SS500_.jpg)` }} ></div>
                                <div className="teacher_about">
                                    <h2>8.Quickstart Step-By-Step Guide To Learning React Javascript Library</h2>
                                    <p>This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ margin: "24px 16px " }} >
                            <div className="content_teacher">
                                <div className="img_teacher img_book" style={{ backgroundImage: `url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505007508i/36213797._UY500_SS500_.jpg)` }} ></div>
                                <div className="teacher_about">
                                    <h2>9.Quickstart Step-By-Step Guide To Learning React Javascript Library</h2>
                                    <p>This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
export default Books