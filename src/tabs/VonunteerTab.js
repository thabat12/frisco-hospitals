import React from "react";
import styled from "styled-components";
import { CurrentOpportunitiesTileReplacement, MoreUpdatesTileReplacement } from "../widgets/dashboard/VolunteerWidgets";
import { getVolunteeringOpportunities } from "../firebase/FireBaseInstance";

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
            <MainContentWrapper>

                <GreetingsCookie>
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

        );
    }
}

export default VolunteerTab;