// import cogoToast, { CTOptions } from 'cogo-toast';
// import {Typography} from "convertupleads-theme";
//
// const validateMessage = (message: string) => {
//     return typeof message === 'string' ? message : '';
// };
//
// const options: CTOptions = {
//     position: 'bottom-right',
//     hideAfter: 4,
// };
//
// export const showSuccessToaster = (message = '') => {
//     cogoToast.success(
//         <div>
//             <Typography variant={'subtitle1'}>Success,</Typography>
//             <Typography variant={'body2'}>{validateMessage(message)}</Typography>
//         </div>,
//         options
//     );
// };
//
// export const showErrorToaster = (message = '') => {
//     cogoToast.error(
//         <div>
//             <Typography variant={'subtitle1'}>Failed,</Typography>
//             <Typography variant={'body2'}>{validateMessage(message)}</Typography>
//         </div>,
//         options
//     );
// };
//
// export const showInfoToaster = (message = '') => {
//     cogoToast.info(
//         <div>
//             <Typography variant={'body2'}>{validateMessage(message)}</Typography>
//         </div>,
//         options
//     );
// };
