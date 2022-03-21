import React from "react";

import styled from "styled-components";

import { getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { giveMeAuth, isUserLoggedIn } from "../firebase/FireBaseInstance";

import { AspectConstants } from "../global/ResponsiveConstants";

import handleUserSignIn, { getUser } from "../firebase/FireBaseInstance";
import { useNavigate } from "react-router-dom";


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
        let checkUser = setInterval(
            () => {
                let user = getUser();
                console.log(user);


                if (user === null) {
                    console.log('there is no user here');
                    clearInterval(checkUser);
                } else {
                    this.navigate('/dashboard/uid=' + user.uid);
                    clearInterval(checkUser);
                }
            }, 1000
        );
    }

    handleUserSignInWithRedirect() {
        handleUserSignIn();

        let auth = giveMeAuth();
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
                            <a>Sign in as Guest{this.user}</a>
                        </SignInTile>
                    </SignInOptionsContainer>

                </WholePage>
            </SignInPageResponsiveWrapper>
        )
    }
}

export default SignInPage;