import React from 'react';
import styled from 'styled-components';

import xIcon from '../icons/x.svg';


const ActionPage = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    left: 0%;
    top: 0%;

    background-color: red;

    /* a very large z index to make sure it is at the front */
    z-index: 100;

    background: rgba( 100, 100, 100, 0.9 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const FocusSection = styled.div`

    display: flex;
    position: relative;
    flex-direction: column;

    width: 90%;
    height: 80%;
    border-radius: 15px;

    background-color: white;
    box-shadow: 1px 2px 3px 4px rgba(12,12,12,0.2);

    .focus-top-bar {
        position: relative;
        width: 100%;
        height: 10%;

        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
    }

    .x-icon {
        height: 65%;
        margin-right: 15px;

        transition: 0.2s linear;
        transform: scale(1.0);
    }

    .x-icon:active {
        height: 65%;
        margin-right: 15px;

        transform: scale(0.8);
    }

`;




export default function ActionPageComponent(title, optionList, actionList, imageSrc) {

    // default action will do nothing
    const defaultAction = () => {}; 

    let optionElements = [];

    // if ( (typeof optionList === 'object') && (optionList.length === actionList.length) ) {

    //     for (let [ind, option] of optionList.entries()) {

    //         // using default action if there is no other action available 
    //         if (ind >= actionList.length) {
    //             actionList.push(defaultAction);
    //         }

    //         optionElements.push(
    //             <div onClick={actionList[ind]}>
    //                 {option}
    //             </div>
    //         );
    //     }
    // }

    
    return (
        <ActionPage className='action-page-component'>
            {/* whatever I want can be placed here */}
        </ActionPage>
    );
}