import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IconMessage, IconUsers } from '@tabler/icons-react';
import { NewChatDialog } from '@/components/chats/new-chat-dialog';
import { CreateGroupDialog } from '@/components/chats/create-group-dialog';

export const ChatsPrimaryButtons = () => {
  const [newChatDialogOpen, setNewChatDialogOpen] = useState(false);
  const [createGroupDialogOpen, setCreateGroupDialogOpen] = useState(false);
  return (
    <div className="grid w-full grid-cols-2 gap-2 md:w-auto">
      <NewChatDialog open={newChatDialogOpen} setOpen={setNewChatDialogOpen} />
      <CreateGroupDialog
        open={createGroupDialogOpen}
        setOpen={setCreateGroupDialogOpen}
      />

      <Button
        className="w-full cursor-pointer space-x-1 md:w-auto"
        variant="outline"
        onClick={() => setCreateGroupDialogOpen(true)}
      >
        <span>New Group</span> <IconUsers size={18} />
      </Button>
      <Button
        className="w-full cursor-pointer space-x-1 md:w-auto"
        onClick={() => setNewChatDialogOpen(true)}
      >
        <span>New Chat</span> <IconMessage size={18} />
      </Button>
    </div>
  );
};
