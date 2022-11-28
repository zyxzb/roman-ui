import React, {useState} from 'react';
import { MenuToggleButton, Navigation, Content } from './Sidebar.styles';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <MenuToggleButton isOpen={isOpen} onClick={() => setIsOpen(prevState => !prevState)}>
                <span/>
                <span/>
            </MenuToggleButton>
                <Navigation isOpen={isOpen}>
                <ul>
                    <li><a tabIndex={isOpen ? null : '-1'} href="/">lorem</a></li>
                    <li><a tabIndex={isOpen ? null : '-1'} href="/">ipsum</a></li>
                    <li><a tabIndex={isOpen ? null : '-1'} href="/">dolor</a></li>
                    <li><a tabIndex={isOpen ? null : '-1'} href="/">sit</a></li>
                    <li><a tabIndex={isOpen ? null : '-1'} href="/">amet</a></li>
                </ul>
            </Navigation>
            <Content>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Content>
        </>
    );
}

export default Sidebar;
