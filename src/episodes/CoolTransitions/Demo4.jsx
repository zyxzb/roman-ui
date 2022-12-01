import React, {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import image from './discover.jpg';
import gsap from 'gsap';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`;

const StyledHalfBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    flex-direction: ${({isColumn}) => isColumn ? 'column' : 'row'};
`;

const StyledText = styled.span`
    font-size: 105px;
    font-weight: bold;
    color: ${({isWhite}) => isWhite ? 'white' : 'black'};
`;

const StyledContent = styled(StyledHalfBox)`
    position: absolute;
    right: -50vw;
`;

const StyledCurtain = styled(StyledHalfBox)`
    position: absolute;
    height: 100vh;
    right: 0;
    cursor: pointer;
    z-index: 2;

    img {
        width: 50vw;
        height:100%;
        position: absolute;
        object-fit: cover;
        z-index: -1;
    }
`;

const StyledParagraph = styled.p`
    font-size: 20px;
    max-width: 500px;
`;

const Demo4 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const tl = useRef(null);
    const curtainRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        tl.current = gsap.timeline({paused: true});
        
        tl.current
            .to([titleRef.current, curtainRef.current.children, contentRef.current], {
                x: '-=50vw',
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.inOut",
            })
    },[])


    const handleClick = () => {
        if(isOpen) {
            tl.current.reverse()
        } else {
            tl.current.play()
        }
        setIsOpen(prevState => !prevState);
    }

    return (
        <Wrapper>
            <StyledHalfBox ref={titleRef}>
                <StyledText>Discover</StyledText>
            </StyledHalfBox>
            <StyledCurtain ref={curtainRef} onClick={handleClick} >
                <img src={image} alt=""/>
                <StyledText isWhite>More</StyledText>
            </StyledCurtain>
            <StyledContent isColumn ref={contentRef}>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque blanditiis
                    commodi consequuntur ducimus ea earum in ipsum iste itaque iusto minus natus necessitatibus numquam,
                    quam quos recusandae rerum!</StyledParagraph>
                <StyledParagraph>[click here to close]</StyledParagraph>
            </StyledContent>
        </Wrapper>
    )
};

export default Demo4;