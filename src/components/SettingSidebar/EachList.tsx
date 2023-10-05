import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Collapse, ListItemButton, List, ListItemText, ChevronDownIcon, ChevronUpIcon } from 'convertupleads-theme';
import EachListInterface from '../../interface/each-list.interface.ts';

interface Props {
    title: string;
    link?: string;
    selectedTitle: string;
    onSelectTitle: (select: string) => void;
    submenu?: EachListInterface['subMenu'];
    isSubmenuSelected: (title?: string, childTitle?: string) => void;
    selected: boolean;
    setSelected: (select: string) => void;
}

const EachList: React.FC<Props> = ({ title, link, selectedTitle, onSelectTitle, submenu, isSubmenuSelected, selected, setSelected }) => {
    const [open, setOpen] = React.useState(selected);
    const [openSubmenu, setOpenSubmenu] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setOpen(selected);
    }, [selected]);

    const handleClick = () => {
        setSelected(title);
        setOpen((open) => !open);
    };
    const handleClickSubmenu = () => {
        setOpenSubmenu((open) => !open);
    };

    const handleSelect = (selectedTitle: string) => {
        onSelectTitle(selectedTitle);
    };

    return (
        <>
            <ListItemButton
                selected={selected || selectedTitle === title}
                onClick={
                    submenu
                        ? handleClick
                        : () => {
                              navigate(link ? link : '');
                              handleSelect(title);
                              if (!submenu) {
                                  setSelected(title);
                              }
                          }
                }
            >
                <ListItemText primary={title} />
                {submenu ? (
                    open ? (
                        <ChevronUpIcon fontSize={'small'} color={'action'} />
                    ) : (
                        <ChevronDownIcon fontSize={'small'} color={'action'} />
                    )
                ) : (
                    ''
                )}
            </ListItemButton>
            {submenu && (
                <Collapse in={open} timeout='auto' unmountOnExit>
                    <List component='div' dense disablePadding>
                        {submenu.map((list, index) => (
                            <>
                                <ListItemButton
                                    key={index}
                                    selected={selectedTitle === list?.title && !list?.subMenu}
                                    sx={{ pl: 4, '&.Mui-selected': { background: 'transparent' } }}
                                    onClick={
                                        !list?.subMenu
                                            ? () => {
                                                  navigate(list?.link);
                                                  handleSelect(list?.title);
                                                  isSubmenuSelected(title, list.title);
                                              }
                                            : handleClickSubmenu
                                    }
                                >
                                    <ListItemText primary={list?.title} />
                                    {list?.subMenu ? openSubmenu ? <ChevronUpIcon /> : <ChevronDownIcon /> : ''}
                                </ListItemButton>
                                {list?.subMenu && (
                                    <>
                                        <Collapse key={index} in={openSubmenu} timeout='auto' unmountOnExit>
                                            <List component='div' disablePadding>
                                                {list?.subMenu.map((listitem) => (
                                                    <ListItemButton
                                                        key={listitem.title}
                                                        selected={selectedTitle === listitem?.title}
                                                        sx={{ pl: 6 }}
                                                        onClick={() => {
                                                            navigate('#');
                                                            handleSelect(listitem?.title);
                                                        }}
                                                    >
                                                        <ListItemText primary={listitem?.title} />
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </Collapse>
                                    </>
                                )}
                            </>
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};

export default EachList;
