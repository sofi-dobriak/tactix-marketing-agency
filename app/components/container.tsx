import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[393px] md:max-w-[758px] xl:max-w-[1280px] m-auto px-[24px] md:px-[48px] xl:px-[248px]">
      {children}
    </div>
  );
}
