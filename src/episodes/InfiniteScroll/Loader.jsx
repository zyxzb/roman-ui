import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: max-content;
    width: 100%;
    span{
        font-size: 22px;
    }
`
const Loader = () => {
    return (
        <LoadingWrapper>
            <ReactLoading className='loader' type={'cubes'} color={'#ffd121'} height={20} width={150} />
            <span>Loading more beers...</span>
        </LoadingWrapper>
    );
}

export default Loader;
