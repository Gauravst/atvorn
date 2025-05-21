import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read?: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: 'New Comment',
    message: "Alex commented on your task: 'Fix login bug'.",
    time: '5 minutes ago',
  },
  {
    id: 2,
    title: 'Task Assigned',
    message: "You have been assigned a new task: 'Design homepage UI'.",
    time: '15 minutes ago',
  },
  {
    id: 3,
    title: 'Project Updated',
    message: "The project 'Marketing Website' was updated by Priya.",
    time: '1 hour ago',
  },
  {
    id: 4,
    title: 'Deadline Reminder',
    message: "The deadline for 'Client Meeting Prep' is tomorrow.",
    time: '2 hours ago',
  },
  {
    id: 5,
    title: 'New Message',
    message: 'You received a message from Rohan.',
    time: 'Today at 10:30 AM',
  },
  {
    id: 6,
    title: 'Payment Received',
    message: "You received ₹5,000 for the project 'Landing Page Redesign'.",
    time: 'Yesterday',
  },
];

export const NotificationBox = ({ className }: { className?: string }) => {
  const [notificationsList, setNotificationsList] = useState<Notification[]>(
    initialNotifications.map((n) => ({
      ...n,
      read: n.read ?? false,
    }))
  );

  const unreadCount = notificationsList.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotificationsList((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markAsRead = (id: number) => {
    setNotificationsList((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn('relative cursor-pointer', className)}
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="bg-destructive text-destructive-foreground animate-in zoom-in-50 absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full text-[10px] duration-300">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0" sideOffset={8}>
        <div className="flex items-center justify-between px-4 py-3">
          <h3 className="font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground h-auto p-0 text-xs"
              onClick={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}
        </div>
        <Separator />
        {notificationsList.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <Bell className="text-muted-foreground/50 mb-3 h-12 w-12" />
            <p className="text-muted-foreground">No notifications yet</p>
          </div>
        ) : (
          <ScrollArea className="scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-transparent h-72">
            <div className="space-y-[2px]">
              {notificationsList.map((notification) => (
                <DropdownMenuItem
                  key={notification.id}
                  className={cn(
                    'hover:bg-accent focus:bg-accent flex cursor-pointer flex-col items-start gap-1 p-4',
                    !notification.read && 'bg-muted/50'
                  )}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex w-full justify-between gap-2">
                    <p
                      className={cn(
                        'text-sm leading-none font-medium',
                        !notification.read && 'font-semibold'
                      )}
                    >
                      {notification.title}
                    </p>
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-muted-foreground line-clamp-2 text-xs">
                    {notification.message}
                  </p>
                  {!notification.read && (
                    <div className="bg-primary absolute top-10 right-4 h-2 w-2 rounded-full" />
                  )}
                </DropdownMenuItem>
              ))}
            </div>
          </ScrollArea>
        )}
        <Separator />
        <div className="bg-transparent p-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-background w-full text-xs"
          >
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
