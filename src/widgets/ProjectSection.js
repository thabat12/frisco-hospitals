import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

import styled from 'styled-components';

import LandingPageTextConstants from '../global/LandingPageTextConstants.js';
import GalleryScroll from "./landing_page/GalleryScroll.js";
// why? because these projects are going to manage their own state and will make the 
// LandingPage.js file cluttered if we were to handle all of this stuff in that page

import volunteerBackground from '../images/volunteer.png';
import galleryBackground from '../images/gallery.png';
import donateBackground from '../images/donate.png';


/*
    for reference, here is the overall container's css layout

    #take-a-look-h2 {
        margin-top: 10vh;
        text-align: center;
    }

    .project-section {
        position: relative;
        height: 50vh;

        margin-bottom: 3em;
    }

    .project-section-side-box {
        position: absolute;
        background-color: white;

        top: 20%;
        left: 5%;

        height: 45%;
        width: 40%;

        border-radius: 10px;
    }

    .project-section-side-box-main-text {
        position: absolute;
        width: 70%;

        top: 30%;
        left: 5%;
    }

*/



const ProjectSectionComponent = styled.div`

    .img-wrapper {
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: hidden;

        vertical-align: middle;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;

        filter: drop-shadow(5 5 5 black);
    }

    .image-background {
        position: absolute;
        display: inline-block;
        width: 100%;

        overflow: hidden;

        vertical-align: middle;        
    }

    .wrap-project-tile-and-description {
        display: flex;
        flex-direction: row;
    }

    .current-project-box-description {
        position: absolute;
        display: flex;
        align-items: center;
        text-align: center;

        width: 40%;
        left: 50%;
        top: 20%;
        height: 45%;
    }

    .project-description-snippet {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        h3 {
            margin-bottom: 10px;
        }

        h4 {
            font-weight: normal;
            padding-left: 5px;
            padding-right: 5px;
            text-align: center;
        }
    }

    .progress-project-box {
        font-size: 20px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* positions are all reset in this way */
    

    .project-section {
        margin-bottom: 0px;

        .project-section-side-box {
            transition: 0.2s linear;
            transform: scale(1.0);
            cursor: pointer;
        }

        .project-section-side-box:hover {
            transform: scale(1.05);
        }
    }
`;

const ProjectSectionTile = styled.div`
    background-color: white;
    border-radius: 10px;
`;


class ProjectSection extends React.Component {
    constructor(props) {
        super(props);

        if (props.name != 'donate' && props.name != 'volunteer' && props.name != 'gallery') {
            throw 'Invalid Project Section Name';
        }

        // my first ever switch cases in js!
        switch (props.name) {
            case 'doante':
                this.template = LandingPageTextConstants.donate;
                break;
            case 'volunteer': 
                this.template = LandingPageTextConstants.volunteer;
                break;
            case 'gallery':
                this.template = LandingPageTextConstants.gallery;
                break;

            default:
                this.template = LandingPageTextConstants.donate;
        }
        
    }

    // TODO: have to make these separate for each type of widget
    render() {

        let imageRef = undefined;

        if (this.template === LandingPageTextConstants.volunteer) {
            imageRef = volunteerBackground;
        } else if (this.template === LandingPageTextConstants.gallery) {
            imageRef = galleryBackground;
        } else {
            imageRef = donateBackground;
        }


        return (
            <ProjectSectionComponent className="project-section">
                <div className="img-wrapper">
                    <img className='image-background' src={imageRef}></img>
                </div>
                <div className="wrap-project-tile-and-description">
                    <div className="project-section-side-box">
                        <div className="project-section-side-box-main-text">
                            <h3>{this.template.title}</h3>
                            <h4>{this.template.description}</h4>
                            {/* there is nothing to show for these yet so im leaving them out for now */}
                            {/* <h4>{this.template.action}</h4> */}
                        </div>
                    </div>

                    <div className="current-project-box-description">
                        <div className="project-description-snippet">
                            <h3>{this.template.projectbox_title}</h3>
                            <h4>{this.template.projectbox_description}</h4>

                            <div className="progress-project-box">
                                <h5>{this.template.projectbox_progress}</h5>
                                <h5>{this.template.projectbox_progress_description}</h5>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                
            </ProjectSectionComponent>
        )
    }
}

export default ProjectSection;