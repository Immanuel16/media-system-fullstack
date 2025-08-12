import { ModalsContext } from '@/features/@shared/context/ModalContext';
import { useContext } from 'react';

const useModal = () => {
  const context = useContext(ModalsContext);
  if (!context)
    throw new Error('useModals must be used within a ModalsProvider');
  return context;
};

export default useModal;
