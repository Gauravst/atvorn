import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  MoreHorizontal,
  Send,
  Smile,
  UserCircle,
  CheckCheck,
  CornerUpRight,
  Star,
  Trash2,
  Share2,
} from 'lucide-react';
import { useState } from 'react';

const ChatCard = () => {
  const [message, setMessage] = useState('');

  // Mock group user list for @mention
  const users = ['Gaurav', 'Alex', 'Maya'];

  // Mock task data for #TASK_123
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
    <Card className="m-0 h-fit w-full border bg-transparent">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <UserCircle className="h-10 w-10" />
              <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border border-white bg-green-500" />
            </div>
            <div>
              <div className="font-medium">Gaurav Singh</div>
              <div className="text-muted-foreground text-xs">Online</div>
            </div>
          </div>
          <MoreHorizontal className="text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        {/* Message bubbles */}
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

        {/* Reply Preview */}
        <div className="text-muted-foreground rounded-md border p-2 text-sm">
          Replying to: <span className="text-primary">Hi there!</span>
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
      </CardContent>

      {/* Input Section */}
      <CardFooter className="border-t pt-4">
        <div className="flex items-center gap-2">
          <Smile className="text-muted-foreground cursor-pointer" />
          <Input
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
