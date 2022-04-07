import React from "react";
import styled, { keyframes } from "styled-components";
import { AspectConstants } from "../global/ResponsiveConstants";

import { getUser, signOutUser } from "../firebase/FireBaseInstance";
import ThemeConstants from "../global/ThemeConstants";
import DashboardTab from "../tabs/DashboardTab";
import VolunteerTab from "../tabs/VonunteerTab";
import CommunityTab from "../tabs/CommunityTab";
import GiveTab from "../tabs/GiveTab";

import '../css/Dashboard.css';

// PAGE CONSTANTS
const sidebarWidthPercentage = 35;



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

/*

    UI/UX Idea: there are "navigation tabs"
        on the left side of the screen, and the 
        user will be able to go through different
        tabs and options by clicking through

        (for responsiveness on mobile, it will be
            a side drawer thing but also there will be
            option tiles on the main dashboard)

    There are a couple important classes for handling
    app states/ animations:

        ".collpse-sidebar"
                full screen layout vs not

          
    (idk what im doing)
*/

const WholePage = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;

    /* Animation keyframes will be here (for now) */
    
    // Entire sidebar
    @keyframes collapse-sidebar-anim {
        0% {width: ${sidebarWidthPercentage}%}
        100% {width: 0%}
    }
    

    .collapse-sidebar {
        animation-name: collapse-sidebar-anim;
        animation-duration: 1s;

        width: 0px;
    }


    // Sidebar contents
    @keyframes select-tab-anim {
        0% {margin-left: 0}
        100% {margin-left:100px}
    }

    .select-tab {
        animation-name: select-tab-anim;
        animation-duration: 1s;
        margin-left: 100px;
    }

    #scrollable {
        overflow-y: auto;
    }
`;

const toggleSidebarAnimation = keyframes`
    0% {width: 300px}
    100% {width: 0px}
`

const SideBar = styled.div`
    position: relative;
    width: ${sidebarWidthPercentage}%;
    background-color: ${ThemeConstants.primaryAccentRed};
    transition: 1s;
    display: flex;
    flex-direction: column;
    padding-left: 2%;
    padding-right: 25px;
`;

// contains h3 and a
const SideBarContents = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    color: white;

    .action-btn {
        font-size: 0.9em;
        cursor: default;
        position: relative;
        transition: 0.2s linear;
        padding-left: 0px;
    }

    .action-btn:hover {
        padding-left: 15px;
    }

    .sidebar-footer {
        transition: 0.2s linear;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 10px;
        border: 1px;
        border-color: white;
        border-style: solid;
        border-radius: 5px;
    }


    .sidebar-footer:hover {
        transition: 0.5s linear;
        box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
        transform: scale(1.03);
        backface-visibility: hidden;
        cursor: pointer;
    }
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
    align-items: center;
    padding-bottom: 15px;

`;

const SideBarFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;

    font-size: 20px;
`;

/*
    container holds a list of a-links that are going to be the tabs
    each tab will have this format:
        #<tab name>-tab
*/

const TabOptionsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 35%;
    width: 100%;
`;

const OptionRelativeContainer = styled.div`
    position: relative;
`;

const MainDashboard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    
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

        this.selected = [
            1, // Dashboard
            0, // Community
            0, // Volunteer
            0  // Give
        ];

        this.curUser = getUser();

        // collpse and expand the sidebar
        this.sideBarRef = React.createRef();

        this.signOutUserInDashboard = this.signOutUserInDashboard.bind(this);
        this.navigateToCommunity = this.navigateToCommunity.bind(this);
        this.navigateToVolunteer = this.navigateToVolunteer.bind(this);
        this.navigateToDashboard = this.navigateToDashboard.bind(this);
        this.navigateToGive = this.navigateToGive.bind(this);
        this.handleScrolling = this.handleScrolling.bind(this);
    }

    // handling states here (will include the screen overlay stuff too)
    signOutUserInDashboard() {
        signOutUser();
        window.location = '/';
    }

    // State cycles
    shouldComponentUpdate() {
        console.log('passing through "should component update"');
    }

    componentDidMount() {
        const tabScrollableElement = document.getElementById('scrollable');
        tabScrollableElement.addEventListener('wheel', this.handleScrolling);
    }

    // Handle scrolling offsets
    handleScrolling(e) {
        console.log(e.deltaY);
    }



    // Dashboard navigation to all the other tabs
    navigateToDashboard() {
        this.selected.fill(0);
        this.selected[0] = 1;

        // using force update because i am not really keeping
        // track of any state variables or anything
        this.forceUpdate();
    }

    navigateToCommunity() {
        this.selected.fill(0);
        this.selected[1] = 1;
        this.forceUpdate();
    }

    navigateToVolunteer() {
        this.selected.fill(0);
        this.selected[2] = 1;
        this.forceUpdate();
    }

    navigateToGive() {
        this.selected.fill(0);
        this.selected[3] = 1;
        this.forceUpdate();
    }

    navigateToProfile() {
        console.log('navigating to profile');
    }

    render() {

        let CurTab = <a>this is nothing for now</a>

        let curTabIndex = this.selected.indexOf(1);
        console.log(curTabIndex);
        switch (curTabIndex) {
            case 0:
                CurTab = <DashboardTab curUser={this.curUser}/>;
                break;
            case 1: 
                CurTab = <CommunityTab/>;
                break;
            case 2:
                CurTab = <VolunteerTab/>;
                break;
            case 3: 
                CurTab = <GiveTab/>;
                break;
        }


        return (
            <UserDashboardResponsiveWrapper>
                <WholePage className="whole-page">
                    
                    <SideBar>
                        <SideBarContents>
                            <LogoSnack>
                                <h3>FHN</h3>
                            </LogoSnack>
                            <SideBarBody>

                                <TabOptionsContainer>
                                    <a id="dashboard-tab" className="action-btn" onClick={this.navigateToDashboard}>Dashboard</a>
                                    <a id="community-tab" className="action-btn" onClick={this.navigateToCommunity}>Community</a>
                                    <a id="volunteer-tab" className="action-btn" onClick={this.navigateToVolunteer}>Volunteer</a>
                                    <a id="give-tab" className="action-btn" onClick={this.navigateToGive}>Give</a>
                                </TabOptionsContainer>

                            </SideBarBody>
                            

                            <SideBarFooter className="sidebar-footer">
                                <a onClick={this.navigateToProfile}>Profile</a>
                            </SideBarFooter>
                        </SideBarContents>
                    </SideBar>

                    <MainDashboard>

                        <div id="scrollable" onScroll={this.handleScrolling}>
                            {CurTab}
                        </div>
                        
                        
                        
                    </MainDashboard>
                    
                </WholePage>
            </UserDashboardResponsiveWrapper>
        )
    }
}

export default UserDashboard;