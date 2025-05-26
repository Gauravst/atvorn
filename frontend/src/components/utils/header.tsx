import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { HeaderNavUser } from '@/components/header/header-user';
import { UserProps } from '@/types/user';
import { Link } from 'react-router-dom';

type HeaderProps = {
  user?: UserProps;
};

export const Header = ({ user }: HeaderProps) => {
  const { toggleDarkMode } = useThemeStore();
  return (
    <div className="flex justify-between p-8 pb-6">
      <Link
        to={'/'}
        className="relative z-20 flex cursor-pointer items-center text-lg font-semibold tracking-wider uppercase hover:underline"
      >
        Atvorn
      </Link>

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
        {user && <HeaderNavUser user={user} />}
      </div>
    </div>
  );
};
