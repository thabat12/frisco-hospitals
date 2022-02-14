import React from "react";

import readData, { saySomething, signInGoogleRedirect } from '../firebase/FireBaseInstance.js';
import signInGooglePopup from '../firebase/FireBaseInstance.js';

// no design or anything, this is just going to test the firebase sdk
class TestPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: ''
        }

        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() {
        let result = signInGooglePopup();
    }

    render() {
        return (
            <div>
                <h1>This page is going to test how Firebase will work with JS</h1>
                <button onClick={this.handleBtnClick}>hihihihihi</button>
                <h2>{this.state.token}</h2>
            </div>
        )
    }
}

export default TestPage;