import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { readVolunteeringOpportunities } from "../../firebase/FireBaseInstance";


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


const VolunteerTile = styled(BaseTile)`

`;



const VolunteerTileItem = styled.div`
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

export function CurrentOpportunitiesTileReplacement() {

    const [data, setData] = useState([]);

    console.log('get volunteering opportunities');
    console.log(readVolunteeringOpportunities)
    readVolunteeringOpportunities().then(
        (result) => {
            console.log('result is');
            console.log(result);
            let something = [];

            result.forEach(
                (dictItem) => {
                    something.push(
                        <BaseTileSubTile className="base-tile-subtile">
                            <h2>{dictItem.title}</h2>
                            <h5>{dictItem.date}</h5>
                            <h5>{dictItem.description}</h5>
                        </BaseTileSubTile>
                    );
                }
            );


            setData(something);
        }
    );

    return (
        <BaseTileVariantTwoWrapper>
            <h2>Current Opportunitites</h2>
            {/* generate list of items here, will not be too large (hopefully for now) */}
            {data}
        </BaseTileVariantTwoWrapper>
    );
}

export function MoreUpdatesTileReplacement() {
    return (
        <VolunteerTile>
            <h2 id="tile-title">Subscribe to more updates!</h2>
            <div className="align-center">
                <a>[tell them they can place email in some pop-up and thats good]</a>
            </div>
        </VolunteerTile> 
    );
}