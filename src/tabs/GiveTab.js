import React from "react";
import styled from "styled-components";

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
                <div>
                    <p>this is the give tab</p>
                </div>
            </MainContentWrapper>

        );
    }
}

export default GiveTab;