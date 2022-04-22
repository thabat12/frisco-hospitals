import React from "react";
import styled from "styled-components";
import { GalleryTile, GalleryTileItem, GalleryTileReplacement, LocalCommunityUpdatesReplacement, ReadStoriesReplacement, WriteALetterReplacement } from "../widgets/dashboard/CommunityWidgets";
import { writeNewDocument } from "../firebase/FireBaseInstance";
import { AspectConstants, ResponsiveConstants } from "../global/ResponsiveConstants";

const CommunityTabResponsiveWrapper = styled.div`

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
        font-size: 17px;
        text-align: center;
    }

    .tile-title {

    }

    .align-center {

    }

    .text-inside-aligns {
        width: 45%;
    }

    .div-inside-aligns {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .gallery-icon {
        height: 40px;
        width: 40px;
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

    }
    .subtitle {
        font-weight: bold;
        width: 80%;
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
            <CommunityTabResponsiveWrapper>

            
                <MainContentWrapper>
                    <DashboardContainer className="dashboard-container">

                        <GreetingsCookie className="greetings-cookie">
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
            </CommunityTabResponsiveWrapper>
        );
    }
}

export default CommunityTab;