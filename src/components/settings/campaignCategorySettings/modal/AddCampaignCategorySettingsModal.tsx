import React from 'react';

import { Button, Divider, FileUpload, ModalWithHeader, Stack, TextField, Typography } from 'convertupleads-theme';

interface Props {
    title?: string;
    open: boolean;
    onClose: () => void;
}

const AddCampaignCategorySettingsModal: React.FC<Props> = ({ title = 'Add Campaign Category', open, onClose }) => {
    return (
        <ModalWithHeader width={600} open={open} onClose={onClose} title={title}>
            <>
                <Stack p={3} spacing={2}>
                    <TextField placeholder='' label='Category Name *' />

                    <Stack spacing={1}>
                        <Typography variant='body2' fontWeight={500} color={'text.secondary'}>
                            Avatar
                        </Typography>
                        <FileUpload status='loading' variant='linear' />
                    </Stack>
                </Stack>

                <Divider light />
                <Stack direction={'row'} spacing={2} justifyContent={'flex-end'} p={2}>
                    <Button color={'inherit'} variant={'tonal'} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={() => {}}>Create Category</Button>
                </Stack>
            </>
        </ModalWithHeader>
    );
};

export default AddCampaignCategorySettingsModal;
