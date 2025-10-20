'use client';

import React, { useState } from 'react';
import Header from './header/header';
import MobileMenu from './header/mobile-menu';

export interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const handleOpenMobile = () => setMobileIsOpen((prev) => !prev);

  return (
    <>
      <Header handleOpenMobile={handleOpenMobile} mobileIsOpen={mobileIsOpen} />

      <main>{children}</main>

      <MobileMenu
        mobileIsOpen={mobileIsOpen}
        handleOpenMobile={handleOpenMobile}
      />
    </>
  );
}
