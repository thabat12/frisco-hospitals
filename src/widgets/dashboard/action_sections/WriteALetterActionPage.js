import React, {useState} from 'react';
import styled from 'styled-components';

import ThemeConstants from '../../../global/ThemeConstants';
import arrowIcon from '../../../icons/arrow.svg';

let currentClinicalSelection = undefined;

const WriteALetterActionPageWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    height: 100%;

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;

        h3 {
            font-size: 25px;
        }
        h4 {
            font-size: 20px;
            position: relative;
            width: 80%;
            text-align: center;
        }
    }

    .content {
        flex-grow: 10;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .footer {
        position: relative;
        width: 100%;
        flex-grow: 1.5;
        display: flex;
        position: relative;
        flex-direction: row;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .button-pager {

        animation-name: fade-in-anim;
        animation-duration: 0.1s;


        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;


        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;

        h2 {
            font-size: 20px;
            font-weight: bold;

            transition: 0.1s;
        }

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

export default function WriteALetterActionPage(props) {

    function handleLetterSubmission() {
        
    }

    return (
        <WriteALetterActionPageWrapper>
            <div className='header'>
                <h3>
                    Write a Letter to a Clinic Near You
                </h3>
                <h4>
                    Your message can be anything and will be verified before being sent. Select from the options of clinics below and get started!
                </h4>
            </div>

            <div className='content'>
                <ContentSection/>
            </div>

            <div className='footer'>
                <button className='button-pager' onClick={() => {}}>
                    <h3>
                        Submit
                    </h3>
                </button>
            </div>
        </WriteALetterActionPageWrapper>
    );
}

const ContentSectionWrapper = styled.div`
    overflow-x: hidden;
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    height: 150px;

    #wrap-test {
        position: relative;
    }
`;

const ContentSectionSliderWrapper = styled.div`
    display: flex;

    position: absolute;
    min-width: 100%;

    overflow-x: hidden;
    padding-left: 10px;
    padding-right: 10px;

    padding-top: 5px;
    padding-bottom: 5px;

    transition: 0.5s ease-in-out;


`;

const ContentSectionTileWrapper = styled.div`

    position: flex;
    flex-direction: column;

    .selected {
        background-color: green;
    }

    .content-section-tile {
        width: 200px;
        height: 100px;
        background-color: white;
        border-radius: 10px;
        margin-left: 5px;
        margin-right: 5px;

        padding-left: 10px;
        padding-right: 10px;

        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;

        transition: 0.1s ease-in-out;

        h3 {
            font-size: 20px;
            margin-top: 10px;
        }

        h4 {
            font-size: 15px;
        }
    }

    .content-section-tile:hover {
        transform: scale(1.0);
    }

    .content-section-tile:active {
        transform: scale(0.97);
    }

    .content-section-tile:focus {
        background-color: green;
    }

    #selected {
        background-color: ${ThemeConstants.primaryAccentRed};
        color: white;
    }
`;

const dummyDataFile = [
    {
        title: 'Friso Family Healthcare',
        add: '9555 Lebanon Rd #1003'
    },
    {
        title: 'Minute Clinic',
        add: '3201 Preston Dr'
    },
    {
        title: 'Baylor Scott & White Urgent Care',
        add: '3800 Gaylord Pkwy St'
    },
    {
        title: 'CareNow Urgent Care',
        add: '5644 Preston Rd'
    },
    {
        title: 'Medical City Frisco',
        add: '5500 Frisco Square Blvd'
    },
    {
        title: 'TienaHealth Family Medicine',
        add: '5858 W. Main Street'
    },
]

function ContentSectionTile(props) {

    const [selected, setSelected] = useState(false);

    let data = props.data;

    function assignClickedValue() {
        currentClinicalSelection = data.title;
    }

    return (
        <ContentSectionTileWrapper>
            <div className={'content-section-tile ' + props.className} id={props.className} onClick={()=> {props.activeHandler(data.title);}}>
                <h3>
                    {data.title}
                </h3>
                <h4>
                    {data.add}
                </h4>
            </div>
        </ContentSectionTileWrapper>
    )
}

const ContentSectionTilePagerButtonWrapper = styled.div`
    display: flex;
    padding: 10px;
    background-image: linear-gradient(to right, rgba(0,0,0,0) 5%, white);
    justify-content: center;
    align-items: center;

    position: absolute;
    height: 100px;

    .lay-right {
        right: 0px;
    }

    .lay-left {
        transform: rotate(180deg);
        left: 0px;
    }

    .arrow-icon {
        position: relative;
        height: 55px;
        padding-right: 15px;
        
    }

    .arrow-icon:hover {
        transform: scale(1.03);
    }

    .arrow-icon: active {
        transform: scale(0.97);
    }

    #right-scrolling-btn {
        padding: 10px;
    }
`;

const ContentCorrectionWrapper = styled.div`

    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;

    textarea {
        resize: none;
        height: 60%;
        width: 80%;
    }

    #wtfisthis {
    }
`;

function ContentSectionTilePagerButton(props) {

    const isLeft = props.isLeft;

    return (
        <ContentSectionTilePagerButtonWrapper style={{right: isLeft ? null : 0, transform: `rotate(${isLeft ? 180 : 0}deg)`}}>
            <img src={arrowIcon} className='arrow-icon'>
            </img>
        </ContentSectionTilePagerButtonWrapper>
    )
}

const incrementNumber = 50;

function ContentSection(props) {

    const [increment, setIncrement] = useState(0);

    const [activeElement, setActiveElement] = useState('');

    function doSomething(title) {
        setActiveElement(title);
    }

    // this is the place where im going to "retrieve" all the dummy data and such 
    const dataArr = dummyDataFile.map(
        dataStuff => {
            return (
                <ContentSectionTile data={dataStuff} className={dataStuff.title === activeElement ? 'selected' : 'deselected'} activeHandler={doSomething}/>
            );
        }
    );

    function handleIncrements(isLeft, isRight) {

        let sliderThing = document.getElementById('content-slider-section');
        let sliderRect = sliderThing.getBoundingClientRect();


        let sliderBtn = document.getElementById('right-scrolling-btn');
        let sliderBtnRect = sliderBtn.getBoundingClientRect();

       
        
        const canMove = sliderRect.right > sliderBtnRect.left + sliderBtnRect.width;

        if (isRight) {
            if (canMove) {
                setIncrement(increment + incrementNumber);
            }
        } else {
            if (increment !== 0) {
                setIncrement(increment - incrementNumber);
            }
        }
    }

    return (
        <ContentCorrectionWrapper>
            <ContentSectionWrapper id='wtfisthis'>
                <div id='wrap-test'>
                    <ContentSectionSliderWrapper id='content-slider-section' style={{left: `-${increment}%`}}>
                        {/* will supply all clinic names and such that are sourced from the database */}
                        {dataArr}
                    </ContentSectionSliderWrapper>

                    <div id='right-scrolling-btn' onClick={() => {handleIncrements(false, true)}}>
                        <ContentSectionTilePagerButton isLeft={false}/>
                    </div>
                        
                    <div onClick={() => {handleIncrements(true, false)}} >
                        <ContentSectionTilePagerButton isLeft={true}/>
                    </div>
                
                </div>
            </ContentSectionWrapper>

            <h3>
                Write your message here:
            </h3>

            <textarea id='test-submission-field'>

            </textarea>
        </ContentCorrectionWrapper>
        
        
    )
}