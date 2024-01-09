import React from 'react';
import { toast } from 'react-toastify';

const useToast = () => {
  const commonProps = {
    position: 'bottom-center',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };
  return {
    notifySuccess: (message, otherProps) =>
      toast(message, { ...otherProps, ...commonProps, type: 'success' }),
    notifyFailure: (message, otherProps) =>
      toast(message, { ...otherProps, ...commonProps, type: 'error' }),
  };
};

export default useToast;
