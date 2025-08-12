'use client';

import useHeader from '@/features/@shared/hooks/useHeader';

const Header = () => {
  const { titleHeader } = useHeader();

  return (
    <header className="bg-media-primary-blue text-white text-xl font-semibold shadow-md sticky top-0 z-10 w-full py-5 rounded-br-header">
      <div className="relative">
        <div className="bg-white absolute top-12 w-2/3 h-0.5"></div>
      </div>
      <div className="px-6">{titleHeader}</div>
    </header>
  );
};
export default Header;
