import React from 'react';

import { Divider, ModalWithHeader, Stack } from 'convertupleads-theme';
import EditForSMSCreditSettings from '../form/EditForSMSCreditSettings';
import EditForMMSCreditSettings from '../form/EditForMMSCreditSettings';
import EditForRVMCreditSettings from '../form/EditForRVMCreditSettings';
import { CREDIT_SETTING_MODAL_TYPE } from '../../../../helpers/constant/coreConstants';
import { IPropsModal } from '../../../../interface/credit-setting.interface';

const EditCreditSettingModal: React.FC<IPropsModal> = ({ title = 'Cost Per Minute For', open, onClose, type }) => {
    let content: JSX.Element = <></>;

    // for close the modal
    const handleClose = () => {
        onClose();
    }

    // dynamic rendering of each edit model per row
    if (type === CREDIT_SETTING_MODAL_TYPE.SMS.type) {
        content = <EditForSMSCreditSettings handleClose={handleClose} /> // edit sms form component
        title = `${title} ${CREDIT_SETTING_MODAL_TYPE.SMS.type}`;
    } else if (type === CREDIT_SETTING_MODAL_TYPE.MMS.type) {
        content = <EditForMMSCreditSettings handleClose={handleClose} /> // edit mms form component
        title = `${title} ${CREDIT_SETTING_MODAL_TYPE.MMS.type}`;
    } else if (type === CREDIT_SETTING_MODAL_TYPE.RINGLESS_VOICE_MAIL.type) {
        content = <EditForRVMCreditSettings handleClose={handleClose} /> // edit rignless voice mail form component
        title = `${title} ${CREDIT_SETTING_MODAL_TYPE.RINGLESS_VOICE_MAIL.type}`;
    }

    return (
        <ModalWithHeader width={600} open={open} onClose={onClose} title={title}>
            <>
                <Stack p={3} spacing={1}>
                    {/* pass the child for dynamic modal */}
                    {content}
                </Stack>

                <Divider light />
            </>
        </ModalWithHeader>
    );
};

export default EditCreditSettingModal;
