import React, {useState, useEffect} from "react";

import styled from 'styled-components';

// i'm also experimenting with useState and useEffect here

const GalleryScrollPallete = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
`;

const GalleryScrollObjectComponent = styled.div`
    position: absolute;
    height: 145px;
    width: 145px;
    background-color: black;
    border-radius: 50%;
`;

/*
    steps: make around 8 circle image icon things 
    let them span across the page on a certain interval
    change only their left attributes while doing so 
    spawn them in an expected order and with expected rates and sizes
        however, the images that they represent may be random
*/

function GalleryScrollObject(props) {
    // props should be percentage value of left offset and top offset
    const [style, setStyle] = useState(props);

    useEffect(
        () => {

            const current = style;
            let interval = setInterval(
                () => {
                    setStyle( {left: current.left < Number.parseInt(-145) ? Number.parseInt(window.innerWidth + 145) : current.left -1, top: current.top} );
                }, 50
            );


            return () => {clearInterval(interval)}
        }
    );
    
    return (
        <GalleryScrollObjectComponent style={style}/>
    );

    
}

export default function GalleryScroll() {

    let leftOffsets = [], topOffsets = [];

    let offsetList = [];

    for (let i = 0; i < 8; i++) {
        console.log(window.innerHeight);
        offsetList.push([Number.parseInt((Math.random() * 5) + window.innerWidth * (i/8)), Number.parseInt(Math.random() * (window.innerHeight * 0.4))]);

    }

    const GalleryScrollObjectList = offsetList.map(
        ([left, top]) => {
            return <GalleryScrollObject left={left} top={top}/>
        }
    );



    // some #'s for scrolling constants



    return (
        <GalleryScrollPallete className="gallery-scroll">
            <GalleryScrollObject left={window.innerWidth * 0.0} top={window.innerHeight * 0.4 * 0.25}/>
            <GalleryScrollObject left={window.innerWidth * 0.2} top={window.innerHeight * 0.4 * 0.25}/>
            <GalleryScrollObject left={window.innerWidth * 0.4} top={window.innerHeight * 0.4 * 0.25}/>
            <GalleryScrollObject left={window.innerWidth * 0.6} top={window.innerHeight * 0.4 * 0.25}/>
            <GalleryScrollObject left={window.innerWidth * 0.8} top={window.innerHeight * 0.4 * 0.25}/>
            <GalleryScrollObject left={window.innerWidth * 1.0} top={window.innerHeight * 0.4 * 0.25}/>
            <GalleryScrollObject left={window.innerWidth * 0.0} top={window.innerHeight * 0.4 * 0.75}/>
            <GalleryScrollObject left={window.innerWidth * 0.2} top={window.innerHeight * 0.4 * 0.75}/>
            <GalleryScrollObject left={window.innerWidth * 0.4} top={window.innerHeight * 0.4 * 0.75}/>
            <GalleryScrollObject left={window.innerWidth * 0.6} top={window.innerHeight * 0.4 * 0.75}/>
            <GalleryScrollObject left={window.innerWidth * 0.8} top={window.innerHeight * 0.4 * 0.75}/>
            <GalleryScrollObject left={window.innerWidth * 1.0} top={window.innerHeight * 0.4 * 0.75}/>
        </GalleryScrollPallete>
    )
}