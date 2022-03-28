import React from "react";
import styled from "styled-components";

import {readSuggestedData, writeUserCommitmentData, getUser} from '../firebase/FireBaseInstance.js';

import { ActivityTileReplacement, ContactUsTileReplacement, MyCommitementsTileReplacement, Suggested, SuggestedTileReplacement } from "../widgets/dashboard/DashboardWidgets.js";

const MainContentWrapper = styled.div`
    display: relative;
    height: 100%;
    width: 100%;
`;

const GreetingsCookie = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    margin-bottom: 20px;
    
    #dashboard-welcome {
        padding-left: 2%;
        padding-top: 2%;
    }
    .subtitle {
        font-weight: bold;
        padding-left: 2%;
        width: 70%;
    }
`;

const MainContent = styled.div`

    display: flex;
    flex-direction: column;

`;

const DashboardContainer = styled.div`
    height: 100vh;
    overflow: auto;
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
        return (
            <MainContentWrapper>

                <MainContent>
                    <GreetingsCookie>
                        <h3 id="dashboard-welcome">Hello, {getUser().displayName}</h3>
                        <p className="subtitle">Welcome to FHN. Find some ways you can get involved with your community. Explore through the pages and participate in our projects!</p>
                    </GreetingsCookie>

                    {/* 
                        Dashboard tab contains div box that can be vertical or horizontal, and inside that div
                        there is going to be another div that is always vertical and inside of that is whatever 
                        you would need to update/ display
                    
                    */}

                    <DashboardContainer>

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

        );
    }
}

export default DashboardTab;