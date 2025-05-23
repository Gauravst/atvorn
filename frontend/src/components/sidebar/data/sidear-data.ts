import {
  IconChecklist,
  IconHelp,
  IconLayoutDashboard,
  IconMessages,
  IconSettings,
  IconUsers,
  IconPuzzle,
  IconApps,
  IconPlug,
  IconFileText,
  IconMessageCircle,
} from '@tabler/icons-react';
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react';

export const sidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: './',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Tasks',
          url: './tasks',
          icon: IconChecklist,
        },
        {
          title: 'Chats',
          url: './chats',
          badge: '3',
          icon: IconMessages,
        },
        {
          title: 'Members',
          url: './members',
          icon: IconUsers,
        },
        {
          title: 'Modules',
          icon: IconPuzzle,
          items: [
            {
              title: 'Apps',
              url: './apps',
              icon: IconApps,
              badge: 'coming soon',
            },
            {
              title: 'Plugins',
              url: './plugins',
              icon: IconPlug,
              badge: 'coming soon',
            },
          ],
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Project Settings',
          icon: IconSettings,
          url: './settings',
        },
        {
          title: 'Help Center',
          icon: IconHelp,
          items: [
            {
              title: 'Docs',
              url: 'https://github.com/gauravst/atvorn/blob/dev/docs/getting-started.md',
              icon: IconFileText,
              target: '_blank',
            },
            {
              title: 'Discussions',
              url: 'https://github.com/Gauravst/atvorn/discussions',
              icon: IconMessageCircle,
              target: '_blank',
            },
          ],
        },
      ],
    },
  ],
};
