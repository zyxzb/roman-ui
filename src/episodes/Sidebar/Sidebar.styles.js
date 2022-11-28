import styled, {keyframes} from 'styled-components';

export const AppearAnimation = keyframes `
    from{
        opacity: 0
    }
    to{
        opacity: 1;
    }
`;

export const Content = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 100px 30px;
    div{
        width: 100%;
        height: 20vh;
        background-color: lightgray;
        &:hover{
            background-color: pink;
        }
    }
`;
export const Navigation = styled.nav `
    display: ${({isOpen}) => isOpen ? 'block' : 'none'};
    width: 100%;
    height: 100vh;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    animation: 0.3s 1 forwards ${AppearAnimation};
    @media (min-width: 768px) {
        display: block;
        width: 300px;
        border-right: 3px solid black;
        animation: none;
        transform: translateX(${({isOpen}) => isOpen ? 0 : '-100%'});
        transition: transform 0.3s ease-in-out;
    }
    ul{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        list-style: none;
        text-transform: uppercase;
        li{
            margin: 20px 0;
            a{
                font-size: 24px;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
`;

export const MenuToggleButton = styled.button `
    z-index: 999;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: transparent;
    border: 2px solid black;
    overflow-x: hidden;
    cursor: pointer;

    @media (min-width: 768px) {
        left: 0;
        transform: translateX(${({isOpen}) => isOpen ? '300px' : '0'});
        transition: transform 0.3s ease-in-out;
        border-left: none;
    }

    span:first-child{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(${({isOpen}) => isOpen ? 'calc(-100% - 2px)' : 0});
        transition: transform ease-in-out 0.3s;
        
        &::before, ::after{
            position: absolute;
            content: '';
            width: 17px;
            height: 3px;
            background-color: black;
            left: 50%;
        }
        &::before{
            top: 13px;
            transform: translate(-50%, -50%) rotate(45deg);
        }
        &::after{
            bottom: 13px;
            transform: translate(-50%, 50%) rotate(-45deg);
        }
    }

    span:last-child{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: calc(100% + 2px);
        transform: translateX(${({isOpen}) => isOpen ? 'calc(-100% - 2px)' : 0});
        transition: transform ease-in-out 0.3s;
        &::before, ::after{
            position: absolute;
            content: '';
            width: 25px;
            height: 3px;
            background-color: black;
            top: 50%;
            left: 50%;
        }
        &::before{
            transform: translate(-50%, -50%) rotate(45deg);
        }
        &::after{
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
`;