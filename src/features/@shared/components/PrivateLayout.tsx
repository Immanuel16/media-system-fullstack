'use client';
import FloatingMenu from '@/features/@shared/components/FloatingMenu';
import Header from '@/features/@shared/components/Headers';
import { cn } from '@/features/@shared/utils/cn';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="bg-gray-200 min-h-screen w-full relative text-xs">
      <div className="bg-white max-w-[480px] mx-auto font-poppins text-media-primary-black">
        <div className="relative">
          {/* HEADER */}
          {pathname !== '/' &&
            !pathname.includes('account') &&
            !pathname.includes('cash') && <Header />}

          {/* CONTENT */}
          <main
            className={cn(
              pathname === '/' ||
                pathname.includes('account') ||
                pathname.includes('cash')
                ? 'min-h-[calc(100vh-66px)] overflow-y-auto'
                : '',
              'bg-white text-xs overflow-y-auto',
            )}
          >
            {children}
          </main>

          {/* FOOTER */}
          <FloatingMenu />
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default PrivateLayout;
