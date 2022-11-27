import React from 'react';
import styled from 'styled-components';

const getShortName = (name) => {
    const words = name.split(' ');
    return `${words[0]} ${words[1]}`
}

const BeerWrapper = styled.div`
height: 400px;
border: 10px solid black;
width: 100%;
position: relative;

img{
    max-height: 95%;
    object-fit: contain;
    padding: 10px;
}
div {
    position: absolute;
    background-color: #ffd121;
    width: 100%;
    left: 0;
    bottom: 10%;
    text-align: right;
    font-weight: bold;
    padding: 15px 20px;
    z-index: -1;
}
`;

const Beer = React.forwardRef(({data:{image_url, name, abv}}, ref) => {
    return (
        <BeerWrapper ref={ref}>
            <img src={image_url} alt={name} />
            <div>
                <p>{name.length > 12 ? `${getShortName(name) + '..'}` : name}</p>
                <p>ABV: {abv}%</p>
            </div>
        </BeerWrapper>
    )
}) 

export default Beer