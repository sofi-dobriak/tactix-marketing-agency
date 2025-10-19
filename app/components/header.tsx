import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  mobileIsOpen: boolean;
  handleOpenMobile: () => void;
}

export default function Header({
  mobileIsOpen,
  handleOpenMobile,
}: HeaderProps) {
  return (
    <header className="fixed top-[24px] left-1/2 -translate-x-1/2 px-[12px] md:px-[48px] xl:px-[96px] w-full max-w-[345px] md:max-w-[738px] xl:max-w-[1248px] flex justify-between items-center z-50">
      <div className="flex items-center gap-[72px]">
        <Link href="/" className="flex items-center gap-2.5 pt-0.5">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          <p className="font-medium text-[20px] text-white">Tactix.</p>
        </Link>

        <ul className="hidden xl:flex items-center gap-[8px] ">
          <li>
            <Link
              href="/"
              className="px-[12px] py-[8px] font-semibold text-[14px] leading-[10.28%] text-center text-white hover:text-[#999] focus:text-[#999] duration-300 ease-in"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="px-[12px] py-[8px] font-semibold text-[14px] leading-[10.28%] text-center text-white hover:text-[#999] focus:text-[#999] duration-300 ease-in"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="px-[12px] py-[8px] font-semibold text-[14px] leading-[10.28%] text-center text-white hover:text-[#999] focus:text-[#999] duration-300 ease-in"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#approach"
              className="px-[12px] py-[8px] font-semibold text-[14px] leading-[10.28%] text-center text-white hover:text-[#999] focus:text-[#999] duration-300 ease-in"
            >
              Approach
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="px-[12px] py-[8px] font-semibold text-[14px] leading-[10.28%] text-center text-white hover:text-[#999] focus:text-[#999] duration-300 ease-in"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="#contact-us"
          className="hidden font-semibold text-[14px] leading-[10.28%] text-center text-white md:flex justify-center items-center gap-2.5 bg-[#141414] px-[22px] py-3 rounded-[100px] border border-solid border-[#313131] h-[44px] hover:bg-[#1f1f1f] focus-[#1f1f1f] cursor-pointer duration-300 ease-in"
        >
          Contact Us
        </Link>

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
      </div>
    </header>
  );
}
