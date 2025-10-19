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
      type="button"
      onClick={handleOpenMobile}
      aria-label="Button for open / close mobile menu"
      className={clsx(
        'btn btn-circle p-3 xl:hidden bg-[#141414] border-[#313131]',
        'hover:bg-[#1f1f1f] focus:bg-[#1f1f1f] cursor-pointer',
        'transition-transform duration-300 ease-in',
        mobileIsOpen ? 'rotate-90' : 'rotate-0',
      )}
    >
      {mobileIsOpen ? (
        <svg width={20} height={20} className="fill-[#fff]">
          <use href="/images/icons.svg#icon-dismiss"></use>
        </svg>
      ) : (
        <svg width={20} height={20} className="fill-[#fff]">
          <use href="/images/icons.svg#icon-burger"></use>
        </svg>
      )}
    </button>
  );
}
