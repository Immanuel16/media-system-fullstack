'use client';
import { createContext, useContext, useState } from 'react';

interface HeaderContextType {
  titleHeader: string;
  setTitleHeader: (title: string) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [titleHeader, setTitleHeader] = useState('');

  return (
    <HeaderContext.Provider value={{ titleHeader, setTitleHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderProvider, HeaderContext };
