import Link from 'next/link';

export default function Navigation() {
  return (
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
  );
}
