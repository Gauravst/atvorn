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
      description: 'Private personal projects',
      teamSlug: 'personal',
      project: [
        {
          name: 'Frontend Website',
          description: 'React UI work',
          id: 'frontend',
          projectSlug: 'frontend',
        },
        {
          name: 'Backend Server',
          description: 'Node API server',
          id: 'backend',
          projectSlug: 'backend',
        },
      ],
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
      description: 'Sanggo tech team projects',
      teamSlug: 'sanggo',
      project: [
        {
          name: 'Website',
          description: 'Marketing site',
          id: 'sanggo-website',
          projectSlug: 'website',
        },
        {
          name: 'Mobile App',
          description: 'React Native app',
          id: 'sanggo-app',
          projectSlug: 'mobile-app',
        },
      ],
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
      description: 'Open source PM tool',
      teamSlug: 'atvorn',
      project: [],
    },
    {
      name: 'Freelance Clients',
      logo: Command,
      plan: 'Personal',
      description: 'Work with various clients',
      teamSlug: 'freelance',
      project: [
        {
          name: 'Client A',
          description: 'Design system',
          id: 'client-a',
          projectSlug: 'client-a',
        },
        {
          name: 'Client B',
          description: 'Landing page',
          id: 'client-b',
          projectSlug: 'client-b',
        },
        {
          name: 'Client C',
          description: 'SaaS backend',
          id: 'client-c',
          projectSlug: 'client-c',
        },
      ],
    },
    {
      name: 'StartupX',
      logo: Command,
      plan: 'Internal',
      description: 'Internal startup projects',
      teamSlug: 'startupx',
      project: [
        {
          name: 'AI Bot',
          description: 'Chatbot backend',
          id: 'startup-ai',
          projectSlug: 'ai-bot',
        },
      ],
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
          title: 'Settings',
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
