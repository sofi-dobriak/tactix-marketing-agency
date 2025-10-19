import Image from 'next/image';
import Link from 'next/link';
import Navigation from './navigation';
import BurgerButton from './burger-button';

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

        <Navigation />
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="#contact-us"
          className="hidden font-semibold text-[14px] leading-[10.28%] text-center text-white md:flex justify-center items-center gap-2.5 bg-[#141414] px-[22px] py-3 rounded-[100px] border border-solid border-[#313131] h-[44px] hover:bg-[#1f1f1f] focus-[#1f1f1f] cursor-pointer duration-300 ease-in"
        >
          Contact Us
        </Link>

        <BurgerButton
          mobileIsOpen={mobileIsOpen}
          handleOpenMobile={handleOpenMobile}
        />
      </div>
    </header>
  );
}
