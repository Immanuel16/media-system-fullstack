interface ModalSuccessType {
  image: string;
  title: string;
  message: string;
  type: number; // 1: success; 0: error
}

interface ModalSuccessContextType {
  showModals: boolean;
  setShowModals: (show: boolean) => void;
  configs: ModalSuccessType;
  setConfigs: (config: ModalSuccessType) => void;
}

interface UserInfoType {
  address: string;
  bank_acc_name: string;
  bank_acc_num: string;
  bank_id: string;
  bank_name: string;
  baptis: number;
  birth_date: string;
  full_name: string;
  hmc: number;
  id: string;
  kom: number;
  orientasi: number;
  phone: string;
  photo: string;
  total_pelayanan: number;
  total_pk: string;
  username: string;
}

export type { ModalSuccessType, ModalSuccessContextType, UserInfoType };
