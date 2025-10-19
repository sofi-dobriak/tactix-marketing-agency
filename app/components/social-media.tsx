import Link from 'next/link';
import React from 'react';

export default function SocialMedia() {
  return (
    <ul className="flex items-center gap-[32px]">
      <li>
        <Link href="https://linkedin.com" target="_blank">
          <svg width={28} height={28} className="fill-[#999]">
            <use href="/images/icons.svg#icon-linkedIn"></use>
          </svg>
        </Link>
      </li>
      <li>
        <Link href="https://facebook.com" target="_blank">
          <svg width={28} height={28} className="fill-[#999]">
            <use href="/images/icons.svg#icon-facebook"></use>
          </svg>
        </Link>
      </li>
      <li>
        <Link href="https://x.com" target="_blank">
          <svg width={28} height={28} className="fill-[#999]">
            <use href="/images/icons.svg#icon-twitter"></use>
          </svg>
        </Link>
      </li>
    </ul>
  );
}
