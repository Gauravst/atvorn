import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

type CreateGroupDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const CreateGroupDialog: React.FC<CreateGroupDialogProps> = ({
  open,
  setOpen,
}) => {
  const [groupName, setGroupName] = useState('');
  const [groupSlug, setGroupSlug] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const slug = groupName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setGroupSlug(slug);
  }, [groupName]);

  const handleCreate = () => {
    if (!groupName || !groupSlug) return;
    setOpen(false);
    setGroupName('');
    setGroupSlug('');
    setDescription('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create Group</DialogTitle>
          <DialogDescription>Create a new group chat</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div>
            <label className="text-sm font-medium">Group Name</label>
            <Input
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="e.g. Dev Team"
              disabled={false}
            />
            <p className="text-muted-foreground mt-1 text-xs">
              Slug:{' '}
              <span className="text-muted-foreground font-mono">
                {groupSlug || 'dev-team'}
              </span>
            </p>
          </div>

          <div>
            <label className="text-sm font-medium">Short Description</label>
            <Textarea
              placeholder="Group description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Separator />

          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreate} disabled={!groupName}>
              Create
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
