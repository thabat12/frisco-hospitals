import React from "react";
import styled from "styled-components";

import {writeUserCommitmentData} from '../firebase/FireBaseInstance.js';

const MainContentWrapper = styled.div`
    display: relative;
    background-color: white;
    height: 100%;
    width: 100%;
`;

const GreetingsCookie = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    
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

const MyProfile = styled.div`

    

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
    }

    writeUserData() {
        console.log('writing some data');
        writeUserCommitmentData();
    }

    render() {
        return (
            <MainContentWrapper>

                <MainContent>
                    <GreetingsCookie>
                        <h3 id="dashboard-welcome">Hello, {this.currentUser.displayName}</h3>
                        <p className="subtitle">Welcome to FHN. Find some ways you can get involved with your community!</p>
                        <a onClick={this.writeUserData}>write some data here</a>
                    </GreetingsCookie>



                </MainContent>

            </MainContentWrapper>

        );
    }
}

export default DashboardTab;