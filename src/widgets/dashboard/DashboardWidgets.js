import React, {useState, useEffect} from "react";
import styled from "styled-components";


/*
    stuff that i am writing to the database
*/
import {writeUserCommitmentData, readSuggestedData, writeNewDocument, readDocumentData, getUser} from '../../firebase/FireBaseInstance.js';

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

    .tile-title {
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

const SuggestedTile = styled(BaseTile)`
    h2 {
        
    }
`;

const MyCommitmentsTile = styled(SuggestedTile)`

`;

const ActivityTile = styled(BaseTile)`
`;

const ContactUsTile = styled(BaseTile)`
`;  

const SuggestedTileItem = styled.div`
    h2 {
        font-size: 25px;
    }

    h3 {
        font-size: 15px;
        width: 80%;
    }

    h5 {
        margin-bottom: 8px;
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

async function getSuggestedList() {
    const res = await readSuggestedData();
    return res;
}

// general idea of suggested tile and the blueprint for me to do the rest of the firebase stuff... for now i need to work on designing
export function SuggestedTileReplacement() {

    const [data, setData] = useState([]);

    const SuggestedItems = [];

    if (data.length == 0) {
        getSuggestedList().then(
            (result) => {
                console.log('seeing if there is somethinig lol');
                console.log(result);
                let something = [];


                result.forEach(

                    (dictItem) => {
                        something.push(
                            <SuggestedTileItem className="suggested-tile-item">
                                <h2>{dictItem.title}</h2>
                                <h5>{dictItem.tag} | {dictItem.date}</h5>
                                <h3>{dictItem.description}</h3>
                            </SuggestedTileItem>
                        )
                    }
                )

                console.log('hi there');
    
                setData(something);
            }
        );
    }

    return (
        <SuggestedTile>
            <h2 className="tile-title">Suggested</h2>
            <div className="align-center">
                {data}
            </div>
        </SuggestedTile>
    );
}



/*

    Tile items for rendering go here

    SuggestedTileReplacement
    MyCommitementsTileReplacement
    ActivityTileReplacement
    ContactUsTileReplacement

*/
function writeDocument(path, data) {
    writeNewDocument(path, data);
    console.log('written');
}





export function MyCommitementsTileReplacement() {

    let commitementTiles = [];

    readDocumentData('users/' + getUser().uid + '/commitments/one').then(
        (result) => {
            console.log('reading the document data hahahaha');
        }
    )




    return (
        <SuggestedTile>

            <h2 className="tile-title">My Commitments</h2>
            <div className="align-center">
                <SuggestedTileItem className="suggested-tile-item">
                    <h2>Activity 1</h2>
                    <h3>This is some text to replace whatever is in activity 1 and if there is more to say then truncate with (...)</h3>
                </SuggestedTileItem>
            </div>
        </SuggestedTile> 
    );
}

export function ActivityTileReplacement() {
    return (
        <SuggestedTile>

            <h2 className="tile-title">My Activity</h2>
            <div className="align-center">
                <SuggestedTileItem className="suggested-tile-item">
                    <h2>Get Started</h2>
                    <h3>Learn about your community by reading stories, writing letters, and learning about our Frisco clinics!</h3>
                </SuggestedTileItem>
            </div>
        </SuggestedTile> 
    )
}

export function ContactUsTileReplacement() {
    return (
        <SuggestedTile>

            <h2 className="tile-title">Contact Us</h2>
            <div className="align-center">
                there will be links here that guide user to right place
            </div>
        </SuggestedTile> 
    )
}