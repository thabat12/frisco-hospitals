import React from "react";
import styled from "styled-components";
import { CurrentOpportunitiesTileReplacement, MoreUpdatesTileReplacement } from "../widgets/dashboard/VolunteerWidgets";
import { getVolunteeringOpportunities } from "../firebase/FireBaseInstance";
import { AspectConstants, ResponsiveConstants } from "../global/ResponsiveConstants";

const VolunteerTabResponsiveWrapper = styled.div`

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

    }

    .align-center {

    }

    #current-opportunities {
       font-size: 25px;
       margin-bottom: 15px;
    }

    .base-tile-subtile {
        h2 {
            font-size: 20px;
            font-weight: bold;
        }
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

    /* placing the tile css here because then it will make sure they are in effect */
    .base-tile-subtile {
        transition: 0.5s;
        transform: scale(1);
        border: 2;
        border-color: black;
        margin-bottom: 15px;
    }

    .base-tile-subtile:hover {
        transform: scale(1.02);
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
    }
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


/*
    Dashboard Tab: exists to show reccomendations, things that you could do

        - show possible community, volunteer, give activites
            - just hyperlink to the actual activities that are 
                begin hosted at that time
        - user account status, like what he/she did so far, etc...
            - show current commitments
            - show total time commited 
*/
class VolunteerTab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <VolunteerTabResponsiveWrapper>

                <MainContentWrapper>

                    <GreetingsCookie className="greetings-cookie">
                        <h3 id="dashboard-welcome">Volunteer</h3>
                        <p className="subtitle">Find ways to contribute with virtual/ in-person volunteering events. This list is updated approximately once every week.</p>
                    </GreetingsCookie>

                    <DashboardContainer>

                        <DashboardContainerContents>
                            <CurrentOpportunitiesTileReplacement/>
                        </DashboardContainerContents>

                        <DashboardContainerContents>
                            <MoreUpdatesTileReplacement/>
                        </DashboardContainerContents>

                    </DashboardContainer>
                </MainContentWrapper>
            </VolunteerTabResponsiveWrapper>

        );
    }
}

export default VolunteerTab;