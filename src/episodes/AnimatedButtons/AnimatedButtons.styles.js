import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
`;

export const StyledButton = styled.button`
    width: 200px;
    height: 50px;
    border: 3px solid black;
    background-color: transparent;
    cursor: pointer;
    margin: 50px;
    font-size: 20px;
    font-weight: bold;
`;

export const ButtonA = styled(StyledButton)`
    position: relative;
    overflow: hidden;
    transition: color 0.4s cubic-bezier(.56,0,.41,1);
    &::before{
        position: absolute;
        content: '';
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: black;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.4s cubic-bezier(.56,0,.41,1);
        z-index: -1;
    }
    &:hover::before{
        transform: translate(-50%, -50%) scale(1);
    }
    &:hover{
        color: white;
    }
`;

// Next Button

export const ButtonB = styled(StyledButton)`
    position: relative;
    overflow: hidden;
    transition: color 0.4s cubic-bezier(.56,0,.41,1);
    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        top: 0;
        left: 0;
        transform:scaleX(0);
        /* transform origin 0 - from start */
        transform-origin: 0;
        transition: transform 0.4s cubic-bezier(.56,0,.41,1);
        z-index: -1;
    }
    &:hover::before{
        transform: scaleX(1);
    }
    &:hover{
        color: white;
    }
`;

// Next Button

export const ButtonC = styled(StyledButton)`
    position: relative;
    overflow: hidden;
    border: none;
    box-shadow: inset 0 0 0 3px black;

    span{
        position: relative;
        z-index: 2;
    }
    
    &::before{
        position: absolute;
        content: '';
        width: 300px;
        height: 300px;
        background-color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1) rotate(45deg);
        transition: transform 0.4s cubic-bezier(.56,0,.41,1);
    }
    &:hover::before{
        transform: translate(-50%, -50%) scale(0) rotate(45deg);
    }
`;

// Next Button

export const ButtonD = styled(StyledButton)`
    position: relative;
    overflow: hidden;
    span{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        transition: transform 0.4s ease-in-out;
        &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        top: 0;
        left: 0;
        transform:scaleX(${({isLoading}) => isLoading ? '1' : '0'});
        transform-origin: 0;
        transition: transform 2.5s 0.5s cubic-bezier(.56,0,.41,1);
        z-index: -1;
        }
        &:nth-child(1){
            transform: translateY(${({isLoading, isSuccess}) => {
                if (isLoading) return '-100%';
                if (isSuccess) return '-100%';
                return '0%';
            }});
        }
        &:nth-child(2){
            color: white;
            transform: translateY(${({isLoading, isSuccess}) => {
                if (isLoading) return '0%';
                if (isSuccess) return '-100%';
                return '100%';
            }});
        }
        &:nth-child(3){
            transform: translateY(${({isLoading, isSuccess}) => {
                if (isLoading) return '100%';
                if (isSuccess) return '0%';
                return '100%';
            }});
        }
}
`;

// Next Button

const moveUpStart = keyframes`
from{
    transform: translateY(0);
}
to {
    transform: translateY(-100%);
}
`;
const moveUpEnd = keyframes`
from {
    transform: translateY(100%)
}
to {
    transform: translateY(0);
}
`;

export const ButtonE = styled(StyledButton)`
    overflow: hidden;
    position: relative;
    border: none;
    span{
        display: flex;
        justify-content: center;
        align-items:center;
        width: 100%;
        height: 100%;
        color: white;
    }
    &:hover span{
        animation: ${moveUpStart} 0.2s forwards, ${moveUpEnd} 0.2s forwards 0.2s ;
    }
    &::before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: black;
        z-index: -1;
        clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
        transition: clip-path 0.2s ease-in-out;
    }
    &:hover::before{
        transition-duration: 0.4s;
        clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%);
        }
`;

// Next Button

export const ButtonF = styled(StyledButton)`
    overflow: hidden;
    position: relative;
    background-color: white;
    span{
        mix-blend-mode: difference;
        display: flex;
        justify-content: center;
        align-items:center;
        width: 100%;
        height: 100%;
        color: white;
    }
    &:hover span{
        animation: ${moveUpStart} 0.2s forwards, ${moveUpEnd} 0.2s forwards 0.2s ;
    }
    &::before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 101%;
        width: 101%;
        background-color: black;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        transition: clip-path 0.2s ease-in-out;
    }
    &:hover::before{
        transition-duration: 0.4s;
        clip-path: polygon(0 0, 100% 0%, 0 0, 0% 100%);
        }
`;