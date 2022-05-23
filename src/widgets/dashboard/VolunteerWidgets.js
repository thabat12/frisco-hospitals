import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { readVolunteeringOpportunities } from "../../firebase/FireBaseInstance";

import emailIcon from '../../icons/email.svg';
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
    cursor: pointer;
`;

const BaseTileSubTile = styled(BaseTile)`
    cursor: pointer;
`;

const VolunteerTile = styled(BaseTile)`
    cursor: pointer;
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

export function CurrentOpportunitiesTileReplacement() {

    const [data, setData] = useState([]);

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

    console.log('get volunteering opportunities');

    if (data.length === 0) {
        readVolunteeringOpportunities().then(
            (result) => {
                console.log('result is');
                console.log(result);
                let something = [];
    
                result.forEach(
                    (dictItem) => {
                        something.push(
                            <BaseTileSubTile className="base-tile-subtile" onClick={() => { console.log('hi'); setTrigger(true); setFocusRenderState('enter-focus-animation'); }}>
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
    }

    return (
        <BaseTileVariantTwoWrapper>
            <h2 id='current-opportunities'>Current Opportunitites</h2>
            {/* generate list of items here, will not be too large (hopefully for now) */}
            {data}

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
        </BaseTileVariantTwoWrapper>
    );
}

export function MoreUpdatesTileReplacement() {
    return (
        <VolunteerTile>
            <h2 id="tile-title">Subscribe to more updates!</h2>
            <div className="align-center subscribe-items">
                <img className="image-icon" src={emailIcon}></img>
                <a className="volunteering-opportunities">Click here for email notifications</a>
            </div>
        </VolunteerTile> 
    );
}