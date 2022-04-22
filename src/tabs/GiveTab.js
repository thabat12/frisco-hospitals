import React from "react";
import styled from "styled-components";
import { DonateQueryReplacement, DonationPagesReplacement, RequestedItemListReplacement } from "../widgets/dashboard/GiveWidgets";
import { AspectConstants, ResponsiveConstants } from "../global/ResponsiveConstants";
import ThemeConstants from '../global/ThemeConstants.js';

const GiveTabResponsiveWrapper = styled.div`

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
        width: 80%;
    }

    .tile-title {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .align-center {

    }

    #something-to-donate {

    }

    #btn-go-to-form {
        margin-top: 15px;
        background-color: ${ThemeConstants.primaryAccentRed};
        border: none;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 5px;

        color: white;
        font-weight: bold;
        box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.2);

        transition: 0.2s linear;
        transform: scale(1.0);
    }

    #btn-go-to-form:hover {
        box-shadow: 2px 2px 15px 5px rgba(0,0,0,0.23);
        transform: scale(1.05);
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

    overflow-y: hidden;
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
    }
`;

const DashboardContainer = styled.div`

    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: hidden;

    .donation-item-list-container {
        display: flex;
        flex-direction: column;
    }

    .visit-donation-page-tile {
        width: 80%;
        margin-top: 5px;
        margin-bottom: 5px;
        border: solid;
        border-color: black;
        border-radius: 3px;

        transition: 0.5s;
        transform: scale(1);

        h3 {
            margin-left: 5px;
        }

    }

    .visit-donation-page-tile:hover {
        transform: scale(1.03);
    }
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
class GiveTab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GiveTabResponsiveWrapper>
                <MainContentWrapper>

                    <GreetingsCookie className="greetings-cookie">
                        <h3 id="dashboard-welcome">Give</h3>
                        <p className="subtitle">Donate to the community. Our donations go towards the 3 major hospitals in the Plano/ Frisco area: the Scottish Rite, Children's Hospital, and Medical City Frisco.</p>
                    </GreetingsCookie>

                    <DashboardContainer>
                        <DashboardContainerContents>
                            <RequestedItemListReplacement/>
                            <DonateQueryReplacement/>
                        </DashboardContainerContents>

                        <DashboardContainerContents>
                            <DonationPagesReplacement/>
                        </DashboardContainerContents>
                    </DashboardContainer>
                </MainContentWrapper>
            </GiveTabResponsiveWrapper>

        );
    }
}

export default GiveTab;