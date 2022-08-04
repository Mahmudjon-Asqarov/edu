import React from 'react'
import Banner from './Banner'

function BannerData() {
    const banner_datas = [
        {
            id: 1,
            title: "Best Education For Design",
            about: "Emply dummy text of the printing and typesetting industry orem Ipsum has been the industry's standard dummy text ever sinceprinting and typesetting industry.",
            btn: "Start a course",
            img: 'https://images.shiksha.com/mediadata/images/articles/1556623283phpGTLcm7.jpeg'
        },
        {
            id: 2,
            title: "Best Education React js",
            about: "Emply dummy text of the printing and typesetting industry orem Ipsum has been the industry's standard dummy text ever sinceprinting and typesetting industry.",
            btn: "Start a course",
            img: "https://media.glassdoor.com/l/ab/d6/19/58/coding-at-tomtom.jpg"
        },
        {
            id: 3,
            title: "Best Education Architecture",
            about: "Emply dummy text of the printing and typesetting industry orem Ipsum has been the industry's standard dummy text ever sinceprinting and typesetting industry.",
            btn: "Start a course",
            img: "https://previews.123rf.com/images/mrtwister/mrtwister1303/mrtwister130300070/18495298-blueprint-floor-plans-with-drawing-tools.jpg"
        },
        {
            id: 4,
            title: "Best Education For Design",
            about: "Emply dummy text of the printing and typesetting industry orem Ipsum has been the industry's standard dummy text ever sinceprinting and typesetting industry.",
            btn: "Start a course",
            img: 'https://images.shiksha.com/mediadata/images/articles/1556623283phpGTLcm7.jpeg'
        },
    ]
    return (
        <div>
            <Banner data={banner_datas} />
        </div>
    )
}

export default BannerData