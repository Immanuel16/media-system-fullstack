'use client';

import {
  AbsenceMenuIcon,
  AccountMenuIcon,
  AdminMenuIcon,
  CashMenuIcon,
  HomeMenuIcon,
} from '@/features/@shared/assets/icons';
// import { getCredentials } from '@/features/@shared/utils/utils';
import { usePathname, useRouter } from 'next/navigation';

const FloatingMenu = () => {
  // const role = getCredentials()?.role || 0;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <footer className="w-full fixed bottom-0">
      <div className="max-w-[480px] bg-white z-30 shadow-[0px_2px_10px_2px_rgba(134,134,134,0.15)] rounded-t-xl">
        <div className="flex justify-around py-3">
          <button
            className="flex flex-col justify-center items-center"
            onClick={() => router.push('/')}
          >
            <div
              className={`rounded-full w-10 h-10 flex items-center justify-center ${
                pathname === '/' ? 'bg-media-secondary-blue-2 p-3' : ''
              }`}
            >
              <HomeMenuIcon />
            </div>
            <p
              className={`${
                pathname === '/'
                  ? 'text-media-primary-blue'
                  : 'text-media-primary-black'
              } text-xxs`}
            >
              Beranda
            </p>
          </button>

          {/* Menu Absen */}
          <button
            className="flex flex-col justify-center items-center "
            onClick={() => router.push('/absen')}
          >
            <div
              className={`rounded-full w-10 h-10 flex items-center justify-center ${
                pathname.includes('absen')
                  ? 'bg-media-secondary-blue-2 p-3'
                  : ''
              }`}
            >
              <AbsenceMenuIcon />
            </div>
            <p
              className={`${
                pathname.includes('absen')
                  ? 'text-media-primary-blue'
                  : 'text-media-primary-black'
              } text-xxs`}
            >
              Absensi
            </p>
          </button>

          {/* Menu Admin */}
          {/* {+role !== 0 && (
            <button
              className="flex flex-col justify-center items-center "
              onClick={() => router.push('/admin')}
            >
              <div
                className={`rounded-full w-10 h-10 flex items-center justify-center ${
                  pathname.includes('admin')
                    ? 'bg-media-secondary-blue-2 p-3'
                    : ''
                }`}
              >
                <AdminMenuIcon />
              </div>
              <p
                className={`${
                  pathname.includes('admin')
                    ? 'text-media-primary-blue'
                    : 'text-media-primary-black'
                } text-xxs`}
              >
                Admin
              </p>
            </button>
          )} */}

          {/* Menu Kas */}
          <button
            className="flex flex-col justify-center items-center"
            onClick={() => router.push('/cash')}
          >
            <div
              className={`rounded-full w-10 h-10 flex items-center justify-center ${
                pathname.includes('cash') ? 'bg-media-secondary-blue-2 p-3' : ''
              }`}
            >
              <CashMenuIcon />
            </div>
            <p
              className={`${
                pathname.includes('cash')
                  ? 'text-media-primary-blue'
                  : 'text-media-primary-black'
              } text-xxs`}
            >
              Kas
            </p>
          </button>

          <button
            className="flex flex-col justify-center items-center space-y-0.5"
            onClick={() => router.push('/account')}
          >
            <div
              className={`rounded-full w-10 h-10 flex items-center justify-center ${
                pathname.includes('account')
                  ? 'bg-media-secondary-blue-2 p-3'
                  : ''
              }`}
            >
              <AccountMenuIcon />
            </div>
            <p
              className={`${
                pathname.includes('account')
                  ? 'text-media-primary-blue'
                  : 'text-media-primary-black'
              } text-xxs`}
            >
              Akun
            </p>
          </button>
        </div>
      </div>
    </footer>
  );

  return <div>FloatingMenu</div>;
};

export default FloatingMenu;
