'use client';

import {
  ModalSuccessContextType,
  ModalSuccessType,
} from '@/features/@shared/types/global';
import { createContext, useContext, useState } from 'react';

const ModalsContext = createContext<ModalSuccessContextType | undefined>(
  undefined,
);

const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModals, setShowModals] = useState(false);
  const [configs, setConfigs] = useState<ModalSuccessType>({
    image: '',
    message: '',
    title: '',
    type: 1 /* 1: success; 0: error */,
  });
  return (
    <ModalsContext.Provider
      value={{ showModals, setShowModals, configs, setConfigs }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export { ModalsProvider, ModalsContext };
