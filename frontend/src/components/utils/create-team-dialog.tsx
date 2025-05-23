import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DialogDescription } from '@radix-ui/react-dialog';

type CreateTeamDialogProps = {
  open: boolean;
  setOpen: (data: boolean) => void;
};

export const CreateTeamDialog = ({ open, setOpen }: CreateTeamDialogProps) => {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generatedSlug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    setSlug(generatedSlug);
  }, [name]);

  const handleSubmit = async () => {
    if (!name.trim()) return alert('Team name is required');
    if (shortDesc.length > 30)
      return alert('Short description must be under 30 characters');

    setLoading(true);
    try {
      // send data to backend: name, slug, shortDesc, description
      setName('');
      setSlug('');
      setShortDesc('');
      setOpen(false);
    } catch (err) {
      console.error('Error creating team', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Team</DialogTitle>
          <DialogDescription>
            Create a new team to manage multiple Projects
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div>
            <label className="text-sm font-medium">Team Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Atvorn Tech"
              disabled={loading}
            />
            <p className="text-muted-foreground mt-1 text-xs">
              Slug:{' '}
              <span className="text-muted-foreground font-mono">
                {slug || 'atvorn-tech'}
              </span>
            </p>
          </div>

          <div>
            <label className="text-sm font-medium">
              Short Description (max 30 chars)
            </label>
            <Input
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              maxLength={30}
              placeholder="e.g. atvorn’s tech team"
              disabled={loading}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Creating...' : 'Create'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
