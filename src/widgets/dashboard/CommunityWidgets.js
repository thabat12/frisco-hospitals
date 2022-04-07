import React, {useState, useEffect} from 'react';
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
    height: 40vh;
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
    }

    .div-inside-aligns {
        position: relative;
        display: flex;
        flex-grow: 2;
    }

`;




export function GalleryTileReplacement() {
    return (
        <BaseTile className='back-tile'>
            <h2 id="tile-title">Submit to our Gallery!</h2>
            <div className="align-center">
                <SubmitToGalleryCookie className='suggested-tile-item'>
                    <h4 id='submit-gallery-title'>How it works</h4>
                    <div className='left-right-aligns'>
                        <div className='left-align'>
                            <h4 className='text-inside-aligns'>Submission: Simply submit your artwork to the Gallery by pressing on this tile</h4>
                            <div className='div-inside-aligns'/>
                        </div>

                        <div className='left-align'>
                            <h4 className='text-inside-aligns'>Review: We will review your submission and make sure it is ready to be presented</h4>
                            <div className='div-inside-aligns'/>
                        </div>

                        <div className='left-align'>
                            <h4 className='text-inside-aligns'>Notification: Look out for an email for more details! You can either present to your local hospital or opt to submit to our community gallery.</h4>
                            <div className='div-inside-aligns'/>
                        </div>
                    </div>
                </SubmitToGalleryCookie>
            </div>
        </BaseTile> 
    );
}

export function WriteALetterReplacement() {
    return (
        <CommunityUpdatesTile className='back-tile'>
            <h2 id="tile-title">Write a Letter</h2>
            <div className="align-center">
                <GalleryTileItem className="suggested-tile-item">
                    <h2>Get Started</h2>
                    <h3>Learn about your community by reading stories, writing letters, and learning about our Frisco clinics!</h3>
                </GalleryTileItem>
            </div>
        </CommunityUpdatesTile> 
    );
}

export function LocalCommunityUpdatesReplacement() {
    return (
        <CommunityUpdatesTile className='back-tile'>
            <h2 id="tile-title">Local Community Updates</h2>
            <div className="align-center">
                <GalleryTileItem className="suggested-tile-item">
                    <h2>Learn about your community</h2>
                    <h3>Click here to navigate to local community healthcare developments happening in Frisco and beyond.</h3>
                </GalleryTileItem>
            </div>
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