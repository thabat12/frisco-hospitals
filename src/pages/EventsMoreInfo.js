import React from 'react';
import styled from 'styled-components';

import { AspectConstants } from '../global/ResponsiveConstants';

import oneIcon from '../icons/numbers/one.svg';
import twoIcon from '../icons/numbers/two.svg';
import threeIcon from '../icons/numbers/three.svg';
import fourIcon from '../icons/numbers/four.svg';
import { useNavigate } from 'react-router-dom';

const GalleryPageResponsiveWrapper = styled.div`

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
        font-weight: bold;
    }
    h4 {
        font-weight: normal;
    }

    .whole-page-contents {
        width: 90%;
        margin-top: 10px;
    }

    .page-type {
        width: 100%;
        padding-bottom: 50px;
        padding-top: 50px;
        background-color: white;
        margin-bottom: 50px;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .inside-page-type {
            position: relative;
            width: 90%;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }

    .steps-involved-block {
        
    }

    .first-title-section {
        margin-bottom: 15px;
    }

    .first-description-section {
        font-size: 20px;
        width: 100%;
    }

    .first-description {
        margin-top: 8px;
    }

    .second-title-section {
        margin-top: 25px;
        margin-bottom: 10px;
    }

    .second-description { 
        margin-bottom: 25px;
        font-size: 20px;
    }

    .whole-page {
        overflow-y: auto;
        padding-bottom: 50px;
    }

    .nav-tile {
        font-weight: bold;
        font-size: 15px;

        transition: 3s;

        transition: 0.3s linear;

        padding: 0.5em;
        border-radius: 10px;

        cursor: pointer;
    }

    .nav-tile:hover {
        font-weight: bold;
        font-size: 15px;

        background-color: rgba(0,0,0,0.1);
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

        .step-tile {
            width: 90%;
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

const GalleryMoreInfoWidget = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;

    .step-tile {
        transition: 0.3s transform linear;
        transform: scale(1.0);
    }

    .step-tile:hover {
        transform: scale(1.05);
    }

`;

const StepTile = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    text-align: start;
    padding-right: 5%;

    background-color: white;
    width: 50%;

    margin-top: 15px;
    padding: 10px;
    border-radius: 10px;

    .number-icon {
        width: 50px;
        height: 50px;
    }

    h4 {
        font-size: 20px;
    }

`;


// trying a new strategy of just assigning class names rather than styled components
export default function GalleryMoreInfoPage() {

    const nav = useNavigate();

    const goBack = () => {
        nav('/');
    }


    return (
        <GalleryPageResponsiveWrapper>
            <GalleryMoreInfoWidget className='whole-page'>

            <div className='page-type'>
                <div className='inside-page-type'>
                    <h3>Local Events and Volunteering</h3>
                    <div className='nav-tile' onClick={goBack}>Go Back</div>
                </div>
            </div> 


                <div className='whole-page-contents'>

                    <div>
                        <div className='first-title-section'>
                            <h3>How It Works</h3>
                        </div>

                        <div className='first-description-section'>
                            <div className='first-description'>
                                <h4>Finding ways to get involved with the community directly benefits the Frisco community bond. We offer volunteering opportunities and local events in general to bring communities together, learn from each other, and organize a culture of trust and cooperation. Our volunteering events project is an effort to bring this sort of cooperation into the clinic and hospital scene as well.</h4>
                            </div>

                            <div className='first-description'>
                                <h4>Oftentimes, hospital work environments are isolated from the rest of the community, but by providing opportunities for Frisco community members to join together and lend a helping hand, we hope that the volunteering event project will help bring awareness and community into the hospital scene as well. Our volunteering event page is updated weekly with new information on how to get involved.</h4>
                            </div>
                        </div>
                        
                        <div>
                            <div className='steps-involved-block'>
                                <h3 className='second-title-section'>How can I get started?</h3>

                                <h4 className='second-description'>Our process for getting involved with the community is open for anyone to contribute. Simply log into the FHN dashboard, either through making you own account or by logging in as a guest and follow these instructions:</h4>

                                <StepWrapper>
                                <StepTile className='step-tile'>
                                    <div className='left-tile'>
                                        <img src={oneIcon} className='number-icon'></img>
                                    </div>


                                    <div className='middle-tile'>
                                        <div className='tile-title'>
                                            <h3>Log into the FHN Dashboard</h3>
                                        </div>
                                        <div className='tile-description'>
                                            <h4>You may also log in as a guest (without making an official account with us) to view the current opportunities, but to be able to save commmitments you must be a registered user.</h4>
                                        </div>
                                    </div>


                                    <div className='end-tile'>

                                    </div>

                                    
                                </StepTile>

                                <StepTile className='step-tile'>
                                    <div className='left-tile'>
                                        <img src={twoIcon} className='number-icon'></img>
                                    </div>


                                    <div className='middle-tile'>
                                        <div className='tile-title'>
                                            <h3>Sign Up for Volunteering Events</h3>
                                        </div>
                                        <div className='tile-description'>
                                            <h4>In the dashboard, you are able to navigate over to the volunteering tab and search through our list of current volunteering opportunities. Select ones that you like and follow the prompts to save your commitments to volunteering events.</h4>
                                        </div>
                                    </div>


                                    <div className='end-tile'>

                                    </div>

                                    
                                </StepTile>

                                <StepTile className='step-tile'>
                                    <div className='left-tile'>
                                        <img src={threeIcon} className='number-icon'></img>
                                    </div>


                                    <div className='middle-tile'>
                                        <div className='tile-title'>
                                            <h3>Wait for a Confirmation Email</h3>
                                        </div>
                                        <div className='tile-description'>
                                            <h4>After signing up to an event of your choice, you will receive a confirmation email for your commitment. You will also see that you have signed up for a volunteering event on your "Dashboard" section page, where you can save it onto your personal/ Google calendar.</h4>
                                        </div>
                                    </div>


                                    <div className='end-tile'>

                                    </div>

                                    
                                </StepTile>
                            </StepWrapper>
                                
                                
                            </div>
                        </div>

                    </div>
                </div>
            </GalleryMoreInfoWidget>
        </GalleryPageResponsiveWrapper>
    );
}