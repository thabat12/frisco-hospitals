import React from 'react';
import styled from 'styled-components';

import { AspectConstants } from '../global/ResponsiveConstants';

import oneIcon from '../icons/numbers/one.svg';
import twoIcon from '../icons/numbers/two.svg';
import threeIcon from '../icons/numbers/three.svg';
import fourIcon from '../icons/numbers/four.svg';
import { useNavigate } from 'react-router-dom';

import galleryBackground from '../images/gallery.png';
import ThemeConstants from '../global/ThemeConstants';

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


            .gallery-background {
                position: absolute;
                height: 100%;
            }
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

        background-color: ${ThemeConstants.secondaryBackgroundColorDarkerBlue};
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
            /* background-color: black; */
        }
    }

    @media ${AspectConstants.desktopL} {
        .whole-page {
            /* background-color: cadetblue; */
        }
    }

    @media ${AspectConstants.desktopS} {
        .whole-page {
            /* background-color: brown; */
        }
    }

    @media ${AspectConstants.tabletS} {
        .whole-page {
            /* background-color: green; */
        }

        .step-tile {
            width: 90%;
        }
    }

    @media ${AspectConstants.tabletL} {
        .whole-page {
            /* background-color: purple; */
        }
    }

    @media ${AspectConstants.mobileS} {
        .whole-page {
            /* background-color: blue; */
        }
    }

    @media ${AspectConstants.mobileL} {
        .whole-page {
            /* background-color: yellow; */
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
                        <h3>The Community Gallery</h3>
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
                                <h4>The community gallery is a major part of our goal to raise awareness to hospitals and clinics across the Frisco community. Being able to show appreciation for hospital workers goes a long way in fostering a healthy community atmosphere, and through your contributions of artwork we will be able to show that we care about our healthcare workers!</h4>
                            </div>

                            <div className='first-description'>
                                <h4>Establishing a community presence in hopsitals is crucial for everyone, and has been scientifically proven to ease stress, anxiety, and depression among healthcare workers and patients alike*. We are launching our community gallery campaign to address these goals that will ultimately strengthen the community involvement across Frisco.</h4>
                            </div>
                        </div>
                        
                        <div>
                            <div className='steps-involved-block'>
                                <h3 className='second-title-section'>How can I get started?</h3>

                                <h4 className='second-description'>Our process for submitting artwork is made to be simple and easy! Here are the following ways that you can submit artwork to a hospital display near you:</h4>

                                <StepWrapper className='step-wrapper'>
                                    <StepTile className='step-tile'>
                                        <div className='left-tile'>
                                            <img src={oneIcon} className='number-icon'></img>
                                        </div>


                                        <div className='middle-tile'>
                                            <div className='tile-title'>
                                                <h3>Log into the FHN Dashboard</h3>
                                            </div>
                                            <div className='tile-description'>
                                                <h4>You must have a registered account to be able to send any submissions to the FHN. After you create an account, you will be able to find the gallery project under the "Gallery" tab.</h4>
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
                                                <h3>Submit a Picture of Your Artwork</h3>
                                            </div>
                                            <div className='tile-description'>
                                                <h4>In the dashboard, you are able to submit a digital image of your work, which will be sent for review to our team. The status of your submission can be seen on the user dashboard.</h4>
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
                                                <h4>If you receive a confirmation email about the status of your submission, then you are approved! You may choose from a selection of options in the email for further steps and where you want to display your artwork.</h4>
                                            </div>
                                        </div>


                                        <div className='end-tile'>

                                        </div>

                                        
                                    </StepTile>

                                    <StepTile className='step-tile'>
                                        <div className='left-tile'>
                                            <img src={fourIcon} className='number-icon'></img>
                                        </div>


                                        <div className='middle-tile'>
                                            <div className='tile-title'>
                                                <h3>Display Your Work</h3>
                                            </div>
                                            <div className='tile-description'>
                                                <h4>Your can either display your work through the online gallery or in person, whichever choice you decide. When your </h4>
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