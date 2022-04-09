import React from 'react';
import styled from 'styled-components';

import { AspectConstants } from '../global/ResponsiveConstants';

import oneIcon from '../icons/numbers/one.svg';
import twoIcon from '../icons/numbers/two.svg';
import threeIcon from '../icons/numbers/three.svg';
import fourIcon from '../icons/numbers/four.svg';

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

    .steps-involved-block {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        text-align: center;
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

const GalleryMoreInfoWidget = styled.div`
    width: 100vw;
    height: 100vh;
`;

const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 100vw;

`;

const StepTile = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    text-align: start;

    background-color: white;
    width: 40%;

    .number-icon {
        width: 50px;
        height: 50px;
    }

`;


// trying a new strategy of just assigning class names rather than styled components
export default function GalleryMoreInfoPage() {
    return (
        <GalleryPageResponsiveWrapper>
            <GalleryMoreInfoWidget className='whole-page'>
                <div>Local Events and Volunteering</div> 
                <div>
                    <div>
                        <h3>How It Works</h3>
                    </div>

                    <div>
                        <div>
                            <h4>Finding ways to get involved with the community directly benefits the Frisco community bond. We offer volunteering opportunities and local events in general to bring communities together, learn from each other, and organize a culture of trust and cooperation. Our volunteering events project is an effort to bring this sort of cooperation into the clinic and hospital scene as well.</h4>
                        </div>

                        <div>
                            <h4>Oftentimes, hospital work environments are isolated from the rest of the community, but by providing opportunities for Frisco community members to join together and lend a helping hand, we hope that the volunteering event project will help bring awareness and community into the hospital scene as well. Our volunteering event page is updated weekly with new information on how to get involved.</h4>
                        </div>
                    </div>
                    
                    <div>
                        <div className='steps-involved-block'>
                            <h3>How can I get started?</h3>

                            <h4>Our process for getting involved with the community is open for anyone to contribute. Simply log into the FHN dashboard, either through making you own account or by logging in as a guest and follow these instructions:</h4>

                            <StepWrapper>
                                <StepTile>
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

                                <StepTile>
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

                                <StepTile>
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
            </GalleryMoreInfoWidget>
        </GalleryPageResponsiveWrapper>
    );
}