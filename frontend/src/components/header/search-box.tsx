'use client';
import * as React from 'react';
import {
  Calendar,
  CreditCard,
  Settings,
  User,
  ListTodo,
  MessageSquareText,
  Users2,
  HelpCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Dispatch, SetStateAction } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const generalCommands = [
  { icon: Calendar, label: 'Dashboard', path: '/dashboard' },
  { icon: ListTodo, label: 'Task', path: '/tasks' },
  { icon: MessageSquareText, label: 'Chat', path: '/chat' },
  { icon: Users2, label: 'Members', path: '/members' },
];

const settingCommands = [
  { icon: User, label: 'Profile', shortcut: '⌘P', path: '/profile' },
  { icon: CreditCard, label: 'Billing', shortcut: '⌘B', path: '/billing' },
  { icon: Settings, label: 'Settings', shortcut: '⌘S', path: '/settings' },
  { icon: HelpCircle, label: 'Help Center', shortcut: '⌘H', path: '/help' },
];

type SearchBoxProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const SearchBox = ({ open, setOpen }: SearchBoxProps) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleCommand = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <ScrollArea className="scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-transparent h-72">
            <CommandGroup heading="General">
              {generalCommands.map((item, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => handleCommand(item.path)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Settings">
              {settingCommands.map((item, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => handleCommand(item.path)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                  {item.shortcut && (
                    <CommandShortcut>{item.shortcut}</CommandShortcut>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </CommandList>
      </CommandDialog>
    </>
  );
};
