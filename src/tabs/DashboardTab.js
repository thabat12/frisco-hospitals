import React from "react";
import styled from "styled-components";

import {readSuggestedData, writeUserCommitmentData, getUser} from '../firebase/FireBaseInstance.js';

import { ActivityTileReplacement, ContactUsTileReplacement, MyCommitementsTileReplacement, Suggested, SuggestedTileReplacement } from "../widgets/dashboard/DashboardWidgets.js";

import { AspectConstants, ResponsiveConstants } from "../global/ResponsiveConstants";

import {getAuth} from 'firebase/auth';

const DashboardTabResponsiveWrapper = styled.div`

    .greetings-cookie {
        margin-top: 15px;
        left: 0%;
        display: flex;
        justify-content: column;
        align-items: center;
    }

    #dashboard-welcome {
        font-size: 25px;
    }

    .subtitle {
        font-size: 20px;
        text-align: center;
    }

    .tile-title {

    }

    .align-center {

    }

    @media ${AspectConstants.ultrawide} {

    }

    @media ${AspectConstants.ultrawide} {
        
    }

    @media ${AspectConstants.desktopL} {
        
    }

    @media ${AspectConstants.desktopS} {
        
    }

    @media ${AspectConstants.tabletL} {
        
    }

    @media ${AspectConstants.tabletS} {
        
    }

    @media ${AspectConstants.mobileL} {
        
    }

    @media ${AspectConstants.mobileS} {
        
    }
`;

const MainContentWrapper = styled.div`
    display: relative;
    height: 100%;
    width: 100%;

    .back-tile {
        margin-bottom: 15px;
    }
`;

const GreetingsCookie = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;



    margin-bottom: 20px;
    
    #dashboard-welcome {

    }
    .subtitle {
        font-weight: bold;
        width: 70%;
        font-size: 17px;
    }
`;

const MainContent = styled.div`

    display: flex;
    flex-direction: column;
`;

const DashboardContainer = styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

`;

const DashboardContainerContents = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .back-tile {
        margin-bottom: 7.5px;
        margin-top: 7.5px;
    }
`;


/*
    Dashboard Tab: exists to show reccomendations, things that you could do

        - show possible community, volunteer, give activites
            - just hyperlink to the actual activities that are 
                begin hosted at that time
        - user account status, like what he/she did so far, etc...
            - show current commitments
            - show total time commited 
*/
class DashboardTab extends React.Component {
    constructor(props) {
        super(props);
        this.currentUser = props.curUser;

        this.writeUserData = this.writeUserData.bind(this);
        this.constructValues = this.constructValues.bind(this);
    }   

    writeUserData() {
        writeUserCommitmentData();
    }

    constructValues() {
        this.readUserData().then(
            (result) => {
                console.log(result);
            }
        )
    }

    getDisplayNameFormat() {
        getUser().reload();

        let result = getUser().displayName;

        if (! result) {
            return 'err';
        } else {
            return result;
        }
    }


    async readUserData() {
        let res = await readSuggestedData();
        return res;
    }

    render() {

        let displayName = 'Guest'

        if (! (getUser()?.isAnonymous)) {
            displayName = getUser().displayName;
        }

        return (
            <DashboardTabResponsiveWrapper>
                <MainContentWrapper>

                    <MainContent>

                        {/* 
                            Dashboard tab contains div box that can be vertical or horizontal, and inside that div
                            there is going to be another div that is always vertical and inside of that is whatever 
                            you would need to update/ display
                        
                        */}

                        <DashboardContainer>

                            <GreetingsCookie className="greetings-cookie">
                                <h3 id="dashboard-welcome">Hello, {displayName}</h3>
                                <p className="subtitle">Welcome to FHN. Find ways you can contribute by navigating through the tabs and choosing which activities interest you.</p>
                            </GreetingsCookie>

                            <DashboardContainerContents className="dashboard-container-contents">

                                <SuggestedTileReplacement/>
                                <MyCommitementsTileReplacement/>

                            </DashboardContainerContents>

                            <DashboardContainerContents>

                                <ActivityTileReplacement/>
                                <ContactUsTileReplacement/>
                                
                            </DashboardContainerContents>

                        </DashboardContainer>



                    </MainContent>

                </MainContentWrapper>
            </DashboardTabResponsiveWrapper>
        );
    }
}

export default DashboardTab;