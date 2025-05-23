import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMenuItem } from './chat-menu-item';
import { Input } from '@/components/ui/input';
import { IconSearch } from '@tabler/icons-react';

export const ChatSidebar = () => {
  return (
    <Card className="h-full w-[50%] rounded-lg p-0">
      <CardHeader className="mt-5 pb-0">
        <div className="relative w-full max-w-sm">
          <IconSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-gray-400" />
          <Input placeholder="Search User .." className="pl-10" />
        </div>
      </CardHeader>
      <CardContent className="mt-0 h-full p-0">
        <ScrollArea className="h-full">
          <div className="flex flex-col">
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />

            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />

            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />

            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />

            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />

            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />

            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />

            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />

            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />

            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />
            <ChatMenuItem />

            <ChatMenuItem />
            <ChatMenuItem />
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
