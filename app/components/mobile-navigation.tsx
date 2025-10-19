import Link from 'next/link';
import React from 'react';

export interface MobileNavigationProps {
  handleOpenMobile: () => void;
}

export default function MobileNavigation({
  handleOpenMobile,
}: MobileNavigationProps) {
  return (
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
  );
}
