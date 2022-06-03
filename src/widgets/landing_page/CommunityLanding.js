import React, {useState, useEffect} from "react";
import styled from 'styled-components';

const CommunityLandingWidget = styled.div`
    height: 100vh;
    width: 100%;

    margin-bottom: 25px;
    padding-top: 20px;

    background-color: yellow;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function CommunityLanding(props) {

    useEffect(
        () => {
            // tracking if component did mount
            
        }
    )

    return (
        <CommunityLandingWidget>
            <h2>
                Building a stronger community together.
            </h2>

            <h3>
                FHN platform aims to promote experiences of volunteerism, community awareness, 
                and aid for others much more accessible. We plan to promote this platform for 
                years to come, and greatly appreciate your support and feedback in our mission. 
            </h3>
        </CommunityLandingWidget>
    );
}