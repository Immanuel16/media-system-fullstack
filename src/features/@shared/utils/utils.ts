'use client';

import { UserInfoType } from '@/features/@shared/types/global';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';
import 'dayjs/locale/id';
import dayjs from 'dayjs';
import { cookies } from 'next/headers';

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY as string;

const dateFormat = {
  display: 'DD MMMM YYYY',
  input: 'DD MMM YYYY',
  value: 'YYYY-MM-DD',
};

type CredentialType = {
  id: string;
  username: string;
  full_name: string;
  role: string;
  iat: number;
  exp: number;
};

const getCredentials = (): CredentialType | undefined => {
  try {
    let token: string | null = null;

    if (typeof window === 'undefined') {
      // Server side (SSR)
      const cookieStore = cookies();
      token = cookieStore.get('token')?.value || null;
    } else {
      // Client side (CSR)
      token = localStorage.getItem('token');
    }

    if (!token) return undefined;

    const payload = token.split('.')[1];
    const decoded = decryptBase64(payload) as string;

    return JSON.parse(decoded) as CredentialType;
  } catch {
    return undefined;
  }
};

const getAccountInfo = (): UserInfoType => {
  const user = decrypt(localStorage.getItem('user') as string) as UserInfoType;
  return user;
};

const encryptBase64 = (data: string) =>
  CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data));
const decryptBase64 = (data: string) =>
  CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(data));

function encrypt(value: unknown): string {
  const stringified = typeof value === 'string' ? value : JSON.stringify(value);
  return CryptoJS.AES.encrypt(stringified, SECRET_KEY).toString();
}

function decrypt<T = unknown>(encrypted: string): T | string | null {
  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    // Coba parse JSON, kalau gagal return string
    try {
      return JSON.parse(decrypted) as T;
    } catch {
      return decrypted; // Plain string
    }
  } catch (err) {
    console.error('Decrypt error:', err);
    return null;
  }
}

const formatRupiah = (angka: number) => {
  let number_string = angka?.toString(),
    sisa = number_string?.length % 3,
    rupiah = number_string?.substr(0, sisa),
    ribuan = number_string?.substr(sisa).match(/\d{3}/g),
    separator = '';
  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }
  return `Rp ${rupiah}`;
};

const convertDate = (date: string, format = dateFormat.display) => {
  dayjs.locale('id');
  return dayjs(date).format(format);
};

const showAlertError = (message: string) =>
  toast.error(message, {
    position: 'top-center',
    autoClose: 2000,
    theme: 'colored',
  });
const showAlertSuccess = (message: string) =>
  toast.success(message, {
    position: 'top-center',
    autoClose: 2000,
    theme: 'colored',
  });

const getFilterMonthRange = () => {
  // const year = new Date().getFullYear() - 1;
  const year = new Date().getFullYear();
  let rangeList = [];
  dayjs.locale('id');
  for (let month = 1; month <= 12; month++) {
    let startDate = dayjs(new Date(year, month - 1)).format('YYYY-MM-DD');
    let endDate = dayjs(startDate).endOf('month').format('YYYY-MM-DD');
    let monthName = dayjs(new Date(year, month - 1)).format('MMMM');
    rangeList.push({ start: startDate, end: endDate, month: monthName });
  }
  return rangeList;
};

const transformErrorResponse = (error: unknown) =>
  (error as { message?: string })?.message || 'An unexpected error occurred';

const getCrewAge = (birthdate: string) => {
  const formattedDate = birthdate.split('/');
  const birthdays = new Date(
    parseInt(formattedDate[2], 10),
    parseInt(formattedDate[1], 10) - 1,
    parseInt(formattedDate[0], 10),
  );
  const now = new Date();
  const diffTime = now.getTime() - birthdays.getTime();
  const dividedYear = 1000 * 3600 * 24 * 365.25;
  return Math.floor(diffTime / dividedYear);
};

export {
  getAccountInfo,
  getCredentials,
  encryptBase64,
  decryptBase64,
  showAlertError,
  showAlertSuccess,
  encrypt,
  decrypt,
  formatRupiah,
  convertDate,
  dateFormat,
  getFilterMonthRange,
  transformErrorResponse,
  getCrewAge,
};
