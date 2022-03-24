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





export function GalleryTileReplacement() {
    return (
        <GalleryTile>
            <h2 id="tile-title">Submit to our Gallery!</h2>
            <div className="align-center">
                <GalleryTileItem className="suggested-tile-item">
                    <h2>Get Started</h2>
                    <h3>Learn about your community by reading stories, writing letters, and learning about our Frisco clinics!</h3>
                </GalleryTileItem>
            </div>
        </GalleryTile> 
    );
}

export function WriteALetterReplacement() {
    return (
        <CommunityUpdatesTile>
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
        <CommunityUpdatesTile>
            <h2 id="tile-title">Local Community Updates</h2>
            <div className="align-center">
                <GalleryTileItem className="suggested-tile-item">
                    <h2>Get Started</h2>
                    <h3>Learn about your community by reading stories, writing letters, and learning about our Frisco clinics!</h3>
                </GalleryTileItem>
            </div>
        </CommunityUpdatesTile> 
    );
}

export function ReadStoriesReplacement() {
    return (
        <CommunityUpdatesTile>
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