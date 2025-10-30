import React from 'react'
import NavbarCom from '../components/NavbarCom'
import Footer from '../components/Footer'
import HomeBanner from '../components/HomeCom/HomeBanner'
import MiniNavbar from '../components/MiniNavbar'
import { Helmet } from 'react-helmet'
import OurVissionMission from '../components/HomeCom/OurVissionMission'
import Project from '../components/HomeCom/Project'

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title> Ms builders to build ur dream house </title>
                <link rel="canonical" href="http://localhost:5173/" />
                <meta content='This is the website for the ms builders' name='description' />
                <meta name='keywords' content='builders , home, commercial buildings' />
            </Helmet>

            <MiniNavbar></MiniNavbar>

            <NavbarCom />
            <HomeBanner />
            <OurVissionMission />
            <Project />
            <Footer />
        </div>
    )
}

export default HomePage
