import React from "react";
import styled from 'styled-components';

import donateIcon from '../icons/donate.svg';
import volunteerIcon from '../icons/volunteer.svg';
import galleryIcon from '../icons/gallery.svg';


const OurMissionTileWrapper = styled.div`

    .our-mission-tile-component {
        transition: 0.2s transform linear;
        transform: scale(1.0);
    }

    .our-mission-tile-component:hover {
        transform: scale(1.05);
    }


`;

const OurMissionTileComponent = styled.div`

    cursor: pointer;

    h3 {
        font-size: 35px;
        margin-top: 20px;
        margin-bottom: 30px;
        margin-right: 10px;
    }

    h5 {
        position: relative;
        text-align: center;
        font-size: 20px;
        font-weight: normal;
    }

    .header-wrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .action-icon {
        height: 45px;
        color: red;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    height: 22vw;
    width: 22vw;

    padding: 15px;
`;

class OurMissionTile extends React.Component {
    constructor(props) {
        super(props);

        this.name = props.name;
        this.imageSrc = props.imageSrc;
        this.imageAlt = props.imageAlt;
    }

    // the class name is given here, which is really not a good idea but i'll try my best to keep it simple
    render() {

        let textDescription = '';
        let curIcon = undefined;

        switch(this.name) {
            case 'Volunteer':
                textDescription = 'Experience the hospital community first-hand through volunteering and community events.';
                curIcon = volunteerIcon;
                break;
            case 'Gallery':
                textDescription = 'Contribute to the local art community by sharing your own work for special prizes and display in a hospital near you!';
                curIcon = galleryIcon;
                break;
            case 'Donate':
                textDescription = 'Donate anything from books to financial contributions to a hospital near you and track how you contributions are helping.';
                curIcon = donateIcon;
                break;
        } 


        return (
            <OurMissionTileWrapper>
                <OurMissionTileComponent className="our-mission-tile-component">
                    <div className="header-wrapper">
                        <h3>{this.name}</h3>
                        <img src={curIcon} alt="logo" className="action-icon"></img>
                    </div>
                    
                    <h5>{textDescription}</h5>
                </OurMissionTileComponent>
            </OurMissionTileWrapper>
            
        )
    }
}

export default OurMissionTile;