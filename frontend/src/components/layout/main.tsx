import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean;
  ref?: React.Ref<HTMLElement>;
}

export const Main = ({ fixed, ...props }: MainProps) => {
  const mainContent = (
    <main
      className={cn(
        'peer-[.header-fixed]/header:mt-16',
        'mb-15 py-6 pr-4 pl-2',
        fixed && 'inset-0 flex grow flex-col overflow-hidden pr-5 pb-2 pl-3',
        fixed && 'h-[calc(100vh-64px-0.5rem)]'
      )}
      {...props}
    />
  );

  if (fixed) return mainContent;

  return (
    <ScrollArea className="h-screen flex-1 px-1">{mainContent}</ScrollArea>
  );
};

Main.displayName = 'Main';
