import React from "react";

class DynamicALink extends React.Component {
    constructor(props) {
        super(props);

        this.text = props.text;
    }

    render() {
        return (
            <a>
                {this.text}
            </a>
        )
    }
}