import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';

type CreateProjectDialogProps = {
  open: boolean;
  setOpen: (data: boolean) => void;
};

const teams = [
  { id: 'team_1', name: 'Sanggo Tech' },
  { id: 'team_2', name: 'Design Team' },
];

export const CreateProjectDialog = ({
  open,
  setOpen,
}: CreateProjectDialogProps) => {
  const [projectName, setProjectName] = useState('');
  const [slug, setSlug] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generatedSlug = projectName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    setSlug(generatedSlug);
  }, [projectName]);

  const handleSubmit = async () => {
    if (!projectName.trim()) return alert('Project name is required');
    if (!selectedTeam) return alert('Please select a team');
    if (shortDesc.length > 30)
      return alert('Short description must be under 30 characters');

    setLoading(true);
    try {
      // TODO: send { projectName, slug, shortDesc, selectedTeam } to backend

      setProjectName('');
      setSlug('');
      setShortDesc('');
      setSelectedTeam('');
      setOpen(false);
    } catch (err) {
      console.error('Error creating project', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            Create a new Project into your atvorn team
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div>
            <label className="text-sm font-medium">Project Name</label>
            <Input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="e.g. Mobile App"
              disabled={loading}
            />
            <p className="text-muted-foreground mt-1 text-xs">
              Slug:{' '}
              <span className="text-muted-foreground font-mono">
                {slug || 'your-slug'}
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
              placeholder="e.g. client mobile app"
              disabled={loading}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Select Team</label>
            <Select
              onValueChange={setSelectedTeam}
              value={selectedTeam}
              disabled={loading}
              defaultValue=""
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a team" />
              </SelectTrigger>
              <SelectContent>
                {teams.length === 0 ? (
                  <SelectItem value="" disabled>
                    No teams available
                  </SelectItem>
                ) : (
                  teams.map((team) => (
                    <SelectItem key={team.id} value={team.id}>
                      {team.name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
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
