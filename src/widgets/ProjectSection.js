import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

import LandingPageTextConstants from '../global/LandingPageTextConstants.js';
// why? because these projects are going to manage their own state and will make the 
// LandingPage.js file cluttered if we were to handle all of this stuff in that page

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
        return (
            <div className="project-section">
                <div className="project-section-side-box">
                    <div className="project-section-side-box-main-text">
                        <h3>{this.template.title}</h3>
                        <h4>{this.template.description}</h4>
                        <h4>{this.template.action}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectSection;