import React from 'react';
import { List } from 'convertupleads-theme';
import { ALL_DATA_LISTS } from '../../helpers/constant/settingsSidebarListConstant.tsx';
import EachList from './EachList';

const ElementList = () => {
    const [selectedTitle, setSelectedTitle] = React.useState('Basic Settings');
    const [selected, setSelected] = React.useState('');

    const isSubmenuSelected = (title?: string, childTitle?: string) => {
        const result = ALL_DATA_LISTS.find((list) => list.title === title);
        if (result && title) {
            const hi = result.subMenu?.find((menu) => menu.title === childTitle);
            if (hi) {
                setSelected(title);
            }
        }
    };

    return (
        <>
            <List dense disablePadding sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component='nav'>
                {ALL_DATA_LISTS.map((allElement, i) => (
                    <EachList
                        selected={allElement.title === selected}
                        setSelected={setSelected}
                        key={i}
                        link={allElement?.link}
                        title={allElement?.title}
                        selectedTitle={selectedTitle}
                        onSelectTitle={setSelectedTitle}
                        submenu={allElement?.subMenu}
                        isSubmenuSelected={isSubmenuSelected}
                    />
                ))}
            </List>
        </>
    );
};

export default ElementList;
