import React from 'react';
import styled from 'styled-components';

import { AspectConstants } from '../global/ResponsiveConstants';
import ThemeConstants from '../global/ThemeConstants';

import oneIcon from '../icons/numbers/one.svg';
import twoIcon from '../icons/numbers/two.svg';
import threeIcon from '../icons/numbers/three.svg';
import fourIcon from '../icons/numbers/four.svg';
import { useNavigate } from 'react-router-dom';

const GalleryPageResponsiveWrapper = styled.div`

    * {
        margin: 0;
    }

    body {
        overflow-y: hidden;
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
                        <h3>Give to the Community</h3>
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
                                <h4>Donations are a standard way to contribute to hospitals. Being a local-based organization, we want to take this a step further. Through FHN, you are able to track your donations and see how your contributions made a direct effect on the hospital/ clinic community. Our donation project aims to bring more resources to hospitals but also allow people to have more access and transparency to how their efforts affect their community.</h4>
                            </div>

                            <div className='first-description'>
                                <h4>We take advantage of being a locally based organization and handle donations that are aimed for specific needs for hospitals and clinics in Frisco. That meanst that you are able to donate books, board games, care packages, and anything else directly to a hospital/ clinic near you, or to local donation hub locations that FHN organizes for you.</h4>
                            </div>
                        </div>
                        
                        <div>
                            <div className='steps-involved-block'>
                                <h3 className='second-title-section'>How can I get started?</h3>

                                <h4 className='second-description'>Our process for donating items is still relatively new, so this is currently how we handle donations and what you should expect:</h4>

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
                                                <h4>You must have a registered account to be able to send donations to local hospitals.</h4>
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
                                                <h3>Send a Donation Query</h3>
                                            </div>
                                            <div className='tile-description'>
                                                <h4>Donations can be very specific to different hospital requirements, so we request that you send in a query detailing what your donation is and its possible use cases.</h4>
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
                                                <h4>If your donation is approved, then you will receive a confirmation email with further steps on the process of the donation. In this email, expect to be sent to a link with options on locations that you are able to donate to and the method of dropping your items.</h4>
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
                                                <h3>Send Your Donation</h3>
                                            </div>
                                            <div className='tile-description'>
                                                <h4>For the physcial donation, you can either (1) donate the items to the location yourself, (2) have one of our volunteers pick up the donation, or (3) drop off the donation in one of the donation hubs that we set up which will be described in the confirmation email.</h4>
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