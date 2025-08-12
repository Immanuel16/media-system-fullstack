'use client';
import { createContext, useState } from 'react';

interface SpinnerContextType {
  showSpinner: boolean;
  setShowSpinner: (show: boolean) => void;
}

const SpinnerContext = createContext<SpinnerContextType | undefined>(undefined);

const SpinnerProvider = ({ children }: { children: React.ReactNode }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  return (
    <SpinnerContext.Provider value={{ showSpinner, setShowSpinner }}>
      {children}
    </SpinnerContext.Provider>
  );
};

export { SpinnerContext, SpinnerProvider };
