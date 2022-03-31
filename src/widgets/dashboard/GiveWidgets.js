import React, {useEffect, useState} from "react";
import styled from 'styled-components';


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
            <h2>List of Donation Items</h2>
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
    return (
        <GiveTile>
            <h2 id="tile-title">Donate Now!</h2>
            <div className="align-center">
                <a>If you have something to donate, please fill out this form and we will contact you shortly!</a>
                <button>Go to Form</button>
            </div>
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
        <GiveTile>
            <h2 id="tile-title">Visit Donation Pages</h2>
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