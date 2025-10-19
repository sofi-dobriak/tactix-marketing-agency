'use client';

import React, { useState } from 'react';
import Header from './header';
import MobileMenu from './mobile-menu';
import Container from './container';

export interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const handleOpenMobile = () => setMobileIsOpen((prev) => !prev);

  return (
    <>
      <Header handleOpenMobile={handleOpenMobile} mobileIsOpen={mobileIsOpen} />

      <main>
        <Container>{children}</Container>
      </main>

      <MobileMenu
        mobileIsOpen={mobileIsOpen}
        handleOpenMobile={handleOpenMobile}
      />
    </>
  );
}
