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

import menuIcon from '../icons/menu.svg';

// PAGE CONSTANTS
const sidebarWidthPercentage = 35;



const UserDashboardResponsiveWrapper = styled.div`

    * {
        margin: 0;
    }

    .whole-page {
        background-color: ${ThemeConstants.secondaryBackgroundColorDarkerBlue};
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

    .menu-icon {
        height: 30px;
        transition: linear 0.2s;
        transform: scale(1.0);
    }

    .menu-icon:active {
        height: 30px;

        transform: scale(1.1);
    }

    @keyframes expand-mobile-header {
        0% {height: 80px}
        100% {height: 100vh}
    }

    @keyframes collapse-mobile-header {
        0% {height: 100vh}
        100% {height: 80px}
    }
    
    .expand-mobile {
        animation-name: expand-mobile-header;
        animation-duration: 0.5s;

        height: 100vh;
    }

    .collapse-mobile {
        animation-name: collapse-mobile-header;
        animation-duration: 0.5s;

        height: 80px;
    }

    .mobile-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: hidden;
        position: absolute;
        width: 100vw;

        background-color: ${ThemeConstants.primaryAccentRed};

        color: white;

        .mobile-header-contents {
            width: 100vw;
            height: 80px;
            position: absolute;

            display: flex;
            flex-direction: row;
            align-items: center;

            h3 {
                position: absolute;
                width: 100vw;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .menu-icon {
                position: relative;
                justify-self: center;
                margin-left: 20px;
            }
        }

        .mobile-expand-body {
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            margin-top: 30vh;

            .divider {
                width: 200px;
                height: 1px;
                background-color: white;
            }

            .mobile-expand-contents {
                margin-bottom: 25px;

                h3 {
                    margin-top: 15px;
                    margin-bottom: 15px;

                    cursor: pointer;

                    transition: linear 0.2s;
                    transform: scale(1.0);
                }

                h3:active {
                    margin-top: 15px;
                    margin-bottom: 15px;
                    transform: scale(1.1);

                }
            }
        }

        
    }
    
    /* going from larger to smaller values*/
    @media ${AspectConstants.ultrawide} {
        .whole-page {
            /* background-color: white; */
        }

        .mobile-header {
            visibility: hidden;
        }
    }

    @media ${AspectConstants.desktopL} {
        .whole-page {
            /* background-color: cadetblue; */
        }

        .mobile-header {
            visibility: hidden;
        }
    }

    @media ${AspectConstants.desktopS} {
        .whole-page {
            /* background-color: brown; */
        }
    }

    @media ${AspectConstants.tabletS} {
        .whole-page {
            /* background-color: green; */
        }
    }

    @media ${AspectConstants.tabletL} {
        .whole-page {
            /* background-color: purple; */
        }
    }

    @media ${AspectConstants.mobileS} {
        .whole-page {
            /* background-color: blue; */
        }

        .side-bar {
            display: none;
        }

        .mobile-header {
            visibility: visible;
        }

        .main-dashboard {
            padding-top: 80px;
        }
    }

    @media ${AspectConstants.mobileL} {
        .whole-page {

            h2 {
                font-size: 20px;
            }
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
    flex-direction: row;
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

    Addressing the issue of mobile responsiveness:
        adding a glass morphism style top drawer that 
        will pull up side options in a neat way, will hopefully
        look cool enough to look legit
*/

const MobileNavHeader = styled.div`

    position: absolute;
    width: 100vw;
    height: 80px;

    background-color: ${ThemeConstants.primaryAccentRed};

    color: white;

    * {
        -webkit-tap-highlight-color: transparent;
    }
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

        // 0 stands for collapsed, 1 for opened
        this.navBarState = 0;

        this.curUser = getUser();

        // collpse and expand the sidebar
        this.sideBarRef = React.createRef();
        this.mobileHeaderRef = React.createRef();

        this.signOutUserInDashboard = this.signOutUserInDashboard.bind(this);
        this.navigateToCommunity = this.navigateToCommunity.bind(this);
        this.navigateToVolunteer = this.navigateToVolunteer.bind(this);
        this.navigateToDashboard = this.navigateToDashboard.bind(this);
        this.navigateToGive = this.navigateToGive.bind(this);
        this.handleScrolling = this.handleScrolling.bind(this);
        this.handleMobileHeader = this.handleMobileHeader.bind(this);
        this.mobileNavToDashboard = this.mobileNavToDashboard.bind(this);
        this.mobileNavToCommunity = this.mobileNavToCommunity.bind(this);
        this.mobileNavToVolunteer = this.mobileNavToVolunteer.bind(this);
        this.mobileNavToGive = this.mobileNavToGive.bind(this);
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

    handleMobileHeader() {
        console.log('sometihng is happening');
        // this is the case that we have to OPEN nav bar
        if (this.navBarState === 0) {
            this.mobileHeaderRef.current.className = 'mobile-header expand-mobile';
            this.navBarState = 1;
            
        } else {
            this.mobileHeaderRef.current.className = 'mobile-header collapse-mobile';
            this.navBarState = 0;
        }

        this.forceUpdate();
    }

    mobileNavToDashboard() {
        this.selected.fill(0);
        this.selected[0] = 1;

        this.mobileHeaderRef.current.className = 'mobile-header collapse-mobile';
        this.navBarState = 0;

        this.forceUpdate();
    }

    mobileNavToCommunity() {
        this.selected.fill(0);
        this.selected[1] = 1;

        this.mobileHeaderRef.current.className = 'mobile-header collapse-mobile';
        this.navBarState = 0;

        this.forceUpdate();
    }

    mobileNavToVolunteer() {
        this.selected.fill(0);
        this.selected[2] = 1;

        this.mobileHeaderRef.current.className = 'mobile-header collapse-mobile';
        this.navBarState = 0;

        this.forceUpdate();
    }

    mobileNavToGive() {
        this.selected.fill(0);
        this.selected[3] = 1;

        this.mobileHeaderRef.current.className = 'mobile-header collapse-mobile';
        this.navBarState = 0;

        this.forceUpdate();
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
                    <SideBar className="side-bar">
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
                                <a onClick={this.signOutUserInDashboard}>Profile</a>
                            </SideBarFooter>
                        </SideBarContents>
                    </SideBar>

                    <MainDashboard className="main-dashboard">

                        <div id="scrollable" onScroll={this.handleScrolling}>
                            {CurTab}
                        </div>
                        
                        
                        
                    </MainDashboard>

                    <MobileNavHeader className="mobile-header" ref={this.mobileHeaderRef}>
                        <div className="mobile-header-contents">
                            <h3>FHN</h3>
                            <img src={menuIcon} className='menu-icon' onClick={this.handleMobileHeader}/>
                        </div>

                        <div className="mobile-expand-body">
                            <div className="mobile-expand-contents">
                                <h3 onClick={this.mobileNavToDashboard}>Dashboard</h3>
                                <div className="divider"/>
                                <h3 onClick={this.mobileNavToCommunity}>Community</h3>
                                <div className="divider"/>
                                <h3 onClick={this.mobileNavToVolunteer}>Volunteer</h3>
                                <div className="divider"/>
                                <h3 onClick={this.mobileNavToGive}>Give</h3>
                                <div className="divider"/>
                            </div>

                            <div className="mobile-expand-profile">
                                <h3>Profile</h3>
                            </div>
                        </div>
                    </MobileNavHeader>
                    
                </WholePage>
            </UserDashboardResponsiveWrapper>
        )
    }
}

export default UserDashboard;