import React from "react";
import styled from "styled-components";
import { DonateQueryReplacement, DonationPagesReplacement, RequestedItemListReplacement } from "../widgets/dashboard/GiveWidgets";

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
            <MainContentWrapper>

                <GreetingsCookie>
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

        );
    }
}

export default GiveTab;