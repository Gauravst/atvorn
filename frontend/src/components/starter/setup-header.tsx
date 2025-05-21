import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { HeaderNavUser } from '@/components/header/header-user';

export const StarterHeader = () => {
  const { toggleDarkMode } = useThemeStore();
  const user = {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  };
  return (
    <div className="flex justify-between p-8 pb-6">
      <div className="relative z-20 flex items-center text-lg font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-6 w-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        Atvorn
      </div>

      <div className="flex gap-x-3">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="cursor-pointer"
        >
          <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        </Button>
        <HeaderNavUser user={user} />
      </div>
    </div>
  );
};
