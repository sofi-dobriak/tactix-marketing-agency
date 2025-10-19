'use client';

import clsx from 'clsx';
import Link from 'next/link';
import SocialMedia from './social-media';

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
      <ul className="flex items-center gap-[8px] flex-wrap">
        <li>
          <Link
            href="/"
            onClick={handleOpenMobile}
            className="font-semibold text-[24px] md:text-[44px] leading-[6%] text-center text-white flex justify-center items-center gap-2.5 bg-[#141414] px-[28px] pt-[14px] pb-[16px] md:px-[48px] md:pt-[20px] md:pb-[24px] rounded-[100px] border border-solid border-[#313131] hover:bg-[#1f1f1f] focus:bg-[#1f1f1f] h-[66px] md:h-[108px]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            onClick={handleOpenMobile}
            className="font-semibold text-[24px] md:text-[44px] leading-[6%] text-center text-white flex justify-center items-center gap-2.5 bg-[#141414] px-[28px] pt-[14px] pb-[16px]  md:px-[48px] md:pt-[20px] md:pb-[24px] rounded-[100px] border border-solid border-[#313131] hover:bg-[#1f1f1f] focus:bg-[#1f1f1f] h-[66px] md:h-[108px]"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#services"
            onClick={handleOpenMobile}
            className="font-semibold text-[24px] md:text-[44px] leading-[6%] text-center text-white flex justify-center items-center gap-2.5 bg-[#141414] px-[28px] pt-[14px] pb-[16px]  md:px-[48px] md:pt-[20px] md:pb-[24px] rounded-[100px] border border-solid border-[#313131] hover:bg-[#1f1f1f] focus:bg-[#1f1f1f] h-[66px] md:h-[108px]"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#approach"
            onClick={handleOpenMobile}
            className="font-semibold text-[24px] md:text-[44px] leading-[6%] text-center text-white flex justify-center items-center gap-2.5 bg-[#141414] px-[28px] pt-[14px] pb-[16px]  md:px-[48px] md:pt-[20px] md:pb-[24px]  rounded-[100px] border border-solid border-[#313131] hover:bg-[#1f1f1f] focus:bg-[#1f1f1f] h-[66px] md:h-[108px]"
          >
            Approach
          </Link>
        </li>
        <li>
          <Link
            href="#faq"
            onClick={handleOpenMobile}
            className="font-semibold text-[24px] md:text-[44px] leading-[6%] text-center text-white flex justify-center items-center gap-2.5 bg-[#141414] px-[28px] pt-[14px] pb-[16px] md:px-[48px] md:pt-[20px] md:pb-[24px] rounded-[100px] border border-solid border-[#313131] hover:bg-[#1f1f1f] focus:bg-[#1f1f1f] h-[66px] md:h-[108px]"
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href="#contact-us"
            onClick={handleOpenMobile}
            className="font-semibold text-[24px] md:text-[44px] leading-[6%] text-center text-white flex justify-center items-center gap-2.5 bg-[#141414] px-[28px] pt-[14px] pb-[16px] md:px-[48px] md:pt-[20px] md:pb-[24px] rounded-[100px] border border-solid border-[#313131] hover:bg-[#1f1f1f] focus:bg-[#1f1f1f] h-[66px] md:h-[108px]"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <SocialMedia />
    </div>
  );
}
