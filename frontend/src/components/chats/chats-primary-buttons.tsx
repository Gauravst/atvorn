import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IconMessage, IconUsers } from '@tabler/icons-react';
import { NewChatDialog } from '@/components/chats/new-chat-dialog';
import { CreateGroupDialog } from '@/components/chats/create-group-dialog';

export const ChatsPrimaryButtons = () => {
  const [newChatDialogOpen, setNewChatDialogOpen] = useState(false);
  const [createGroupDialogOpen, setCreateGroupDialogOpen] = useState(false);
  return (
    <div className="flex gap-2">
      <NewChatDialog open={newChatDialogOpen} setOpen={setNewChatDialogOpen} />
      <CreateGroupDialog
        open={createGroupDialogOpen}
        setOpen={setCreateGroupDialogOpen}
      />

      <Button
        className="cursor-pointer space-x-1"
        variant="outline"
        onClick={() => setCreateGroupDialogOpen(true)}
      >
        <span>New Group</span> <IconUsers size={18} />
      </Button>
      <Button
        className="cursor-pointer space-x-1"
        onClick={() => setNewChatDialogOpen(true)}
      >
        <span>New Chat</span> <IconMessage size={18} />
      </Button>
    </div>
  );
};
