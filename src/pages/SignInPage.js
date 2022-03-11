import React from "react";

import styled from "styled-components";

import { AspectConstants } from "../global/ResponsiveConstants";

import handleUserSignIn, { getUser } from "../firebase/FireBaseInstance";


const SignInPageResponsiveWrapper = styled.div`

    * {
        margin: 0;
    }

    a {
        font-weight: bold;
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
            background-color: black;
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
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    position: relative;

    .sign-in-tile:hover {
        background-color: rgba(200,200,200,1);
    }
`;

const WelcomeBanner = styled.div`
    position: relative;

    width: 100vw;

    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SignInOptionsContainer = styled.div`
    width: 100vw;
    flex-grow: 5;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const SignInTile = styled.div`
    width: 600px;
    height: 200px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;




class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleUserSignInWithRedirect = this.handleUserSignInWithRedirect.bind(this);
        this.doSomething = this.doSomething.bind(this);
    }

    handleUserSignInWithRedirect() {
        handleUserSignIn();
    }

    doSomething() {
        console.log('clicked me');
        getUser();
    }




    render() {
        return (
            <SignInPageResponsiveWrapper>
                <WholePage className="whole-page">
                    <WelcomeBanner>
                        <h1>Welcome to FHN!</h1>
                        <a>{this.userSignedIn}</a>
                        <h3>very basic sign in screen, this is where we will prompt the user to sign in</h3>
                    </WelcomeBanner>


                    <SignInOptionsContainer>
                        <SignInTile className="sign-in-tile" onClick={this.handleUserSignInWithRedirect}>
                            <a>Sign in with Google</a>
                        </SignInTile>

                        <SignInTile className="sign-in-tile" onClick={this.doSomething}>
                            <a>Sign in as Guest</a>
                        </SignInTile>
                    </SignInOptionsContainer>

                </WholePage>
            </SignInPageResponsiveWrapper>
        )
    }
}

export default SignInPage;