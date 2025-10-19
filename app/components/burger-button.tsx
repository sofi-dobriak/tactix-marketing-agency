import clsx from 'clsx';
import React from 'react';

export interface BurgerButtonProps {
  mobileIsOpen: boolean;
  handleOpenMobile: () => void;
}

export default function BurgerButton({
  mobileIsOpen,
  handleOpenMobile,
}: BurgerButtonProps) {
  return (
    <button
      onClick={handleOpenMobile}
      aria-label="Button for open / close mobile menu"
      type="button"
      className={clsx(
        'btn btn-circle p-3 xl:hidden bg-[#141414] border-[#313131]',
        'hover:bg-[#1f1f1f] focus-[#1f1f1f] cursor-pointer',
        'transition-transform duration-300 ease-in',
        mobileIsOpen ? 'rotate-90' : 'rotate-0',
      )}
    >
      {mobileIsOpen ? (
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      ) : (
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      )}
    </button>
  );
}
