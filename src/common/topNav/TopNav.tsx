import React from 'react';
import { Box, Breadcrumbs, ChevronRightIcon, Stack, Link, Typography } from 'convertupleads-theme';

interface TopNavProps {
    title: string;
    children?: React.ReactNode;
    currenRoute?: React.ReactNode;
    secondRoute?: string;
    rootRoute?: string;
}

const TopNav: React.FC<TopNavProps> = ({ title, rootRoute, currenRoute, secondRoute, children }) => {
    const handleClick = () => {
        console.log('Clicked');
    };

    return (
        <Stack
            justifyContent='space-between'
            alignItems='center'
            flexWrap='wrap'
            sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                },
            }}
        >
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} flex={1}>
                <Box>
                    <Typography variant='h5'>{title}</Typography>
                    <Breadcrumbs separator={<ChevronRightIcon fontSize='small' />} aria-label='breadcrumb'>
                        <Link underline='hover' key='1' color='inherit' href='/' onClick={handleClick}>
                            {rootRoute ? rootRoute : 'Settings'}
                        </Link>
                        ,
                        <Link underline='hover' key='2' color='inherit' href='#' onClick={handleClick}>
                            {secondRoute ? secondRoute : 'Profile Settings'}
                        </Link>
                        ,
                        {!secondRoute && (
                            <Link underline='hover' key='2' color='inherit' href='#' onClick={handleClick}>
                                {currenRoute}
                            </Link>
                        )}
                        ,
                    </Breadcrumbs>
                </Box>

                {children}
            </Stack>
        </Stack>
    );
};

export default TopNav;
