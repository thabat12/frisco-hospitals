import React, {useEffect, useState} from "react";
import styled from 'styled-components';

import xIcon from '../../icons/x.svg';

const BaseTile = styled.div`

    position: relative;
    display: flex;
    border-radius: 5px;
    background-color: white;
    flex-direction: column;
    width: 90%;
    justify-items: center;
    padding: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 15px;

    #tile-title {
        text-shadow: 2px 3px 10px rgba(0,0,0,0.2);
        margin-left: 10px;
    }

    .suggested-tile-item {
        transition: box-shadow, transform 0.2s;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transform: scale(1);
        backface-visibility: hidden;
    }

    .suggested-tile-item:hover {
        box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
        transform: scale(1.02) translateZ(0);
    }

    .align-center {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
`;

const BaseTileVariantTwoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 15px;
`;

const BaseTileSubTile = styled(BaseTile)`
    margin-bottom: 15px;
`;

const GiveTile = styled(BaseTile)`

`;

const GiveTileItem = styled.div`
    h2 {
        font-size: 25px;
    }

    h3 {
        font-size: 15px;
        width: 80%;
    }

    position: relative;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-top: 2em;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    

    border-style: solid;
    border-width: 2px;
    border-radius: 5px;
`;

const ActionPageWrapper = styled.div`

    @keyframes enter-focus-keyframe {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes exit-focus-keyframe {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    .enter-focus-animation {
        animation: enter-focus-keyframe ease 0.4s;

        opacity: 1;
    }

    .exit-focus-animation {
        animation: exit-focus-keyframe ease 0.4s;

        opacity: 0;
    }

`;

const ActionPage = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    left: 0%;
    top: 0%;

    background-color: red;

    /* a very large z index to make sure it is at the front */
    z-index: 100;

    background: rgba( 100, 100, 100, 0.9 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );


`;

const FocusSection = styled.div`

    display: flex;
    position: relative;
    flex-direction: column;

    width: 90%;
    height: 80%;
    border-radius: 15px;

    background-color: white;
    box-shadow: 1px 2px 3px 4px rgba(12,12,12,0.2);

    .focus-top-bar {
        position: relative;
        width: 100%;
        height: 10%;

        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
    }

    .x-icon {
        height: 65%;
        margin-right: 15px;

        transition: 0.2s linear;
        transform: scale(1.0);
    }

    .x-icon:active {
        height: 65%;
        margin-right: 15px;

        transform: scale(0.8);
    }

    .focus-middle-section {
        width: 100%;
        flex-grow: 1;
        border-radius: 15;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;

export function RequestedItemListReplacement() {

    const donationItemList = [
        'new books', 'magazines', 'playing cards', 'puzzles', 'care kits (ex. toothbrush, deodorant, soap, etc.)', 'art supplies', 'blankets/quilts'
    ];

    let donationItemsListRep = donationItemList.map(
        item => {
            return <li>{item}</li>;
        }
    );


    return (
        <BaseTileVariantTwoWrapper>
            <h2 className="tile-title">List of Donation Items</h2>
            {/* generate list of items here, will not be too large (hopefully for now) */}
            <BaseTileSubTile className="donation-item-list-container">
                <h3>Below are the acceptable list of items that we accept</h3>
                <ul>
                    {donationItemsListRep} 
                </ul>
                <h4>If you wish to donate to us, please follow the steps on the "Donate Now" segment</h4>
            </BaseTileSubTile>
        </BaseTileVariantTwoWrapper>
    );
}


export function DonateQueryReplacement() {

    const [trigger, setTrigger] = useState(false);
    const [focusRenderState, setFocusRenderState] = useState('enter-focus-animation');

    function closeFocusActionPage() {
        
        setFocusRenderState('exit-focus-animation');

        // TODO: after the focus screen will exit, have to delete the 
        // component so user can still interact with the screen

        const intervalID = setInterval(
            () => {
                setTrigger(false);
                // this seems to work becuase this is anonymous function
                clearInterval(intervalID);
            }, 400
        );
    }

    return (
        <GiveTile className='back-tile'>
            <h2 className="tile-title">Donate Now!</h2>
            <div className="align-center">
                <a id="something-to-donate">If you have something to donate, please fill out this form and we will contact you shortly!</a>
                <button id="btn-go-to-form" onClick={() => { setTrigger(true); setFocusRenderState('enter-focus-animation'); }}>Go to Form</button>
            </div>

            {
                (trigger === true) && 
                    <ActionPageWrapper>
                        <ActionPage className={'action-page-component' + ' ' + focusRenderState}>
                            <FocusSection>
                                <div className='focus-top-bar'>
                                        <img src={xIcon} className='x-icon' onClick={closeFocusActionPage}></img>
                                </div>
                            </FocusSection>
                        </ActionPage>
                    </ActionPageWrapper>
            }


        </GiveTile> 
    );
}

// some specific stuff for the donation pages 

const DonateLinkTile = styled.div`



`;

function navigateToLink(link) {
    window.location = link;
}

function navigateToScottishRite() {
    window.location = 'https://scottishriteforchildren.org/get-involved';
}

export function DonationPagesReplacement() {
    return (
        <GiveTile className='back-tile'>
            <h2 className="tile-title">Visit Donation Pages</h2>
            <div className="align-center">

                <div className='visit-donation-page-tile' onClick={() => { navigateToLink('https://scottishriteforchildren.org/get-involved') }}>
                    <h3>Scottish Rite</h3>
                </div>

                <div className='visit-donation-page-tile' onClick={() => { navigateToLink('https://www.childrens.com/get-involved')}}>
                    <h3>Children's Hospital</h3>
                </div>

                <div className='visit-donation-page-tile' onClick={ () => { navigateToLink('https://medicalcityhealthcare.com/locations/medical-city-frisco/patients-visitors/volunteer-services/') } }>
                    <h3>Medical City Frisco</h3>
                </div>

                <div className='visit-donation-page-tile' onClick={ () => { navigateToLink('https://friscofamilyservices.org/what_you_can_do/volunteer/volunteer.html') } }>
                    <h3>Frisco Family Services</h3>
                </div>

            </div>
        </GiveTile> 
    );
}