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
    }
`;

const BaseTileVariantTwoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 15px;
`;

const BaseTileSubTile = styled(BaseTile)`

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
    return (
        <BaseTileVariantTwoWrapper>
            <h2>List of Donation Items</h2>
            {/* generate list of items here, will not be too large (hopefully for now) */}
            <BaseTileSubTile>
            </BaseTileSubTile>
        </BaseTileVariantTwoWrapper>
    );
}

export function DonationPagesReplacement() {
    return (
        <GiveTile>
            <h2 id="tile-title">Visit Donation Pages</h2>
            <div className="align-center">
                <a>[tell them they can place email in some pop-up and thats good]</a>
            </div>
        </GiveTile> 
    );
}

export function DonateQueryReplacement() {
    return (
        <GiveTile>
            <h2 id="tile-title">Donate Now!</h2>
            <div className="align-center">
                <a>[tell them they can place email in some pop-up and thats good]</a>
            </div>
        </GiveTile> 
    );
}