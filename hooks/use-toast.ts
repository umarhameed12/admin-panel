import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToast = () => {
    const showSuccess = (message: string, options = {}) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            ...options,
        });
    };

    const showError = (message: string, options = {}) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            ...options,
        });
    };

    const showInfo = (message: string, options = {}) => {
        toast.info(message, {
            position: "top-right",
            autoClose: 3500,
            ...options,
        });
    };

    const showWarning = (message: string, options = {}) => {
        toast.warn(message, {
            position: "top-right",
            autoClose: 3500,
            ...options,
        });
    };

    return { showSuccess, showError, showInfo, showWarning };
};

export default useToast;
