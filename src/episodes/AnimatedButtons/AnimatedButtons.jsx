import React, {useState} from 'react';
import { Wrapper, ButtonA, ButtonB, ButtonC, ButtonD, ButtonE, ButtonF } from './AnimatedButtons.styles';

const AnimatedButtons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsSuccess(true);
            setIsLoading(false);
        }, 3000)
    };

    return (
        <Wrapper>
            <ButtonA>Click Me</ButtonA>
            <ButtonB>Click Me</ButtonB>
            <ButtonC><span>Click Me</span></ButtonC>
            <ButtonD isLoading={isLoading} isSuccess={isSuccess} onClick={handleSubmit}>
                <span>Submit</span>
                <span>Loading...</span>
                <span>Success!</span>
            </ButtonD>
            <ButtonE><span>Next</span></ButtonE>
            <ButtonF><span>Next</span></ButtonF>
        </Wrapper>
    );
}

export default AnimatedButtons;
