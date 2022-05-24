import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import circleIcon from '../../../icons/circle.svg';
import ThemeConstants from '../../../global/ThemeConstants';
import galleryActionPageGroup from '../../../icons/galleryactionpage-first.svg';

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

        height: 275px;
    }

    .footer {
        display: flex;
        flex-direction: row;
        flex-grow: 1;

        justify-content: center;
        align-items: center;
    }


    @keyframes fade-in-anim {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    @keyframes fade-out-anim {
        from {opacity: 1;}
        to {opacity: 0;}
    }


    .button-pager {
        position: absolute;

        animation-name: fade-in-anim;
        animation-duration: 0.1s;


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

    .button-pager-left {
        position: absolute;

        animation-name: fade-in-anim;
        animation-duration: 0.5s;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        left: 80px;
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
            margin-right: 10px;

            transition: 0.2s;

            transform: rotate(180deg);
        }
    }

    .button-pager-left:hover {
        box-shadow: 2px 2px 15px 5px rgba(0,0,0,0.1);
        transform: scale(1.02);
    }

    .button-pager-left:active {
        box-shadow: 2px 2px 15px 1px rgba(0,0,0,0.05);
        transform: scale(0.97);
    }

    .button-pager-left:active .arrow {
        padding-left: 0px; 
    } 

    .button-pager-left:hover .arrow {
       padding-left: 20px; 
    }

    .fade-out {
        animation-name: fade-out-anim;
        animation-duration: 0.1s;
        
        opacity: 0;
    }

    .stay {
        opacity: 1;
    }

    .circles {
        width: 40px;
        height: 40px;

        margin-left: 10px;

    }

    #active-circle {
        position: absolute;
        transition: 0.5s;
        margin: 0;

        margin-right: 100px;
        margin-bottom: 5px;
    }
    


`;

const ContentSectionWrapper = styled.div`

    display: flex;
    flex-direction: column;
    position: relative;

    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

`;

const SectionSliderWrapper = styled.div`

    position: relative;
    display: flex;
    flex-direction: row;

    .circle-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .circles {
        width: 40px;
        height: 40px;

        margin-left: 5px;
        margin-right: 5px;

    }

    #active-circle {
        position: absolute;
        transition: 1s;
        margin: 0;
        
    }

`;

const galleryActionPageConstants = {
    pageCount: 3,
    pagerTextSequence: ['Begin', 'Next', 'Next', 'Finish'],
    activeCircleOffsets: [150, 50, -50, -150],
    activeContentSequence: [GalleryActionPageFirstSection],
    headerContentSequence: [
        {
            title: 'Submit To the FHN Gallery!', 
            description: 'Send us anything from pictures of Frisco Hospitals or your own artwork for a chance to win prizes and support your community.'}, 
        {
            title: 'Your Submission Details',
            description: 'Please fill out the following information before submitting your work. This information will help us better understand your submission.'
        }, 
        {

        }, 
        {

        }
    ]
};

export default function GalleryActionPage(props) {

    const [state, setState] = useState({
        curPage : 0
    });



    return (
        <ActionPageWrapper>
            <div className='header'>

                <h2 className='header-title'>
                    {galleryActionPageConstants.headerContentSequence[state.curPage]?.title}
                </h2>

                <h4 className='header-description'>
                    {galleryActionPageConstants.headerContentSequence[state.curPage]?.description}
                </h4> 
            </div>

            <div className='content'>
                <ContentSectionWrapper>
                    {
                      (state.curPage === 0) &&
                      <GalleryActionPageFirstSection/>      
                    }

                    {
                        (state.curPage === 1) && 
                        <div>
                           <form>

                                {/* section 1 */}

                                <h5>
                                    Your Submission Type
                                </h5>

                                <input type='checkbox'/>
                                <label>
                                    Artwork
                                </label>

                                <input type='checkbox'/>
                                <label>
                                    Photography
                                </label>

                                <input type='checkbox'/>
                                <label>
                                    Video / Animation
                                </label>

                                <input type='checkbox'/>
                                <label>
                                    Other
                                </label>

                                {/* section 2 */}

                                <h5>
                                    I allow FHN to...
                                </h5>

                                <input type='checkbox'/>
                                <label>
                                    Share my submission to different hospital locations
                                </label>

                                <input type='checkbox'/>
                                <label>
                                    Feature my work on the FHN website
                                </label>

                                {/* section 3 */}

                                <h5>
                                    Terms
                                </h5>

                                <input type='checkbox' required/>
                                <label>
                                    I understand that FHN will have access to my submission after uploading. I also understand that my work may be rejected if it contains inappropriate content.
                                </label>

                                <button type='proceed'>
                                    Save Section
                                </button>


                           </form>
                        </div>
                    }
                    
                </ContentSectionWrapper>
            </div>

            <div className='footer'>
                <SectionSlider/>
                <svg className="circles" id="active-circle" width="50" height="50" viewBox="0 0 200 200" fill={ThemeConstants.primaryAccentRed} xmlns="http://www.w3.org/2000/svg" style={{marginRight: galleryActionPageConstants.activeCircleOffsets[state.curPage]}}>
                    <circle cx="100" cy="100" r="100"/>
                </svg>

                {
                    (state.curPage <= galleryActionPageConstants.pageCount) &&

                    <button className='button-pager' onClick={ () => {setState({curPage : state.curPage + 1})} }>
                        <h2>
                            {galleryActionPageConstants.pagerTextSequence[state.curPage]}
                        </h2>
                        

                        <svg className='arrow' width="109" height="194" viewBox="0 0 109 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.60923 6.37433L102.951 96.2728C103.38 96.6687 103.38 97.3461 102.951 97.7421L5.60923 187.641" stroke="white" strokeWidth="20" strokeLinecap="round"/>
                        </svg>

                    </button>
                }


                {
                    (state.curPage !== 0) && 
                    <button className={'button-pager-left '} id='pager-left' onClick={() => setState({curPage : state.curPage - 1})}>
                        
                        <svg className='arrow' width="109" height="194" viewBox="0 0 109 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.60923 6.37433L102.951 96.2728C103.38 96.6687 103.38 97.3461 102.951 97.7421L5.60923 187.641" stroke="white" strokeWidth="20" strokeLinecap="round"/>
                        </svg>
                        
                        <h2>
                            Back
                        </h2>

                    </button>
                }

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


    let circleArray = [];

    for (let i = 0; i < itemCount; i++) {
        circleArray.push(<img src={circleIcon} className={'circles'} key={i} />)
    }

    return (
        <div className='circle-container'>
            <div>
                {circleArray}
            </div>
            

        </div>
        );
}


// For the content sections, i'm going to just make an array of pages that are supposed to be paged through
/*
    Goal:
        - components that can be stored in as an array 
        - fade in and out animations are a must!
        - text box elements are going to have to be accessible 



*/

const GalleryActionPageContent = styled.div`

    :root {
        --delay-one: 2s;
        --delay-two: 0.5s;
        --delay-three: 0.7s;
    }

    .overlay-all {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @keyframes float-anim {
        0% {
            transform: translate(0px, 0px);
        }

        50% {
            transform: translate(0px, -10px);
        }

        100% {
            transform: translate(0px, 0px);
        }
    }

    .image-icon {
        animation-name: float-anim;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        box-shadow: 10px 10px 100px 100px rgba(0,0,0,1);
        
        position: absolute;
    }

    #first-one {
        animation-delay: 0.2s;
    }

    #second-one {
        animation-delay: 0.5s;
    }

    #third-one {
        animation-delay: 0.8s;
    }

    p {
        margin-top: -50px;
        font-weight: bold;
        font-size: 20px;
    }
    

`;

function GalleryActionPageFirstSection() {

    return (
        <GalleryActionPageContent>
            <div className='overlay-all'>

                <svg className='gallery-viewing' width="465" height="465" viewBox="0 0 465 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="76" width="125" height="125" rx="5" fill="#FF6161" className='image-icon' id='first-one'/>
                    <rect x="340" width="125" height="125" rx="5" fill="#FF61EF" className='image-icon' id='third-one'/>
                    <rect x="208" width="125" height="125" rx="5" fill="#61A0FF" className='image-icon' id='second-one'/>
                    <circle id='person-1' cx="54" cy="163" r="50" fill="#7D7D7D"/>
                    <path id='person-2' d="M49.783 181.417C51.3495 176.961 57.6505 176.961 59.217 181.417L99.3575 295.592C100.501 298.844 98.0877 302.25 94.6405 302.25H14.3595C10.9123 302.25 8.49917 298.844 9.6425 295.592L49.783 181.417Z" fill="#7D7D7D"/>
                </svg> 

                <p>
                    Help build this website etc...
                </p>
                
            </div>
               
        </GalleryActionPageContent>
        
    );
}