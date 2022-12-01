import React, {useRef, useEffect} from 'react';
import styled from "styled-components";
import image from './journey.jpg';
import gsap from 'gsap';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
`;

const StyledText = styled.h1`
    font-size: 105px;
    font-weight: bold;
`;

const StyledButton = styled.button`
    margin-top: 50px;
    font-size: 20px;
    background-color: transparent;
    border: none;
    position: relative;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 100px;
    width: 150px;
    height: 150px;
    
    &:hover span {
        transform: translate(-50%, -50%) scale(1.2);
    }
`;

const StyledSpan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    background-color: black;
    width: 150px;
    height: 150px;
    z-index: -1;
    transform-origin: 50% 50%;
    transition: transform 0.3s ease;
`;

const StyledImage = styled.img`
    width: 500px;
    height: auto;
    display: none;
`;

const StyledCloseButton = styled.button`
    color: white;
    font-size: 20px;
    font-weight: bold;
    background-color: transparent;
    border: none;
    margin-top: 20px;
    display: none;
    cursor: pointer;
`;

const Demo3 = () => {
    const tl = useRef(null);
    const buttonRef = useRef(null);
    const closeButtonRef = useRef(null);
    const titleRef = useRef(null);
    const wrapperRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        tl.current = gsap.timeline({paused: true});

        if(tl.current) {
            tl.current
                .to(titleRef.current, {
                    opacity: 0,
                    y: '-=50px',
                    duration: 0.5
                })
                .to(buttonRef.current.children[0], {
                    scale: 20,
                    duration: 0.9
                },'+=0.2')
                .set(wrapperRef.current, {
                    backgroundColor: 'black'
                })
                .to(buttonRef.current, {
                    opacity: 0,
                    duration: 0.3
                })
                .set([titleRef.current, buttonRef.current], {
                    display: 'none',
                })
                .set([closeButtonRef.current, imageRef.current], {
                    display: 'block',
                })
                .fromTo([imageRef.current, closeButtonRef.current], {
                    opacity: 0,
                    y:'+=50px'
                }, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2
                })
        }
    },[])

    const playOpen = () => tl.current.play();
    const playClose = () => tl.current.reverse();

    return (
        <Wrapper ref={wrapperRef}>
            <StyledText ref={titleRef}>Amazing journey</StyledText>
            <StyledButton ref={buttonRef} onClick={playOpen}>Discover
                <StyledSpan />
            </StyledButton>
            <StyledImage ref={imageRef} src={image} alt="My journey"/>
            <StyledCloseButton ref={closeButtonRef} onClick={playClose}>Close</StyledCloseButton>
        </Wrapper>
    )
};

export default Demo3;