import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

export default function HeroSection() {
  return (
    <section className="pt-[120px] pb-[96px] xl:pb-[40px] px-[24px] md:px-[48px] xl:px-[188px]">
      <Link
        href="#testimonials"
        className={clsx(
          'font-semibold text-[14px] leading-[10.28%] text-[#2fe784]',
          'flex items-center justify-center gap-2 bg-[#061C10] rounded-[100px]',
          'w-full max-w-[198px] m-auto mb-[32px] p-[12px]',
          'hover:bg-[#092A18] focus:bg-[#092A18] duration-300 ease-in',
        )}
      >
        What Our Clients Say
        <svg width={12} height={12} className="fill-[#2fe784]">
          <use href="/images/icons.svg#icon-arrow-right"></use>
        </svg>
      </Link>

      <h1
        className={clsx(
          'font-semibold text-[32px] md:text-[56px] xl:text-[72px] leading-[1] text-center text-white',
          'w-full max-w-[345px] md:max-w-[600px] xl:max-w-[1064px] mb-[24px] m-auto',
        )}
      >
        Transform Your Brand with Expert Marketing Strategies
      </h1>

      <p
        className={clsx(
          'font-normal text-[18px] leading-[1.3] text-center text-white m-auto',
          'w-full max-w-[345px] md:max-w-[560px] xl:max-w-[752px] mb-[40px]',
        )}
      >
        Experience the transformative power of our expert marketing strategies
        as we partner with you to elevate your brand&apos;s digital presence.
        Let us take your brand to new heights online!
      </p>

      <div className="mb-[80px] md:mb-[104px] xl:mb-[56px] xl:flex justify-between">
        <Image
          src="/images/hero/desk-hero-left.png"
          alt="Hero image"
          width={200}
          height={200}
          className="hidden xl:block"
        />

        <ul className="flex flex-col md:flex-row item-center justify-center gap-[12px] md:gap-[12px]">
          <li>
            <Link
              href="#contact-us"
              className={clsx(
                'font-semibold text-[18px] leading-[1] text-center text-black block',
                'bg-[#2fe784] border border-transparent p-[18px] rounded-[100px] w-full max-w-[345px] m-auto',
                'hover:bg-[#4DFFA2] focus:bg-[#1f1f1f] duration-300 ease-in',
              )}
            >
              Schedule Consultation
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className={clsx(
                'font-semibold text-[18px] leading-[1] text-center text-white block',
                'bg-[#141414] border  border-[#313131] rounded-[100px] p-[18px] w-full max-w-[345px] m-auto',
                'hover:bg-[#1f1f1f] focus:bg-[#1f1f1f] duration-300 ease-in',
              )}
            >
              Our Services
            </Link>
          </li>
        </ul>

        <Image
          src="/images/hero/desk-hero-right.png"
          alt="Hero image"
          width={200}
          height={200}
          className="hidden xl:block"
        />
      </div>

      <Image
        src="/images/hero/mob-hero.png"
        alt="Hero image"
        width={320}
        height={320}
        className="md:hidden mx-auto mb-[80px]"
      />

      <Image
        src="/images/hero/tab-hero.png"
        alt="Hero image"
        width={360}
        height={360}
        className="hidden md:block mx-auto mb-[104px] xl:hidden"
      />

      <p className="font-normal text-[12px] leading-[1.4] text-center text-[#999] w-full max-w-[345px] md:max-w-[400px] xl:max-w-[752px] m-auto">
        With innovative strategies and a results-driven approach, we empower
        brands to thrive in the ever-evolving digital landscape.
      </p>
    </section>
  );
}
