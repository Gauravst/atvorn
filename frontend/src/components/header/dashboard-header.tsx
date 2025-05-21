import { Separator } from '@/components/ui/separator';
import { AudioWaveform, Command } from 'lucide-react';
import { Moon, Sun } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/header/search';
import { HeaderNavUser } from '@/components/header/header-user';
import { ProjectSwitcher } from '@/components/header/project-switcher';
import { useThemeStore } from '@/store/themeStore';
import { NotificationBox } from './notification-box';

export const DashboardHeader = () => {
  const { toggleDarkMode } = useThemeStore();

  const user = {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  };

  const teamData = [
    {
      name: 'Acme Inc',
      logo: Command,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ];

  return (
    <header className="bg-opacity-50 fixed sticky top-0 z-50 flex h-16 shrink-0 items-center justify-center gap-2 backdrop-blur-2xl transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-16">
      <div className="flex w-full items-center justify-between gap-2 px-4">
        <div className="flex">
          <SidebarTrigger variant="outline" size="icon" className="-ml-1" />
          <Separator orientation="vertical" className="mx-2 h-4" />
          <ProjectSwitcher teams={teamData} />
        </div>
        <div className="flex gap-x-3">
          <SearchBar />
          <NotificationBox />
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
    </header>
  );
};
