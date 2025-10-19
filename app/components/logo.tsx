import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 pt-0.5">
      <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
      <p className="font-medium text-[20px] text-white">Tactix.</p>
    </Link>
  );
}
