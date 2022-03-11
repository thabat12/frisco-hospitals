import React from "react";
import styled, { keyframes } from "styled-components";
import { AspectConstants } from "../global/ResponsiveConstants";

import { signOutUser } from "../firebase/FireBaseInstance";
import ThemeConstants from "../global/ThemeConstants";



const UserDashboardResponsiveWrapper = styled.div`

    * {
        margin: 0;
    }

    h1 {
        font-size: 7.3vw;
        font-weight: bold;
    }

    h2 {
        font-size: 3.1vw;
    }

    h3 {
        font-size: 25px;
    }
    
    /* going from larger to smaller values*/
    @media ${AspectConstants.ultrawide} {
        .whole-page {
            background-color: white;
        }
    }

    @media ${AspectConstants.desktopL} {
        .whole-page {
            background-color: cadetblue;
        }
    }

    @media ${AspectConstants.desktopS} {
        .whole-page {
            background-color: brown;
        }
    }

    @media ${AspectConstants.tabletS} {
        .whole-page {
            background-color: green;
        }
    }

    @media ${AspectConstants.tabletL} {
        .whole-page {
            background-color: purple;
        }
    }

    @media ${AspectConstants.mobileS} {
        .whole-page {
            background-color: blue;
        }
    }

    @media ${AspectConstants.mobileL} {
        .whole-page {
            background-color: yellow;
        }
    }
`;

const WholePage = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;

    /* Animation keyframes will be here (for now) */

    @keyframes collapse-sidebar-anim {
        0% {width: 30%}
        100% {width: 0%}
    }

    .collapse-sidebar {
        animation-name: collapse-sidebar-anim;
        animation-duration: 1s;

        width: 0px;
    }
`;

const toggleSidebarAnimation = keyframes`
    0% {width: 300px}
    100% {width: 0px}
`

const SideBar = styled.div`
    position: relative;
    width: 30%;
    background-color: ${ThemeConstants.primaryAccentRed};
    transition: 1s;
    display: flex;
    flex-direction: column;
`;

const SideBarContents = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    color: white;
`;

const LogoSnack = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
`;

const SideBarBody = styled.div`
    position: relative;
    display: flex;
    flex-grow: 8;
    flex-direction: column;
    width: 100%;
    font-size: 30px;
    font-weight: bold;
`;

const MainDashboard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

const GreetingsCookie = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;


/* 

    features of this page:
        - expandable side drawer 
        - main page will have: 
            Welcome, Abhinav! 
            Ready to get involved in the community? Here are some opportunities for you!


*/


class UserDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.signOutUserInDashboard = this.signOutUserInDashboard.bind(this);
    }

    signOutUserInDashboard() {
        signOutUser();
    }

    render() {
        return (
            <UserDashboardResponsiveWrapper>
                <WholePage className="whole-page">
                    
                    <SideBar>
                        <SideBarContents>
                            <LogoSnack>
                                <h3>The Frisco Hospital Network</h3>
                            </LogoSnack>
                            <SideBarBody>
                                <a>Dashboard</a>
                                <a>Community</a>
                                <a>Volunteer</a>
                                <a>Give</a>
                            </SideBarBody>
                            
                            <a>Profile</a>
                        </SideBarContents>
                    </SideBar>

                    <MainDashboard>
                        <GreetingsCookie>
                            <h2>Hello [Name]!</h2>
                            <h3>Here are some of the ways you can help your community.</h3>
                        </GreetingsCookie>

                        
                        
                    </MainDashboard>
                    
                </WholePage>
            </UserDashboardResponsiveWrapper>
        )
    }
}

export default UserDashboard;