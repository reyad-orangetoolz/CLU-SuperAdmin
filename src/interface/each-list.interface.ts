import React from 'react';

interface EachListInterface {
    title: string;
    link?: string;
    subMenu?: { title: string; link: string; subMenu?: EachListInterface[] }[];
}

export interface SidebarListInterface {
    icon?: React.ReactNode;
    secondaryIcon?: React.ReactNode;
    title: string;
    link?: string;
}

export default EachListInterface;
