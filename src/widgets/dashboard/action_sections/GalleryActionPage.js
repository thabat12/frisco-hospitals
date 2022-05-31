import React, {useState, useEffect, useCallback} from 'react';
import { useDropzone } from 'react-dropzone';
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
        height: 150px;

        justify-content: center;
        align-items: center;
    }

    .header-title {
        font-size: 30px;
    }

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

    @keyframes fadein-sr-anim {
        from {
            opacity: 0;
            transform: translate(-100px);
        }
        to {
            opacity: 1;
            transform: translate(0px);
        }
    }

    @keyframes fadeout-sr-anim {
        from {
            opacity: 1;
            transform: translate(0px);
        }
        to {
            opacity: 0;
            transform: translate(100px);
        }
    }

    @keyframes fadein-sl-anim {
        from {
            opacity: 0;
            transform: translate(100px);
        }
        to {
            opacity: 1;
            transform: translate(0px);
        }
    }

    @keyframes fadeout-sl-anim {
        from {
            opacity: 0;
            transform: translate(-100px);
        }
        to {
            opacity: 1;
            transform: translate(0px);
        }
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

    .fade-in {
        animation-name: fade-in-anim;
        animation-duration: 0.5s;
        opacity: 1;
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

    .fadein-sr {
        animation-name: fadein-sr-anim;
        animation-duration: 0.1s;
    }

    .fadein-sl {
        animation-name: fadein-sl-anim;
        animation-duration: 0.1s;
    }

    .fadeout-sr {
        animation-name: fadeout-sr-anim;
        animation-duration: 0.1s;
    }

    .fadeout-sl {
        animation-name: fadeout-sl-anim;
        animation-duration: 0.1s;
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

function GalleryActionPageFirstSection(props) {

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

const FormSectionWrapper = styled.div`

    form {
        padding-left: 20px;
        padding-right: 20px;

        display: flex;
        flex-direction: column;
    }

    label {

    }

    button {
        background-color: ${ThemeConstants.primaryAccentRed};
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;

        transition: 0.1s linear;
    }

    button:hover {
        transform: scale(1.05);
    }

    button:active {
        transform: scale(0.95);
    }

    .input-label-box {
    }

`;

function GalleryActionPageSecondSection() {

    const [btnState, setBtnState] = useState('');

    function handleBtnState(e) {
        e.preventDefault();
        if (btnState === '') {
            setBtnState('checked');
        }
    }

    return (
        <FormSectionWrapper>
            <div>
                <form>

                    {/* section 1 */}

                    <div className='form-section'>

                        <h5 className='action-section-title'>
                            Your Submission Type
                        </h5>

                        <div>
                            <input type='checkbox'/>
                            <label>
                                Artwork
                            </label>
                        </div>
                    
                        <div>
                            <input type='checkbox'/>
                            <label>
                                Photography
                            </label>
                        </div>
                        

                        <div>
                            <input type='checkbox'/>
                            <label>
                                Video / Animation
                            </label>
                        </div>
                        

                        <div>
                            <input type='checkbox'/>
                            <label>
                                Other
                            </label>
                        </div>

                    </div>
                    

                    {/* section 2 */}

                    <div className='form-section'>

                        <h5>
                            I allow FHN to...
                        </h5>

                        <div>
                            <input type='checkbox'/>
                            <label>
                                Share my submission to different hospital locations
                            </label>
                        </div>
                        
                        <div>
                            <input type='checkbox'/>
                            <label>
                                Feature my work on the FHN website
                            </label>
                        </div>

                    </div>

                    {/* section 3 */}

                    <div className='form-section'>

                        <h5>
                            Terms
                        </h5>

                        <div className='input-label-box'>
                            <input type='checkbox' required/>
                            <label>
                                I understand that FHN will have access to my submission after uploading. I also understand that my work may be rejected if it contains inappropriate content.
                            </label>
                        </div>
                        

                        <button type='proceed' onClick={(e) => {
                            handleBtnState(e);
                        }}>
                            Save Section
                        </button>

                    </div>


                </form>
            </div>
        </FormSectionWrapper>
    );
}

const DropzoneWrapper = styled.div`

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #test-this {
        height: 100px;
    }
    

    #container {
        position: relative;

        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px;
        border-width: 2px;
        border-radius: 10px;
        border-color: rgba(100,100,50,1.0);
        border-style: dashed;
        background-color: #fafafa;
        color: #bdbdbd;
        outline: none;
        transition: .24s ease-in-out;
    }

    #container:hover {
        transform: scale(1.04);
    }

`;

function DragDropFileSection(props) {

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
            // Do whatever you want with the file contents
                const binaryStr = reader.result;

                var blob = new Blob([binaryStr], {type: 'image/jpeg'});
                var urlCreator = window.URL || window.webkitURL;
                var imageUrl = urlCreator.createObjectURL(blob);



                const output = document.getElementById('test-this');
                output.src = imageUrl;
                console.log(binaryStr);
            }
            reader.readAsArrayBuffer(file)
        })
    })

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop});

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));

    
    return (
        <DropzoneWrapper>
            <img id='test-this'>
            </img>
        
            <div id='container'>
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <p>Drag and drop some files here, or click to select files</p>

                    <aside>
                        <h4>Files</h4>
                        <ul>
                            {files}
                        </ul>
                    </aside>
                </div>
            </div>

        </DropzoneWrapper>
    );
}

const galleryActionPageConstants = {
    pageCount: 3,
    pagerTextSequence: ['Begin', 'Next', 'Next', 'Finish'],
    activeCircleOffsets: [150, 50, -50, -150],
    activeContentSequence: [GalleryActionPageFirstSection, GalleryActionPageSecondSection, DragDropFileSection],
    headerContentSequence: [
        {
            title: 'Submit To the FHN Gallery!', 
            description: 'Send us anything from pictures of Frisco Hospitals or your own artwork for a chance to win prizes and support your community.'}, 
        {
            title: 'Your Submission Details',
            description: 'Please fill out the following information before submitting your work. This information will help us better understand your submission.'
        }, 
        {
            title: 'Submit To the FHN Gallery!', 
            description: 'In this section, please upload an image / images of your work. '
        }, 
        {
            title: 'Submission Description and Finish',
            description: 'Finally, provide a short description of your work and once finished, save your submission with the "Finish" button.'
        }
    ]
};

function SubmissionDescriptionFinishSection(props) {

    return (
        <div>
            <textarea name='para_text' cols='50' rows='10'>

            </textarea>
        </div>
    );
}

/*

    the beefy-est function for something so simple, i still need to add these things! :: 

        - firebase memory of past submissions
            - set a cap of 1 submission per week or something by checking account and such

        - transition animations

        - submission success screen


*/

export default function GalleryActionPage(props) {

    const [state, setState] = useState({
        curPage : 0
    });

    const [buttonState, setButtonState] = useState({
        leftButton : '',
        rightButton : '', 
        header: '',
        content: ''
    });

    // unfortunately, this function is for a very special case, so have to make more general
    function giveTimeForAnimationLeaving(pageBack) {

        setButtonState({leftButton: 'fade-out', header: 'fade-out', content: 'fade-out'});

        let myInterval = setInterval(
            () => {
                console.log('ending the button thing');
                setButtonState({
                    leftButton : '',
                    rightButton : '', 
                    header: 'fade-in',
                    content: 'fade-in'
                });
                pageBack && setState({curPage: state.curPage - 1});
                
                clearInterval(myInterval);
            }, 100
        );
    }

    function handlePageForwardBackwardTransitions(pageForward, pageBackward) {

        setButtonState({leftButton: '', header: 'fade-out', content: 'fade-out'});

        let myInterval = setInterval(
            () => {

                setButtonState({
                    leftButton : '',
                    rightButton : '', 
                    header: 'fade-in',
                    content: 'fade-in'
                });

                clearInterval(myInterval);

                pageForward && setState({curPage: state.curPage + 1});
                pageBackward && setState({curPage: state.curPage - 1});



            }, 100
        );
    }

    return (
        <ActionPageWrapper>
            <div className={'header ' + buttonState.header}>

                <h2 className='header-title'>
                    {galleryActionPageConstants.headerContentSequence[state.curPage]?.title}
                </h2>

                <h4 className='header-description'>
                    {galleryActionPageConstants.headerContentSequence[state.curPage]?.description}
                </h4> 
            </div>

            <div className={'content ' + buttonState.content}>
                <ContentSectionWrapper>
                    
                    {
                        (state.curPage === 0) &&
                        <GalleryActionPageFirstSection/>
                    }

                    {
                        (state.curPage === 1) &&
                        <GalleryActionPageSecondSection/>
                    }

                    {
                        (state.curPage === 2) &&
                        <DragDropFileSection/>
                    }

                    {
                        (state.curPage === 3) &&
                        <SubmissionDescriptionFinishSection/>
                    }
                    
                </ContentSectionWrapper>
            </div>

            <div className='footer'>
                <SectionSlider/>
                <svg className="circles" id="active-circle" width="50" height="50" viewBox="0 0 200 200" fill={ThemeConstants.primaryAccentRed} xmlns="http://www.w3.org/2000/svg" style={{marginRight: galleryActionPageConstants.activeCircleOffsets[state.curPage]}}>
                    <circle cx="100" cy="100" r="100"/>
                </svg>

                {
                    (state.curPage <= galleryActionPageConstants.pageCount && state.curPage !== 4) &&

                    <button className='button-pager' onClick={ () => {handlePageForwardBackwardTransitions(true, false);} }>
                        <h2>
                            {galleryActionPageConstants.pagerTextSequence[state.curPage]}
                        </h2>
                        

                        <svg className='arrow' width="109" height="194" viewBox="0 0 109 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.60923 6.37433L102.951 96.2728C103.38 96.6687 103.38 97.3461 102.951 97.7421L5.60923 187.641" stroke="white" strokeWidth="20" strokeLinecap="round"/>
                        </svg>

                    </button>
                }


                {
                    (state.curPage !== 0 && state.curPage !== 4) && 
                    <button className={'button-pager-left ' + buttonState.leftButton} id='pager-left' onClick={
                            () => {

                                if (state.curPage === 1) {
                                    giveTimeForAnimationLeaving(true);
                                } else {
                                    handlePageForwardBackwardTransitions(false, true);
                                }
                            }
                        }>
                        
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