import { IconSearch } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { SearchBox } from './search-box';

interface Props {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export const SearchBar = ({
  className = '',
  placeholder = 'Search',
}: Props) => {
  const [open, setOpen] = useState(false);
  const handleSearchClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <SearchBox open={open} setOpen={setOpen} />
      <Button
        onClick={handleSearchClick}
        variant="outline"
        className={cn(
          'bg-muted/25 text-muted-foreground hover:bg-muted/50 relative w-full flex-1 justify-start rounded-md text-sm font-normal shadow-none sm:pr-12 md:w-64 md:flex-none lg:w-56 xl:w-64',
          className
        )}
      >
        <IconSearch
          aria-hidden="true"
          className="absolute top-1/2 left-2 -translate-y-1/2"
        />
        <span className="ml-5 sm:flex">{placeholder}</span>
        <kbd className="bg-muted pointer-events-none absolute right-[0.3rem] hidden h-6 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none md:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    </>
  );
};
