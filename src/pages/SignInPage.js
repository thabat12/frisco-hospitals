import React from "react";

import styled from "styled-components";

import { getRedirectResult, getAuth, onAuthStateChanged } from "firebase/auth";
import { giveMeAuth, isUserLoggedIn } from "../firebase/FireBaseInstance";

import { AspectConstants } from "../global/ResponsiveConstants";

import handleUserSignIn, { getUser } from "../firebase/FireBaseInstance";
import { useNavigate } from "react-router-dom";

// icons
import googleIcon from '../icons/google.svg';
import guestIcon from '../icons/guest.svg';


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

    .whole-page {

    }

    .welcome-banner {

        text-align: center;

        background-color: white;

        h1 {

        }

        h3 {
            font-size: 3vw;
        }

        a {

        }
    }

    .sign-in-options-container {
        width: 100%;
    }

    .sign-in-tile {
    }

    .image-icon {
        width: 10%;
        margin-left: 10%;
    }
    
    /* going from larger to smaller values*/
    @media ${AspectConstants.ultrawide} {
        .whole-page {
            background-color: black;

            flex-direction: row;
        }
    }

    @media ${AspectConstants.desktopL} {
        .whole-page {
            background-color: cadetblue;
        }

        .sign-in-tile {
            max-width: 80%;
            height: 30%;

            a {
                font-size: 5vw;
                font-weight: normal;
            }
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

        .welcome-banner {
            height: 25%;

            h1 {
                font-size: 10vw;
            }

            h3 {
                font-size: 4vw;
            }

            a {

            }
        }

        .sign-in-tile {
            height: 20%;
        }
    }

    @media ${AspectConstants.tabletL} {
        .whole-page {
            background-color: purple;
        }

        .welcome-banner {
            height: 25%;

            h1 {
                font-size: 10vw;
            }

            h3 {
                font-size: 4vw;
            }

            a {

            }
        }

        .sign-in-tile {
            height: 20%;
        }
    }

    @media ${AspectConstants.mobileS} {
        .whole-page {
            background-color: blue;
        }

        .welcome-banner {
            height: 25%;

            h1 {
                font-size: 10vw;
            }

            h3 {
                font-size: 4vw;
            }

            a {

            }
        }

        .sign-in-tile {
            height: 20%;
        }
    }

    @media ${AspectConstants.mobileL} {
        .whole-page {
            background-color: yellow;
        }

        .welcome-banner {
            height: 40%;

            h1 {
                font-size: 10vw;
            }

            h3 {
                font-size: 4vw;
            }

            a {

            }
        }

        .sign-in-tile {
            height: 30%;
        }
    }
`;

// there are just the default styles, but i will extend them in the css overriding in the top of this file

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
    width: 90%;
    height: 30%;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;


function SignInPage() {
    const navigation = useNavigate();

    return <SignInPageMain navigate= {navigation}/>;
}

class SignInPageMain extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = props.navigate;
        this.handleUserSignInWithRedirect = this.handleUserSignInWithRedirect.bind(this);
        this.doSomething = this.doSomething.bind(this);
    }

    componentDidMount() {

        // i have no idea how to do this properly but for now this works
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.navigate('/dashboard/uid=' + user.uid);
            } else {

            }
        })
    }

    async handleUserSignInWithRedirect() {
        let result = handleUserSignIn();
        

        // let auth = giveMeAuth();
    }

    doSomething() {
        console.log('clicked me');
        getUser();
    }


/*
    So firebase is deciding to be annoying so i am going to do this
    my own way and taking advantage of the page behaviors so ya here
    we go

*/

    render() {

        



        return (
            <SignInPageResponsiveWrapper>
                <WholePage className="whole-page">
                    <WelcomeBanner className="welcome-banner">
                        <h1>Welcome to FHN!</h1>
                        <a>{this.userSignedIn}</a>
                        <h3>Please continue with Google or log in as a Guest.</h3>
                    </WelcomeBanner>


                    <SignInOptionsContainer className="sign-in-options-container">
                        <SignInTile className="sign-in-tile" onClick={this.handleUserSignInWithRedirect}>
                            <a>Sign in with Google</a>
                            <img className="image-icon" src={googleIcon}></img>
                        </SignInTile>

                        <SignInTile className="sign-in-tile" onClick={this.doSomething}>
                            <a>Sign in as Guest{this.user}</a>
                            <img className="image-icon" src={guestIcon}></img>
                        </SignInTile>
                    </SignInOptionsContainer>

                </WholePage>
            </SignInPageResponsiveWrapper>
        )
    }
}

export default SignInPage;