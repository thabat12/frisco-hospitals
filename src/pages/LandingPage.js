import React from "react";
import styled from 'styled-components';

// constants imports for global page CSS themes
import ThemeConstants, { ThemeConstantsWrapper } from "../global/ThemeConstants";
import { AspectConstants, ResponsiveConstants } from "../global/ResponsiveConstants";

// widget imports
import OurMissionTile from "../widgets/OurMissionTile";
import ProjectSection from "../widgets/ProjectSection";

// firebase handler import
import { getUser, isUserLoggedIn } from "../firebase/FireBaseInstance";


import '../css/LandingPage.css';
import { NavLink, useNavigate } from "react-router-dom";
import GalleryScroll from "../widgets/landing_page/GalleryScroll";

import instaLogo from '../icons/instagram.svg';
import facebookLogo from '../icons/facebook.svg';

/*
    LandingPage.js File Contents:

        Design
        - Responsive Constants CSS Wrapper
        - Theme Constants CSS Wrapper
        - Styled Div Elements

        Backend
        - Firebase DB Handler
*/


const LandingWidget = styled.div`
    position: relative;
    width: 100vw;
    background-color: ${ThemeConstants.backgroundColorLightBlue};
    
    display: flex;
    flex-direction: column;

`;

const LandingWidgetNav = styled.header`
    position: absolute;
    height: 80px;
    width: 100vw;

    margin-top: 5vh;

    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;

    font-size: 20px;
    font-weight: bold;

    a {
        transition: 0.3s linear;

        padding: 0.5em;
        border-radius: 10px;
    }

    a:hover {
        cursor: pointer;

        background-color: rgba(0,0,0,0.1);
    }
`;


const LandingWidgetFirstPortion = styled.div`
    height: 60vh;
    width: 100vw;

    display: flex;
    position: relative;

    background-color: ${ThemeConstants.secondaryBackgroundColorDarkerBlue};

    /* the 2 text chunks are absolute in the context of the relative front page bit */
    .landing-widget-first-portion-intro-text-block {
        position: absolute;

        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        top: 30%;
    }

    #landing-page-main-text {
        font-size: 65px;
    }

    #landing-page-secondary-text {
        text-align: center;
        font-size: 30px;
    }
`;

const LandingWidgetOurMissionPortion = styled.div`
    position: relative;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 35px;

    #explore-projects-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    #explore-projects {
        font-size: 25px;
        margin-bottom: 35px;
    }
`;

const OurMissionTextHeaderBox = styled.div`
    position: relative;
    width: 90%;
    
    /* had to make this container absolute kind of hard-coding it for now */
    #our-mission-text-header-box {
        width: 100%;
        top: 35px;
        margin-top: 25px;
        margin-bottom: 65px;
    }

    #our-mission-text-main {
        text-align: center;
    }

    #our-mission-text-description {
        text-align: center;
        padding-left: 2%;
        padding-right: 2%;
        font-weight: normal;
        
    }
`;

// flex grow is going to be 1 here so i dont need to recalculate everything redundantly
const OurMissionTilesContainer = styled.div`
    position: relative;
    height: 100%;
    flex-grow: 1;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    .our-mission-tile {
        background-color: white;

        height: 20vw;
        width: 20vw;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 10px;
    }
`;

const OurMissionTilesContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LandingWidgetNavSpacer = styled.div`
    width: 2.5vw;
`;

/* 
    !!!
    This is the end of the first portion of the landing page
    !!!
*/

// !! Inside of ProjectSection.js, there are 2 divs, project-section and project-section-side-box
const AllProjectsLandingPagePortion = styled.div`

    #take-a-look-h2 {
        margin-top: 10vh;
        text-align: center;
    }

    .project-section {
        position: relative;
        height: 40vh;

        margin-bottom: 3em;
    }

    .project-section-side-box {
        position: absolute;
        background-color: white;

        top: 20%;
        left: 5%;

        height: 45%;
        width: 40%;

        border-radius: 10px;

        background: rgba( 255, 255, 255, 0.8 );
        box-shadow: 0 8px 32px 0 rgba( 255, 255, 255, 0.37 );
        backdrop-filter: blur( 10.5px );
        -webkit-backdrop-filter: blur( 10.5px );
        border-radius: 10px;
    }

    .project-section-side-box-main-text {
        position: absolute;
        width: 70%;

        top: 30%;
        left: 5%;

        h4 {
            font-weight: normal;
        }
    }
`;


const GalleryProjectSectionWrapper = styled.div`

`;

/*
    !!!
    This is the end of the project section portion of the landing page
    !!!
*/


const FooterLandingPagePortion = styled.div`
    width: 100vw;
    height: auto;
    background-color: ${ThemeConstants.primaryAccentRed};
    color: white;

    display: flex;
    flex-direction: row;

    padding-bottom: 8vh;
    padding-top: 5vh;

    .footer-left-portion {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        text-align: center;

        width: 20%;

        h3 {
            font-weight: normal;
        }

        .logo-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            margin-top: 10px;

            height: 50px;

            .connect-logos {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 15px;

                transition: 0.5s transform;
                transform: scale(1);
            }

            .connect-logos:hover {
                transform: scale(1.05);
            }

            #insta-readjust {
                width: 40px;
                height: 40px;
            }

            

        }

        #copyright-thing {
            position: absolute;
            bottom: 0;
            left: 15;

            margin-bottom: 15px;
        }
    }

    .footer-middle-portion {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;

        flex-direction: column;
    }

    .footer-last-portion {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        .footer-text {
            margin-top: 10px;
            width: 60%;
            font-weight: bold;
        }
    }
`;

const LandingPageResponsiveWrapper = styled.div`

    * {
        margin: 0;
    }

    h1 {
        font-size: 7.3vw;
        font-weight: bold;
    }

    h2 {
        font-size: 3.1vw;
    }

    h3 {
        font-size: 25px;
    }
    
    /* going from larger to smaller values*/
    @media ${AspectConstants.ultrawide} {
        .whole-page {
            background-color: blue;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #landing-widget-page-section {
            width: 100vw;
            max-width: 1200px;
        }

        #all-projects-page-section {
            width: 100vw;
            max-width: 1200px;
        }

        #explore-projects-container {
            #explore-projects {
                font-size: 40px;
            }
        }

        #our-mission-text-main {
            font-size: 40px;
        }

        #take-a-look-h2 {
            font-size: 40px;
        }

        .our-mission-tile-component {
            width: 250px;
            height: 250px;
        }

        .project-section {
            flex-direction: column;
            padding-top: 50px;
            top: 0px;
            margin-bottom: 20px;

            .project-section-side-box {
                position: relative;
                height: auto;
                padding-bottom: 10px;
                padding-top: 10px;
                width: 600px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                top: 0%;
                left: 0%;

                h3 {
                    font-size: 25px;
                }

                h4 {
                    font-size: 18px;
                }

            }

            .project-section-side-box-main-text {
                position: relative;
                top: 0%;
                left: 0%;

                text-align: center;
                
            }

            .project-description-snippet {

                position: relative;
                padding-left: 50px;
                padding-right: 50px;

                h3 {
                    margin-bottom: 0px;
                    font-size: 25px;
                }

                h4 {
                    font-weight: normal;
                    padding-left: 0px;
                    padding-right: 0px;
                    text-align: center;
                    font-size: 15px;
                }

                h5 {
                    font-size: 20px;
                }
            }

            .current-project-box-description {
                position: relative;
                top: 0%;
                left: 0%;
                padding-top: 25px;
                width: 70vw;
                height: auto;
            }
        }
    }

    @media ${AspectConstants.desktopL} {
        .whole-page {
            background-color: cadetblue;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #landing-widget-page-section {
            width: 100vw;
            max-width: 1000px;
        }

        #all-projects-page-section {
            width: 100vw;
            max-width: 1000px;
        }

        #landing-page-main-text {
            font-size: 45px;
        }

        #landing-page-secondary-text {
            font-size: 25px;
        }

        #explore-projects-container {
            #explore-projects {
                font-size: 30px;
            }
        }

        #our-mission-text-main {
            font-size: 30px;
        }

        #take-a-look-h2 {
            font-size: 30px;
        }

        .our-mission-tile-component {
            width: 600px;
            height: auto;
            padding-bottom: 2vh;
            margin-bottom: 2vh;

            .header-wrapper {
                margin-bottom: 0px;
            }

            h3 {
                font-size: 25px;
            }

            h5 {
                font-size: 15px;
            }
        }

        #our-mission-tiles-container {
            flex-direction: column;
        }

        .wrap-project-tile-and-description {
            align-items: center;
            padding-left: 10px;
            padding-right: 10px;
        }
        

        .project-section {
            flex-direction: column;
            margin-top: 0px;
            top: 0px;
            margin-bottom: 20px;

            .project-section-side-box {
                position: relative;
                height: auto;
                padding-bottom: 10px;
                padding-top: 10px;
                width: 80vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                top: 0%;
                left: 0%;

                h3 {
                    font-size: 25px;
                }

                h4 {
                    font-size: 18px;
                }

            }

            .project-section-side-box-main-text {
                position: relative;
                top: 0%;
                left: 0%;

                text-align: center;
                
            }

            .project-description-snippet {

                position: relative;
                padding-left: 10px;
                padding-right: 10px;

                h3 {
                    margin-bottom: 0px;
                    font-size: 25px;
                }

                h4 {
                    font-weight: normal;
                    padding-left: 0px;
                    padding-right: 0px;
                    text-align: center;
                    font-size: 15px;
                }

                h5 {
                    font-size: 20px;
                }
            }

            .current-project-box-description {
                position: relative;
                top: 0%;
                left: 0%;
                padding-top: 25px;
                width: 70vw;
                height: auto;
            }
        }
    }

    @media ${AspectConstants.desktopS} {
        .whole-page {
            background-color: brown;
        }

        .landing-widget-nav {

            width: 100vw;
            display: flex;


            a {
                font-size: 2.5vw;
            }
        }

        #landing-page-main-text {
            font-size: 7vw;
        }

        #landing-page-secondary-text {
            font-size: 4vw;
        }

        #our-mission-text-main {
            font-size: 6vw;
        }

        #our-mission-text-description {
            font-size: 3vw;
        }

        #explore-projects-container {
            #explore-projects {
                font-size: 6vw;
            }
        }

        .our-mission-tile-component {
            width: 80vw;
            height: auto;
            padding-bottom: 2vh;
            margin-bottom: 2vh;

            .header-wrapper {
                margin-bottom: 0px;
            }

            h3 {
                font-size: 5vw;
            }

            h5 {
                font-size: 2.7vw;
            }
        }

        .wrap-project-tile-and-description {
            display: flex;
            flex-direction: column;
            height: auto;
            padding-top: 0px;
            align-items: center;
        }

        .project-section {
            flex-direction: column;
            margin-top: 0px;
            top: 0px;
            height: auto;

            .project-section-side-box {
                position: relative;
                height: 25vh;
                width: 80vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                top: 0%;
                left: 0%;

                h3 {
                    font-size: 5vw;
                }

                h4 {
                    font-size: 3vw;
                }

            }

            .project-section-side-box-main-text {
                position: relative;
                top: 0%;
                left: 0%;

                text-align: center;
                
            }

            .project-description-snippet {

                position: relative;

                h3 {
                    margin-bottom: 0px;
                    font-size: 4vw;
                }

                h4 {
                    font-weight: normal;
                    padding-left: 0px;
                    padding-right: 0px;
                    text-align: center;
                    font-size: 3vw;
                }

                h5 {
                    font-size: 3.5vw;
                }
            }

            .current-project-box-description {
                position: relative;
                top: 0%;
                left: 0%;
                padding-top: 25px;
                width: 70vw;
                height: auto;
            }
        }

        #our-mission-tile-component {
            width: auto;
            height: auto;
        }

        #our-mission-tiles-container {
            flex-direction: column;
        }

        #take-a-look-h2 {
            font-size: 5.5vw;
            margin-bottom: 40px;
        }

        /* part of the footer */
        .footer-bottom {
            flex-direction: column;

            .footer-left-portion {
                width: 100vw;
                margin-bottom: 20px;
            }

            .footer-middle-portion {
                margin-bottom: 20px;
                text-align: center;
            }

            .footer-last-portion {
                width: 100vw;
                margin-bottom: 50px;
            }
        }
    }

    @media ${AspectConstants.tabletS} {
        .whole-page {
            background-color: green;
        }

        .landing-widget-nav {

            width: 100vw;
            display: flex;


            a {
                font-size: 2.5vw;
            }
        }

        #landing-page-main-text {
            font-size: 7vw;
        }

        #landing-page-secondary-text {
            font-size: 4vw;
        }

        #our-mission-text-main {
            font-size: 6vw;
        }

        #our-mission-text-description {
            font-size: 3vw;
        }

        #explore-projects-container {
            #explore-projects {
                font-size: 6vw;
            }
        }

        .our-mission-tile-component {
            width: 80vw;
            height: auto;
            padding-bottom: 2vh;
            margin-bottom: 2vh;

            .header-wrapper {
                margin-bottom: 0px;
            }

            h3 {
                font-size: 5vw;
            }

            h5 {
                font-size: 2.7vw;
            }
        }

        .wrap-project-tile-and-description {
            display: flex;
            flex-direction: column;
            height: auto;
            padding-top: 0px;
            align-items: center;
        }

        .project-section {
            flex-direction: column;
            margin-top: 0px;
            top: 0px;
            height: auto;

            .project-section-side-box {
                position: relative;
                height: 25vh;
                width: 80vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                top: 0%;
                left: 0%;

                h3 {
                    font-size: 5vw;
                }

                h4 {
                    font-size: 3vw;
                }

            }

            .project-section-side-box-main-text {
                position: relative;
                top: 0%;
                left: 0%;

                text-align: center;
                
            }

            .project-description-snippet {

                position: relative;

                h3 {
                    margin-bottom: 0px;
                    font-size: 4vw;
                }

                h4 {
                    font-weight: normal;
                    padding-left: 0px;
                    padding-right: 0px;
                    text-align: center;
                    font-size: 3vw;
                }

                h5 {
                    font-size: 3.5vw;
                }
            }

            .current-project-box-description {
                position: relative;
                top: 0%;
                left: 0%;
                padding-top: 25px;
                width: 70vw;
                height: auto;
            }
        }

        #our-mission-tile-component {
            width: auto;
            height: auto;
        }

        #our-mission-tiles-container {
            flex-direction: column;
        }

        #take-a-look-h2 {
            font-size: 5.5vw;
            margin-bottom: 40px;
        }

        /* part of the footer */
        .footer-bottom {
            flex-direction: column;

            .footer-left-portion {
                width: 100vw;
                margin-bottom: 20px;
            }

            .footer-middle-portion {
                margin-bottom: 20px;
                text-align: center;
            }

            .footer-last-portion {
                width: 100vw;
                margin-bottom: 50px;
            }
        }

    }

    @media ${AspectConstants.tabletL} {
        .whole-page {
            background-color: purple;
        }
    }

    @media ${AspectConstants.mobileS} {
        .whole-page {
            background-color: blue;
        }

        #our-mission-text-description {
            font-size: 4vw;
        }

        .our-mission-tile-component {
            h5 {
                font-size: 3.5vw;
            }
        }
    }

    @media ${AspectConstants.mobileL} {
        .whole-page {
            background-color: yellow;
        }

        .landing-widget-nav {

            width: 100vw;
            display: flex;


            a {
                font-size: 3.2vw;
            }
        }

        .project-section {
            position: relative;
            height: auto;

            .project-section-side-box {
                position: relative;
                height: auto;
                width: 80vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                top: 0%;
                left: 0%;

                padding: 5vw;

            }

            .project-section-side-box-main-text {
                position: relative;
                top: 0%;
                left: 0%;

                text-align: center;
                
            }

            .project-description-snippet {

                position: relative;
                margin-top: 0vh;
                top: 0%;

                h3 {
                    margin-bottom: 0px;
                    font-size: 4.5vw;
                }

                h4 {
                    font-weight: normal;
                    padding-left: 0px;
                    padding-right: 0px;
                    text-align: center;
                    font-size: 3.5vw;
                }
            }

            .current-project-box-description {
                position: relative;
                top: 0%;
                left: 0%;
                padding-top: 25px;
                width: 70vw;
                height: auto;
            }
        }
    }
`;





// This acts as a navigation wrapper to pass into LandingPageMain, the actual page
// TODO: maybe find out a way to make this into a provider?
function LandingPage() {
    let navigate = useNavigate();

    function navigateToSignIn() {
        navigate('/sign_in');
    }

    return <LandingPageMain navigate={navigate}/>;
}


class LandingPageMain extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = props.navigate;
        this.handleSignIn = this.handleSignIn.bind(this);
        this.navigateToEventsMoreInfo = this.navigateToEventsMoreInfo.bind(this);
        this.navigateToGalleryMoreInfo = this.navigateToGalleryMoreInfo.bind(this);
        this.navigateToGiveMoreInfo = this.navigateToGiveMoreInfo.bind(this);
    }

    handleSignIn() {

        
        let curUser = getUser();

        if (curUser) {
            this.navigate('/dashboard/uid=' + curUser.uid);
        } else {
            this.navigate('/sign_in');
        }
    }

    navigateToEventsMoreInfo() {
        this.navigate('/events_more_info');
    }

    navigateToGiveMoreInfo() {
        this.navigate('/give_more_info');
    }

    navigateToGalleryMoreInfo() {
        this.navigate('/gallery_more_info');
    }

    render() {
        return (
            <LandingPageResponsiveWrapper>
                <ThemeConstantsWrapper>
                    <LandingWidget className="whole-page">
                            
                        {/* Title Text & Background */}
                        <LandingWidgetFirstPortion className="landing-widget-first-portion">
                            <div className="landing-widget-first-portion-intro-text-block">
                                <h1 id="landing-page-main-text">The Frisco Hospital Network</h1>
                                <h2 id="landing-page-secondary-text">Find ways you can help your community.</h2>
                            </div>
                        </LandingWidgetFirstPortion>

                        {/* Navigation Bar */}
                        <LandingWidgetNav className="landing-widget-nav">
                            <a onClick={this.navigateToGalleryMoreInfo}>Community Gallery</a>
                            <LandingWidgetNavSpacer/>
                            <a onClick={this.navigateToEventsMoreInfo}>Local Events</a>
                            <LandingWidgetNavSpacer/>
                            <a onClick={this.navigateToGiveMoreInfo}>Give</a>
                            <LandingWidgetNavSpacer/>
                            <a onClick={this.handleSignIn}>Sign In</a>
                            <LandingWidgetNavSpacer/>
                        </LandingWidgetNav>

                        {/* Our Mission Container */}
                        <LandingWidgetOurMissionPortion id="landing-widget-page-section">
                            <OurMissionTextHeaderBox>
                                <div id="our-mission-text-header-box">
                                    <h2 id="our-mission-text-main">Our Mission</h2>
                                    <h3 id="our-mission-text-description">Hospitals are home to many inspiring and hard-working people, and we believe it is important to recognize and appreciate these community heroes. By making community engagement easier to access, FHN is an effort to bring the hospital community closer together than it has ever been before. Our goal is to provide a platform that can empower the community, allowing anyone to help each other in any way they can.</h3>
                                </div>
                            </OurMissionTextHeaderBox>


                            <div id="explore-projects-container">
                                <h3 id="explore-projects">Explore our current projects</h3>
                                <OurMissionTilesContainer id="our-mission-tiles-container">
                                    <OurMissionTile name="Gallery" className="our-mission-tile"/>
                                    <OurMissionTile name="Volunteer" className="our-mission-tile"/>
                                    <OurMissionTile name="Donate" className="our-mission-tile"/>
                                </OurMissionTilesContainer>
                            </div>

                        </LandingWidgetOurMissionPortion>

                        {/* All Projects Section */}
                        <AllProjectsLandingPagePortion id="all-projects-page-section">
                            <h2 id="take-a-look-h2">More About Our Current Projects</h2>
                            <GalleryProjectSectionWrapper>
                                {/* <GalleryScroll/> */}
                                <ProjectSection name="gallery"/>
                                
                            </GalleryProjectSectionWrapper>
                            
                            <ProjectSection name="volunteer"/>
                            <ProjectSection name="donate"/>
                        </AllProjectsLandingPagePortion>

                        {/* Footer Section */}
                        <FooterLandingPagePortion className="footer-bottom">
                            <div className="footer-left-portion">
                                <h3>Connect:</h3>
                                <div className="logo-container">
                                    <img src={instaLogo} className = "connect-logos" id="insta-readjust"></img>
                                    <img src={facebookLogo} className = "connect-logos" id="facebook-readjust"></img>
                                </div>

                                <div id="copyright-thing">
                                    &#169; FriscoHospitalNetwork 2022
                                </div>
                                
                            </div>
                            <div className="footer-middle-portion">

                                <h3>About Us:</h3>
                                <div>
                                    <h4>Contact:</h4>
                                    <h4>contact@friscohospitalnetwork.org</h4>

                                    <h4>Our Story:</h4>
                                    <a>Who we are</a>
                                </div>
                                

                            </div>
                            <div className="footer-last-portion">
                                <div className="footer-text">
                                    Frisco Hospital Network does not represent the City of Frisco and is an independent organization.
                                </div>
                                <div className="footer-text">
                                    If you are interested in our mission please consider <NavLink className='navbar-item' activeClassName='is-active' to='/'>volunteering</NavLink> for us.
                                </div>
                                
                            </div>
                        </FooterLandingPagePortion>

                    </LandingWidget>
                </ThemeConstantsWrapper>
            </LandingPageResponsiveWrapper>
        )
    }
}

export default LandingPage;