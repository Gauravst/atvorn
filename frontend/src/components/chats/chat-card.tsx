import { useState } from 'react';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  MoreHorizontal,
  Send,
  Smile,
  CheckCheck,
  CornerUpRight,
  Plus,
} from 'lucide-react';

const ChatCard = () => {
  const [message, setMessage] = useState('');

  const users = ['Gaurav', 'Alex', 'Maya'];

  const tasks = [
    { id: 'TASK_463', title: 'Fix login bug' },
    { id: 'TASK_128', title: 'Update dashboard UI' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const matchMention = message.match(/@\w+/);
  const matchTask = message.match(/#TASK_\d+/);

  return (
    <Card className="m-0 flex h-full w-full flex-col items-center border">
      <CardHeader className="w-full pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full border border-white bg-green-500" />
            </div>
            <div>
              <div className="font-medium">Gaurav Singh</div>
              <div className="text-muted-foreground text-xs">Online</div>
            </div>
          </div>
          <MoreHorizontal className="text-muted-foreground" />
        </div>
      </CardHeader>
      <Separator className="my-0" />
      <div className="flex w-full flex-1 flex-col overflow-hidden px-5">
        <ScrollArea className="h-full">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-start">
              <div className="bg-muted relative max-w-xs rounded-xl p-3">
                <p>Hello Gaurav 👋</p>
                <div className="text-muted-foreground mt-1 flex justify-between text-xs">
                  <span>05:43</span>
                  <CornerUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground relative max-w-xs rounded-xl p-3">
                <p>Hi there! How can I help?</p>
                <div className="mt-1 flex items-center justify-between text-xs text-white">
                  <span>05:45</span>
                  <CheckCheck className="h-4 w-4" />
                </div>
              </div>
              <MoreHorizontal className="text-muted-foreground mt-2 ml-2 cursor-pointer" />
            </div>
            <div className="flex justify-start">
              <div className="bg-muted relative max-w-xs rounded-xl p-3">
                <p>Hello Gaurav 👋</p>
                <div className="text-muted-foreground mt-1 flex justify-between text-xs">
                  <span>05:43</span>
                  <CornerUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground relative max-w-xs rounded-xl p-3">
                <p>Hi there! How can I help?</p>
                <div className="mt-1 flex items-center justify-between text-xs text-white">
                  <span>05:45</span>
                  <CheckCheck className="h-4 w-4" />
                </div>
              </div>
              <MoreHorizontal className="text-muted-foreground mt-2 ml-2 cursor-pointer" />
            </div>
            <div className="flex justify-start">
              <div className="bg-muted relative max-w-xs rounded-xl p-3">
                <p>Hello Gaurav 👋</p>
                <div className="text-muted-foreground mt-1 flex justify-between text-xs">
                  <span>05:43</span>
                  <CornerUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground relative max-w-xs rounded-xl p-3">
                <p>Hi there! How can I help?</p>
                <div className="mt-1 flex items-center justify-between text-xs text-white">
                  <span>05:45</span>
                  <CheckCheck className="h-4 w-4" />
                </div>
              </div>
              <MoreHorizontal className="text-muted-foreground mt-2 ml-2 cursor-pointer" />
            </div>
            <div className="flex justify-start">
              <div className="bg-muted relative max-w-xs rounded-xl p-3">
                <p>Hello Gaurav 👋</p>
                <div className="text-muted-foreground mt-1 flex justify-between text-xs">
                  <span>05:43</span>
                  <CornerUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground relative max-w-xs rounded-xl p-3">
                <p>Hi there! How can I help?</p>
                <div className="mt-1 flex items-center justify-between text-xs text-white">
                  <span>05:45</span>
                  <CheckCheck className="h-4 w-4" />
                </div>
              </div>
              <MoreHorizontal className="text-muted-foreground mt-2 ml-2 cursor-pointer" />
            </div>
            <div className="flex justify-start">
              <div className="bg-muted relative max-w-xs rounded-xl p-3">
                <p>Hello Gaurav 👋</p>
                <div className="text-muted-foreground mt-1 flex justify-between text-xs">
                  <span>05:43</span>
                  <CornerUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground relative max-w-xs rounded-xl p-3">
                <p>Hi there! How can I help?</p>
                <div className="mt-1 flex items-center justify-between text-xs text-white">
                  <span>05:45</span>
                  <CheckCheck className="h-4 w-4" />
                </div>
              </div>
              <MoreHorizontal className="text-muted-foreground mt-2 ml-2 cursor-pointer" />
            </div>

            {/* Task Reference */}
            {matchTask && (
              <div className="bg-muted rounded-md border p-3">
                <div className="text-sm">
                  <strong>{matchTask[0]}</strong>:{' '}
                  {tasks.find((t) => t.id === matchTask[0])?.title ||
                    'Unknown task'}
                </div>
                <Button className="mt-2" size="sm">
                  Go to Task
                </Button>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      <CardFooter className="relative mt-0 flex w-full justify-center border-t py-0">
        <div className="text-muted-foreground bg-muted absolute top-[-50px] flex w-[95%] justify-between rounded-md border p-2 text-sm">
          <p>
            Replying to: <span className="text-primary">Hi there!</span>
          </p>
          <Plus className="rotate-45" />
        </div>
        <div className="flex w-full items-center gap-2">
          <Smile className="text-muted-foreground cursor-pointer" />
          <Input
            className="flex-1"
            placeholder="Type a message..."
            value={message}
            onChange={handleInputChange}
          />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Mentions UI */}
        {matchMention && (
          <div className="bg-muted mt-2 rounded p-2 text-sm">
            Mentioned:{' '}
            {users.find((u) => `@${u}` === matchMention[0]) || 'Unknown user'}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ChatCard;
