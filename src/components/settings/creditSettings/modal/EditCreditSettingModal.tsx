import React from 'react';

import { Divider, ModalWithHeader, Stack } from 'convertupleads-theme';
import EditForSMSCreditSettings from '../form/EditForSMSCreditSettings';
import EditForMMSCreditSettings from '../form/EditForMMSCreditSettings';
import EditForRVMCreditSettings from '../form/EditForRVMCreditSettings';
import { CREDIT_TYPE } from '../../../../helpers/constant/coreConstants';

interface Props {
    title?: string;
    open: boolean;
    onClose: () => void;
    type: string;
}

const EditCreditSettingModal: React.FC<Props> = ({ title = 'Cost Per Minute For', open, onClose, type }) => {
    let content: JSX.Element = <></>;
    if (type === CREDIT_TYPE.SMS) {
        content = (<EditForSMSCreditSettings />)
        title = `${title} ${CREDIT_TYPE.SMS}`;
    } else if (type === CREDIT_TYPE.MMS) {
        content = <EditForMMSCreditSettings />
        title = `${title} ${CREDIT_TYPE.MMS}`;
    } else if (type === CREDIT_TYPE.RINGLESS_VOICE_MAIL) {
        content = <EditForRVMCreditSettings />
        title = `${title} ${CREDIT_TYPE.RINGLESS_VOICE_MAIL}`;
    }

    return (
        <ModalWithHeader width={600} open={open} onClose={onClose} title={title}>
            <>
                <Stack p={3} spacing={1}>
                    {content}
                </Stack>

                <Divider light />
            </>
        </ModalWithHeader>
    );
};

export default EditCreditSettingModal;
