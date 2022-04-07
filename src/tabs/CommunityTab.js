import React from "react";
import styled from "styled-components";
import { GalleryTile, GalleryTileItem, GalleryTileReplacement, LocalCommunityUpdatesReplacement, ReadStoriesReplacement, WriteALetterReplacement } from "../widgets/dashboard/CommunityWidgets";
import { writeNewDocument } from "../firebase/FireBaseInstance";

const MainContentWrapper = styled.div`
    display: relative;
    height: 100%;
    width: 100%;

    
`;

const DashboardContainer = styled.div`

    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
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

const GreetingsCookie = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;


    margin-bottom: 20px;
    
    #dashboard-welcome {
        padding-left: 5%;
        padding-top: 2%;
        font-size: 2.5vw;
    }
    .subtitle {
        font-weight: bold;
        padding-left: 5%;
        width: 70%;
        font-size: 17px;
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
class CommunityTab extends React.Component {
    constructor(props) {
        super(props);

        this.doSomething = this.doSomething.bind(this);
    }

    doSomething() {
        console.log('do something');
        writeNewDocument('commitments/one', {bye: 'ppface'}).then(
            (result) => {
                console.log('result is ' + result);
            }
        )
    }

    render() {
        return (
            <MainContentWrapper>
                <DashboardContainer className="dashboard-container">

                    <GreetingsCookie>
                        <h3 id="dashboard-welcome">Community</h3>
                        <p className="subtitle">Use this page to find different ways to get involved with the community. Here is a list of our current ongoing community projects that you can contribute to today!</p>
                    </GreetingsCookie>

                    <DashboardContainerContents>
                        <GalleryTileReplacement/>
                        <WriteALetterReplacement/>
                    </DashboardContainerContents>

                    <DashboardContainerContents>
                        <LocalCommunityUpdatesReplacement/>
                    </DashboardContainerContents>

                </DashboardContainer>
            </MainContentWrapper>

        );
    }
}

export default CommunityTab;