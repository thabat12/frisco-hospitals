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

/*
    LandingPage.js File Contents:

        Design
        - Responsive Constants CSS Wrapper
        - Theme Constants CSS Wrapper
        - Styled Div Elements

        Backend
        - Firebase DB Handler
*/

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
            background-color: black;
        }
    }

    @media ${AspectConstants.desktopL} {
        .whole-page {
            background-color: cadetblue;
        }
    }

    @media ${AspectConstants.desktopS} {
        .whole-page {
            background-color: brown;
        }
    }

    @media ${AspectConstants.tabletS} {
        .whole-page {
            background-color: green;
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
    }

    @media ${AspectConstants.mobileL} {
        .whole-page {
            background-color: yellow;
        }
    }
`;


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

    #landing-page-secondary-text {
        text-align: center;
    }
`;

const LandingWidgetOurMissionPortion = styled.div`
    position: relative;
    height: 40vh;
    width: 100vw;

    display: flex;
    flex-direction: row;
`;

const OurMissionTextHeaderBox = styled.div`
    position: relative;
    width: 25vw;
    height: 100%;

    
    /* had to make this container absolute kind of hard-coding it for now */
    #our-mission-text-header-box {
        position: absolute;
        width: 100%;

        top: 30%;
    }

    #our-mission-text-main {
        text-align: center;
    }

    #our-mission-text-description {
        text-align: center;
    }
`;

// flex grow is going to be 1 here so i dont need to recalculate everything redundantly
const OurMissionTilesContainer = styled.div`
    position: relative;
    height: 100%;
    flex-grow: 1;

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
        height: 60vh;

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
    }

    .project-section-side-box-main-text {
        position: absolute;
        width: 70%;

        top: 30%;
        left: 5%;
    }
`;

/*
    !!!
    This is the end of the project section portion of the landing page
    !!!
*/


const FooterLandingPagePortion = styled.div`
    width: 100vw;
    height: 50vh;
    background-color: red;
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
    }

    handleSignIn() {

        
        let curUser = getUser();

        if (curUser) {
            this.navigate('/dashboard/uid=' + curUser.uid);
        } else {
            this.navigate('/sign_in');
        }
    }

    render() {
        return (
            <LandingPageResponsiveWrapper>
                <ThemeConstantsWrapper>
                    <LandingWidget className="whole-page">
                            
                        {/* Title Text & Background */}
                        <LandingWidgetFirstPortion className="landing-widget-first-portion">
                            <div className="landing-widget-first-portion-intro-text-block">
                                <h1 id="landing-page-main-text">Frisco Hospitals</h1>
                                <h2 id="landing-page-secondary-text">A Farzaan Abhinav</h2>
                            </div>
                        </LandingWidgetFirstPortion>

                        {/* Navigation Bar */}
                        <LandingWidgetNav className="landing-widget-nav">
                            <a>Community Gallery</a>
                            <LandingWidgetNavSpacer/>
                            <a>Local Events</a>
                            <LandingWidgetNavSpacer/>
                            <a>Give</a>
                            <LandingWidgetNavSpacer/>
                            <a onClick={this.handleSignIn}>Sign In</a>
                            <LandingWidgetNavSpacer/>
                        </LandingWidgetNav>

                        {/* Our Mission Container */}
                        <LandingWidgetOurMissionPortion>
                            <OurMissionTextHeaderBox>
                                <div id="our-mission-text-header-box">
                                    <h2 id="our-mission-text-main">Our Mission</h2>
                                    <h3 id="our-mission-text-description">this is the text that will stand in place of the our mission text</h3>
                                </div>
                            </OurMissionTextHeaderBox>
   
                            <OurMissionTilesContainer>
                                <OurMissionTile name="Gallery" className="our-mission-tile"/>
                                <OurMissionTile name="Volunteer" className="our-mission-tile"/>
                                <OurMissionTile name="Donate" className="our-mission-tile"/>
                            </OurMissionTilesContainer>
                        </LandingWidgetOurMissionPortion>

                        {/* All Projects Section */}
                        <AllProjectsLandingPagePortion>
                            <h2 id="take-a-look-h2">Take A Look At Our Current Projects</h2>
                            <ProjectSection name="gallery"/>
                            <ProjectSection name="volunteer"/>
                            <ProjectSection name="donate"/>
                        </AllProjectsLandingPagePortion>

                        {/* Footer Section */}
                        <FooterLandingPagePortion/>

                    </LandingWidget>
                </ThemeConstantsWrapper>
            </LandingPageResponsiveWrapper>
        )
    }
}

export default LandingPage;