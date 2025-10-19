'use client';

import clsx from 'clsx';
import SocialMedia from './social-media';
import MobileNavigation from './mobile-navigation';

interface MobileMenuProps {
  mobileIsOpen: boolean;
  handleOpenMobile: () => void;
}

export default function MobileMenu({
  mobileIsOpen,
  handleOpenMobile,
}: MobileMenuProps) {
  return (
    <div
      className={clsx(
        'w-full h-full fixed top-0 left-0 z-[40] bg-black transition-all duration-700 ease-in-out flex flex-col justify-between',
        'pt-[132px] px-[24px] pb-[40px] md:px-[48px] md:pt-[172px] opacity-100',
        mobileIsOpen
          ? 'opacity-100 visible pointer-events-auto translate-y-[0px]'
          : 'opacity-0 invisible pointer-events-none translate-y-[-100%]',
      )}
    >
      <MobileNavigation handleOpenMobile={handleOpenMobile} />
      <SocialMedia />
    </div>
  );
}
