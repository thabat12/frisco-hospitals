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
                <div>Give to the Community</div> 
                <div>
                    <div>
                        <h3>How It Works</h3>
                    </div>

                    <div>
                        <div>
                            <h4>Donations are a standard way to contribute to hospitals. Being a local-based organization, we want to take this a step further. Through FHN, you are able to track your donations and see how your contributions made a direct effect on the hospital/ clinic community. Our donation project aims to bring more resources to hospitals but also allow people to have more access and transparency to how their efforts affect their community.</h4>
                        </div>

                        <div>
                            <h4>We take advantage of being a locally based organization and handle donations that are aimed for specific needs for hospitals and clinics in Frisco. That meanst that you are able to donate books, board games, care packages, and anything else directly to a hospital/ clinic near you, or to local donation hub locations that FHN organizes for you.</h4>
                        </div>
                    </div>
                    
                    <div>
                        <div className='steps-involved-block'>
                            <h3>How can I get started?</h3>

                            <h4>Our process for donating items is still relatively new, so this is currently how we handle donations and what you should expect:</h4>

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
                                            <h4>You must have a registered account to be able to send donations to local hospitals.</h4>
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
                                            <h3>Send a Donation Query</h3>
                                        </div>
                                        <div className='tile-description'>
                                            <h4>Donations can be very specific to different hospital requirements, so we request that you send in a query detailing what your donation is and its possible use cases.</h4>
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
                                            <h4>If your donation is approved, then you will receive a confirmation email with further steps on the process of the donation. In this email, expect to be sent to a link with options on locations that you are able to donate to and the method of dropping your items.</h4>
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
            </GalleryMoreInfoWidget>
        </GalleryPageResponsiveWrapper>
    );
}