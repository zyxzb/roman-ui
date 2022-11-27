import React from 'react';
import {data} from './data';
import styled,{keyframes} from 'styled-components';

const Wrapper = styled.div `
    padding: 100px;
    width: 100%;
`;
const showBox = keyframes`
    0%{
        transform: scaleY(0);
    }
    100%{
        transform: scaleY(1);
    }
`
const showContent = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-2%);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }
`

const StyledDetails = styled.details `
    width: 600px;
    margin: 30px 0;
    div{
        transform: scaleY(0);
        transform-origin: 0 0;
        animation: 0.5s ease-in-out 1 forwards ${showBox};
        margin: 20px 0;
        background-color: #f9e852;
        padding: 15px;
        border-left: 10px solid black;
        p{
            opacity: 0;
            animation: 0.2s 0.5s ease-in 1 forwards ${showContent};
        }
    }
    summary{
        font-size: 24px;
        list-style: none;
        position: relative;
        cursor: pointer;
        &:focus-visible{
            outline: 3px solid #f9e852;
        }

        &::after{
            position: absolute;
            content: '>';
            left: -40px;
            transition: transform 0.2s ease-in-out;
        }
    }
    &[open]{
        summary {
            &::after{
            transform: rotate(90deg);
        }
        }
    }
    @media not all and (min-resolution:.001dpcm) {
        @supports (-webkit-appearance: none) and (stroke-color: transparent){
            summary::-webkit-details-marker{
                display: none;
            }
            summary:focus{
                outline: 3px solid #f9e852;
            }
        }
    }

`;

const AccordionFaq = () => {
    return (
        <Wrapper>
            {data.map(item => (
                <StyledDetails key={item.title}>
                    <summary>{item.title}</summary>
                    <div>
                        <p>{item.content}</p>
                    </div>
                </StyledDetails>
            ))}

        </Wrapper>
    );
}

export default AccordionFaq;
