import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import { writeDocumentDataFromUserPath } from '../../firebase/FireBaseInstance';

import artworkIcon from '../../icons/artwork.svg';
import verifyIcon from '../../icons/verify.svg';
import emailIcon from '../../icons/email.svg';
import xIcon from '../../icons/x.svg';
import GalleryActionPage from './action_sections/GalleryActionPage';
import WriteALetterActionPage from './action_sections/WriteALetterActionPage';

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
    }

    .suggested-tile-item:hover {
        box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
        transform: scale(1.02) translateZ(0);
    }

    .align-center {
        align-items: center;
    }
`;

const GalleryTile = styled(BaseTile)`
    margin-bottom: 15px;
`;

const CommunityUpdatesTile = styled(BaseTile)`
`;

const SendLetterTile = styled(BaseTile)`
`;

const FollowAccountsTile = styled(BaseTile)`
`;

const GalleryTileItem = styled.div`
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

const SubmitToGalleryCookie = styled(GalleryTileItem)`
    position: relative;
    height: 45vh;
    display: flex;
    align-items: center;
    padding-left: 1.3em;
    padding-right: 1.3em;

    #submit-gallery-title {
        font-size: 2em;
    }

    .left-right-aligns {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
    }

    .left-align {
        display: flex;
        flex-direction: row;
    }

    .right-align {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }

    .text-inside-aligns {
        position: relative;
        display: flex;
        height: 100%;
        flex-grow: 1;
        width: 20%;
        align-items: center;

        font-size: 80%;
    }

    .div-inside-aligns {
        position: relative;
        display: flex;
        flex-grow: 2;
    }

`;

/*
    Action page component stuff

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


export function GalleryTileReplacement() {

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
        <BaseTile className='back-tile'>
            <h2 id="tile-title">Submit to our Gallery!</h2>
            <div className="align-center">
                <SubmitToGalleryCookie className='suggested-tile-item' onClick={() => { setTrigger(true); setFocusRenderState('enter-focus-animation'); }}>
                    <h4 id='submit-gallery-title'>How it works</h4>
                    <div className='left-right-aligns'>
                        <div className='left-align'>
                            <h4 className='text-inside-aligns'>1) Submission: Simply submit your artwork to the Gallery by pressing on this tile</h4>
                            
                            <div className='div-inside-aligns'>
                                <img className='gallery-icon' src={artworkIcon}></img>
                            </div>
                        </div>

                        <div className='left-align'>
                            <h4 className='text-inside-aligns'>2) Review: We will review your submission and make sure it is ready to be presented</h4>
                            <div className='div-inside-aligns'>
                                <img className='gallery-icon' src={verifyIcon}></img>
                            </div>
                        </div>

                        <div className='left-align'>
                            <h4 className='text-inside-aligns'>3) Notification: Look out for an email for your qualification</h4>
                            <div className='div-inside-aligns'>
                                <img className='gallery-icon' src={emailIcon}></img>
                            </div>
                        </div>
                    </div>
                </SubmitToGalleryCookie>
            </div>

            {
                (trigger === true) && 
                    <ActionPageWrapper>
                        <ActionPage className={'action-page-component' + ' ' + focusRenderState}>
                            <FocusSection>
                                <div className='focus-top-bar'>
                                        <img src={xIcon} className='x-icon' onClick={closeFocusActionPage}></img>
                                </div>

                                <div className='focus-middle-section'>

                                    {/* 
                                        in this focus section, i am supplying the gallery action page, which will be 
                                        able to manage its own state and functions/ backend connections by itself so
                                        that should be good.

                                    
                                    */}

                                    <GalleryActionPage/>
                                </div>
                            </FocusSection>
                        </ActionPage>
                    </ActionPageWrapper>
            }

            

            
        </BaseTile> 
    );
}

export function WriteALetterReplacement() {


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
        <CommunityUpdatesTile className='back-tile'>
            <h2 id="tile-title">Write a Letter</h2>
            <div className="align-center">
                <GalleryTileItem className="suggested-tile-item" onClick={() => { setTrigger(true); setFocusRenderState('enter-focus-animation'); }}>
                    <h2>Get Started</h2>
                    <h3>Learn about your community by reading stories, writing letters, and learning about our Frisco clinics!</h3>
                </GalleryTileItem>
            </div>

            {
                (trigger === true) && 
                    <ActionPageWrapper>
                        <ActionPage className={'action-page-component' + ' ' + focusRenderState}>
                            <FocusSection>
                                <div className='focus-top-bar'>
                                        <img src={xIcon} className='x-icon' onClick={closeFocusActionPage}></img>
                                </div>
                                <div className='focus-middle-section'>
                                    <WriteALetterActionPage/>
                                </div>
                            </FocusSection>
                        </ActionPage>
                    </ActionPageWrapper>
            }

        </CommunityUpdatesTile> 
    );
}

export function LocalCommunityUpdatesReplacement() {

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
        <CommunityUpdatesTile className='back-tile'>
            <h2 id="tile-title">Local Community Updates</h2>
            <div className="align-center">
                <GalleryTileItem className="suggested-tile-item" onClick={() => { setTrigger(true); setFocusRenderState('enter-focus-animation'); }}>
                    <h2>Learn about your community</h2>
                    <h3>Click here to navigate to local community healthcare developments happening in Frisco and beyond.</h3>
                </GalleryTileItem>
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
        </CommunityUpdatesTile> 
    );
}

export function ReadStoriesReplacement() {
    return (
        <CommunityUpdatesTile className='back-tile'>
            <h2 id="tile-title">Stories</h2>
            <div className="align-center">
                <GalleryTileItem className="suggested-tile-item">
                    <h2>Get Started</h2>
                    <h3>Learn about your community by reading stories, writing letters, and learning about our Frisco clinics!</h3>
                </GalleryTileItem>
            </div>
        </CommunityUpdatesTile> 
    );
}