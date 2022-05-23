import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import circleIcon from '../../../icons/circle.svg';
import ThemeConstants from '../../../global/ThemeConstants';

const ActionPageWrapper = styled.div`

    display: flex;
    flex-direction: column;
    position: relative;

    height: 100%;
    width: 100%;

    h3 {}
    h4 {
        font-size: 15px;
    }

    .header {
        display: flex;
        flex-direction: column;
        flex-grow: 2;

        justify-content: center;
        align-items: center;
    }

    .header-title {}

    .header-description {
        text-align: center;
        font-size: 20px;
        position: relative;
        width: 60%;
    }

    .content {
        display: flex;
        flex-direction: column;
        flex-grow: 10;

        justify-content: center;
        align-items: center;
    }

    .footer {
        display: flex;
        flex-direction: row;
        flex-grow: 1;

        justify-content: center;
        align-items: center;
    }

    .button-pager {
        position: absolute;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        right: 80px;
        bottom: 30px;


        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;

        h2 {
            font-size: 20px;
            font-weight: bold;

            transition: 0.1s;
        }

        


        margin-top: 15px;
        background-color: ${ThemeConstants.primaryAccentRed};
        border: none;
        border-radius: 5px;

        color: white;
        box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.05);

        transition: 0.1s linear;
        transform: scale(1.0);


        .arrow {
            height: 30px;
            width: 30px;
            margin-left: 10px;

            transition: 0.2s;
        }

    }

    .button-pager:hover {
        box-shadow: 2px 2px 15px 5px rgba(0,0,0,0.1);
        transform: scale(1.02);
    }

    .button-pager:active {
        box-shadow: 2px 2px 15px 1px rgba(0,0,0,0.05);
        transform: scale(0.97);
    }

    .button-pager:active .arrow {
        padding-left: 0px; 
    } 

    .button-pager:hover .arrow {
       padding-left: 20px; 
    }
    


`;

const ContentSectionWrapper = styled.div`

    display: flex;
    flex-direction: column;
    background-color: red;
    position: relative;

    height: 100%;
    width: 100%;

`;

const SectionSliderWrapper = styled.div`

    position: relative;
    display: flex;
    flex-direction: row;

    background-color: yellow;

    .circle-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: yellow;
    }
    
    .circles {
        width: 40px;
        height: 40px;

        margin-left: 10px;

    }

    #active-circle {
        position: absolute;
        transition: 1s;
        margin: 0;
    }

`;


export default function GalleryActionPage(props) {

    return (
        <ActionPageWrapper>
            <div className='header'>

                <h2 className='header-title'>
                    Submit To The FHN Gallery!
                </h2>

                <h4 className='header-description'>
                    Send us anything from pictures of Frisco Hospitals or your own artwork for a chance to win prizes and support your community. 
                </h4> 
            </div>

            <div className='content'>
                <ContentSectionWrapper>
                    hello there
                </ContentSectionWrapper>
            </div>

            <div className='footer'>
                <SectionSlider/>
                <button className='button-pager'>
                    <h2>
                        Finish
                    </h2>
                    

                    <svg className='arrow' width="109" height="194" viewBox="0 0 109 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.60923 6.37433L102.951 96.2728C103.38 96.6687 103.38 97.3461 102.951 97.7421L5.60923 187.641" stroke="white" stroke-width="20" stroke-linecap="round"/>
                    </svg>

                </button>

                

            </div>
        </ActionPageWrapper>
    );

}

function SectionSlider(props) {
    return (
        <SectionSliderWrapper>
            <SliderCircles count={4}/>
        </SectionSliderWrapper>
    );
}


function SliderCircles(props) {

    const itemCount = props.count;

    console.log(itemCount);


    let circleArray = [];

    for (let i = 0; i < itemCount; i++) {
        circleArray.push(<img src={circleIcon} className={'circles'} key={i} />)
    }

    console.log(circleArray);
    return (
        <div className='circle-container'>
            <div>
                {circleArray}

                <svg className="circles" id="active-circle" width="50" height="50" viewBox="0 0 200 200" fill={ThemeConstants.primaryAccentRed} xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="100"/>
                </svg>
            </div>
            

        </div>
        );
}


// For the content sections, i'm going to just make an array of pages that are supposed to be paged through