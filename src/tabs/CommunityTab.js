import React from "react";
import styled from "styled-components";
import { GalleryTile, GalleryTileItem, GalleryTileReplacement, LocalCommunityUpdatesReplacement, ReadStoriesReplacement, WriteALetterReplacement } from "../widgets/dashboard/CommunityWidgets";
import { writeNewDocument } from "../firebase/FireBaseInstance";

const MainContentWrapper = styled.div`
    display: relative;
    height: 100%;
    width: 100%;
`;

const GreetingsCookie = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
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
                <div>
                    <h2>Community</h2>
                    <h3>Use this page to find new ways to get involved with the community</h3>
                </div>

                <DashboardContainer>

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