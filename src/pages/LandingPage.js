import React from "react";
import styled from 'styled-components';

import ThemeConstants, { ThemeConstantsWrapper } from "../global/ThemeConstants";

import '../css/LandingPage.css';

// it is just so much easier to keep styled div components and avoid css
const LandingWidget = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: ${ThemeConstants.backgroundColorLightBlue};
    
    display: flex;
    flex-direction: column;
`;

const LandingWidgetNav = styled.header`
    position: fixed;
    width: 100vw;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;

    a {
        transition: 0.3s linear;

        padding: 0.5em;
        border-radius: 10px;
    }

    a:hover {
        cursor: pointer;

        background-color: rgba(0,0,0,0.1);
    }
`;

const LandingWidgetNavSpacer = styled.div`
    width: 2.5vw;
`;




class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeConstantsWrapper>
                <LandingWidget className="whole-page">
                    <LandingWidgetNav>
                        <a>first link</a>
                        <LandingWidgetNavSpacer/>
                        <a>second link</a>
                        <LandingWidgetNavSpacer/>
                        <a>third link</a>
                        <LandingWidgetNavSpacer/>
                    </LandingWidgetNav>
                </LandingWidget>
            </ThemeConstantsWrapper>
        )
    }
}

export default LandingPage;