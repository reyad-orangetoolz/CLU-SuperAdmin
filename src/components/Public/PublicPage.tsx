import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFolderState } from '../../state/features/folder/folderSelector.ts';
import { getFolders } from '../../state/features/folder/folderSlice.ts';
import { Box, Button, Container, Stack, Typography } from 'convertupleads-theme';

const PublicPage: React.FC = () => {
    const dispatch = useDispatch();
    const { data, isLoading } = useSelector(selectFolderState);

    useEffect(() => {
        dispatch(getFolders({ currentPage: 1, limit: 10 }));
    }, []);

    console.log({ data, isLoading });

    let content: null | React.ReactElement = null;
    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (data?.length > 0) {
        content = (
            <ul>
                {data.map((folder) => (
                    <li key={folder.id}>{folder.name}</li>
                ))}
            </ul>
        );
    }

    useEffect(() => {
        return () => console.log('Public page unmount');
    }, []);

    return (
        <Container maxWidth={'lg'}>
            <Box sx={{ width: '100%' }}>
                {content}

                <Typography variant='h1' gutterBottom>
                    h1. Heading
                </Typography>
                <Typography variant='h2' gutterBottom>
                    h2. Heading
                </Typography>
                <Typography variant='h3' gutterBottom>
                    h3. Heading
                </Typography>
                <Typography variant='h4' gutterBottom>
                    h4. Heading
                </Typography>
                <Typography variant='h5' gutterBottom>
                    h5. Heading
                </Typography>
                <Typography variant='h6' gutterBottom>
                    h6. Heading
                </Typography>
                <Link to={'/dashboard'}>
                    <Button variant='text' color={'primary'}>
                        Go to dashboard
                    </Button>
                </Link>
                <Typography variant='subtitle1' gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                </Typography>
                <Typography variant='subtitle2' gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                </Typography>
                <Typography variant='body1' gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                    quibusdam.
                </Typography>
                <Typography variant='body2' gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                    quibusdam.
                </Typography>
                <Typography variant='button' display='block' gutterBottom>
                    button text
                </Typography>
                <Typography variant='caption' display='block' gutterBottom>
                    caption text
                </Typography>
                <Typography variant='overline' display='block' gutterBottom>
                    overline text
                </Typography>
            </Box>

            <Stack spacing={2} direction='row' sx={{ mb: 3 }}>
                <Button variant='text' color={'primary'}>
                    Text
                </Button>
                <Button variant='text' color={'secondary'}>
                    Text
                </Button>
                <Button variant='text' color={'info'}>
                    Text
                </Button>
                <Button variant='text' color={'warning'}>
                    Text
                </Button>
                <Button variant='text' color={'success'}>
                    Text
                </Button>
                <Button variant='text' color={'error'}>
                    Text
                </Button>
            </Stack>

            <Stack spacing={2} direction='row' sx={{ mb: 3 }}>
                <Button variant='contained' color={'primary'}>
                    Contained{' '}
                </Button>
                <Button variant='contained' color={'secondary'}>
                    Contained{' '}
                </Button>
                <Button variant='contained' color={'info'}>
                    Contained{' '}
                </Button>
                <Button variant='contained' color={'warning'}>
                    Contained{' '}
                </Button>
                <Button variant='contained' color={'success'}>
                    Contained{' '}
                </Button>
                <Button variant='contained' color={'error'}>
                    Contained{' '}
                </Button>
            </Stack>

            <Stack spacing={2} direction='row' sx={{ mb: 3 }}>
                <Button variant='outlined' color={'primary'}>
                    Outline
                </Button>
                <Button variant='outlined' color={'secondary'}>
                    Outline
                </Button>
                <Button variant='outlined' color={'info'}>
                    Outline
                </Button>
                <Button variant='outlined' color={'warning'}>
                    Outline
                </Button>
                <Button variant='outlined' color={'success'}>
                    Outline
                </Button>
                <Button variant='outlined' color={'error'}>
                    Outline
                </Button>
            </Stack>

            <Stack spacing={2} direction='row' sx={{ mb: 3 }}>
                <Typography variant='body1' gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                    quibusdam.
                </Typography>
                <Typography variant='body2' gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                    quibusdam.
                </Typography>
            </Stack>

            <Stack spacing={2} direction='row' sx={{ mb: 3 }}>
                <Typography variant='body1' gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                    quibusdam. body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
                    beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
                    quidem quibusdam. body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
                    suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
                    deleniti? Eum quasi quidem quibusdam.
                </Typography>
            </Stack>
        </Container>
    );
};

export default PublicPage;
