import { SpinnerContext } from '@/features/@shared/context/SpinnerContext';
import { useContext } from 'react';

const useSpinner = () => {
  const context = useContext(SpinnerContext);
  if (!context)
    throw new Error('useSpinner must be used within a SpinnerProvider');
  return context;
};

export default useSpinner;
