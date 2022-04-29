import React, {useState, useEffect} from "react";
import styled from "styled-components";


/*
    stuff that i am writing to the database
*/
import {writeUserCommitmentData, readSuggestedData, writeNewDocument, readDocumentData, getUser, readCommitmentData, readActivityData} from '../../firebase/FireBaseInstance.js';

import xIcon from '../../icons/x.svg';

const BaseTile = styled.div`

    cursor: pointer;
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
    }

    .suggested-tile-item:hover {
        box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
        transform: scale(1.02) translateZ(0);
    }

    .align-center {
        align-items: center;
    }
`;

const SuggestedTile = styled(BaseTile)``;


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

/*
    ACTION PAGE COMPONENT SECTION

*/

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




async function getSuggestedList() {
    const res = await readSuggestedData();
    return res;
}

// general idea of suggested tile and the blueprint for me to do the rest of the firebase stuff... for now i need to work on designing
export function SuggestedTileReplacement() { 

    const [data, setData] = useState([]);
    const [trigger, setTrigger] = useState({});
    const [focusRenderState, setFocusRenderState] = useState('enter-focus-animation');

    function openFocusActionPage(_, dictItem) {
        console.log(dictItem);
    }

    function closeFocusActionPage() {
        
        setFocusRenderState('exit-focus-animation');

        // TODO: after the focus screen will exit, have to delete the 
        // component so user can still interact with the screen

        const intervalID = setInterval(
            () => {
                setTrigger({});
                // this seems to work becuase this is anonymous function
                clearInterval(intervalID);
            }, 400
        );
    }


    console.log(trigger);

    const SuggestedItems = [];

    if (data.length == 0) {
        getSuggestedList().then(
            (result) => {
                let something = [];


                result.forEach(

                    (dictItem) => {

                        let item = dictItem;

                        something.push(
                            <SuggestedTileItem className="suggested-tile-item" key={dictItem.title} onClick={() => {setFocusRenderState('enter-focus-animation');setTrigger(dictItem)}}>
                                <h2>{dictItem.title}</h2>
                                <h5>{dictItem.tag} | {dictItem.date}</h5>
                                <h3>{dictItem.description}</h3>
                            </SuggestedTileItem>
                        )
                    }
                );
    
                setData(something);
            }
        );
    }

    
    let exist = Object.keys(trigger).length;
    

    return (
        <SuggestedTile  className='back-tile'>
            <h2 className="tile-title">Suggested</h2>
            <div className="align-center">
                {data}
            </div>
            
            {
                (exist > 0) &&
                <ActionPageWrapper>

                
                    <ActionPage className={'action-page-component' + ' ' + focusRenderState}>
                
                        <FocusSection>
                            <div className='focus-top-bar'>
                                <img src={xIcon} className='x-icon' onClick={closeFocusActionPage}></img>
                            </div>

                            <div className="focus-middle-section">
                                <h3>{trigger.title}</h3>
                                <h4>{trigger.description}</h4>
                            </div>
                        </FocusSection>
                
                    </ActionPage>

                </ActionPageWrapper>
            }

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

    const [data, setData] = useState([]);

    readCommitmentData()
        .then(
            (result) => {
                if (result.length === 0) {
                    return [<a>No current commitments. Find activities in by navigating to the other tabs!</a>];
                }
                let something = [];
                result.forEach(
                    (doc) => {
                        something.push(
                            <SuggestedTileItem className="suggested-tile-item">
                                <h2>{doc.title}</h2>
                            </SuggestedTileItem>
                        );
                    }
                );

                setData(something);
            }
        );

    return (
        <SuggestedTile className='back-tile'>

            <h2 className="tile-title">My Commitments</h2>
            <div className="align-center">
                {data.length ? data : 'No current commitments. Find activities in by navigating to the other tabs!'}
            </div>
        </SuggestedTile> 
    );
}

export function ActivityTileReplacement() {

    const [data, setData] = useState([]);

    readActivityData()
        .then(
            (result) => {
                let repData = [];
                result.forEach(
                    (doc) => {
                        repData.push(
                            <SuggestedTileItem>
                                <h1>{doc.title}</h1>
                            </SuggestedTileItem>
                        )
                    }
                );
            }
        );


    return (
        <SuggestedTile className='back-tile'>

            <h2 className="tile-title">My Activity</h2>
            <div className="align-center">
                {data.length ? data : 'nothing'}
            </div>
        </SuggestedTile> 
    )
}

export function ContactUsTileReplacement() {
    return (
        <SuggestedTile className='back-tile'>

            <h2 className="tile-title">Contact Us</h2>
            <div className="align-center">
                there will be links here that guide user to right place
            </div>
        </SuggestedTile> 
    )
}