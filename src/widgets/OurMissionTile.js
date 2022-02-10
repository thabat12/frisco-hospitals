import React from "react";

class OurMissionTile extends React.Component {
    constructor(props) {
        super(props);

        this.name = props.name;
        this.imageSrc = props.imageSrc;
        this.imageAlt = props.imageAlt;
    }

    // the class name is given here, which is really not a good idea but i'll try my best to keep it simple
    render() {
        return (
            <div className="our-mission-tile">
                <h3>{this.name}</h3>
            </div>
        )
    }
}

export default OurMissionTile;