import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[393px] m-auto py-[24px] md:py-[48px] xl:py-[248px]">
      {children}
    </div>
  );
}
