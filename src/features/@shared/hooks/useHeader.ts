import { HeaderContext } from '@/features/@shared/context/HeaderContext';
import { useContext } from 'react';

const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context)
    throw new Error('useHeader must be used within a HeaderProvider');
  return context;
};

export default useHeader;
