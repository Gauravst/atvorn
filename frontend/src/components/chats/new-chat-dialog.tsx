import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';
import { DialogDescription } from '@radix-ui/react-dialog';

// Dummy user list — replace with real data
const users = [
  { username: 'alice', avatarUrl: '' },
  { username: 'bob', avatarUrl: '' },
  { username: 'charlie', avatarUrl: '' },
  { username: 'dave', avatarUrl: '' },
];

type NewChatDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const NewChatDialog: React.FC<NewChatDialogProps> = ({
  open,
  setOpen,
}) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const handleUserClick = (username: string) => {
    navigate(`/chat/${username}`);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>New Chat</DialogTitle>
          <DialogDescription className="text-sm opacity-90">
            Start a new end-to-end encrypted chat.
          </DialogDescription>
        </DialogHeader>

        <Input
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="my-2"
        />

        <ScrollArea className="h-60">
          {filteredUsers.length > 0 ? (
            <div className="flex flex-col">
              {filteredUsers.map((user, index) => (
                <React.Fragment key={user.username}>
                  <div
                    className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-lg p-2"
                    onClick={() => handleUserClick(user.username)}
                  >
                    <Avatar className="h-8 w-8">
                      {user.avatarUrl ? (
                        <AvatarImage src={user.avatarUrl} alt={user.username} />
                      ) : (
                        <AvatarFallback>
                          {user.username[0].toUpperCase()}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <span className="text-sm">{user.username}</span>
                  </div>
                  {index !== filteredUsers.length - 1 && (
                    <Separator className="my-1" />
                  )}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div className="text-muted-foreground mt-4 text-center text-sm">
              No users found
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
