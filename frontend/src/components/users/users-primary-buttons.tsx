import { IconMailPlus, IconUserPlus } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { UsersInviteDialog } from '@/components/users/users-invite-dialog';
import { useState } from 'react';

export function UsersPrimaryButtons() {
  const [inviteDialogOpen, setInviteDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const userList = [
    { id: '1', name: 'Gaurav Singh', email: 'gaurav@xyz.com', image: '' },
    { id: '2', name: 'Ravi Kumar', email: 'ravi@xyz.com', image: '' },
  ];
  return (
    <div className="grid w-full grid-cols-2 gap-2 sm:w-auto">
      <UsersInviteDialog
        open={inviteDialogOpen}
        onOpenChange={setInviteDialogOpen}
        onSubmitData={(data) => console.log('Invite:', data)}
        users={userList}
        roles={[
          { label: 'Admin', value: 'admin' },
          { label: 'Viewer', value: 'viewer' },
        ]}
        projects={[
          { label: 'Project A', value: 'project-a' },
          { label: 'Project B', value: 'project-b' },
        ]}
        title="Invite User"
        description="Invite atvorn user to join your project. Assign a role to define their access level."
      />

      <UsersInviteDialog
        open={addDialogOpen}
        onOpenChange={setAddDialogOpen}
        onSubmitData={(data) => console.log('Invite:', data)}
        users={userList}
        roles={[
          { label: 'Admin', value: 'admin' },
          { label: 'Viewer', value: 'viewer' },
        ]}
        projects={[
          { label: 'Project A', value: 'project-a' },
          { label: 'Project B', value: 'project-b' },
        ]}
        title="Add User"
        description="Add user form team to your project"
      />
      <Button
        variant="outline"
        className="w-full cursor-pointer space-x-1 sm:w-auto"
        onClick={() => setInviteDialogOpen(true)}
      >
        <span>Invite User</span> <IconMailPlus size={18} />
      </Button>
      <Button
        className="w-full cursor-pointer space-x-1 sm:w-auto"
        onClick={() => setAddDialogOpen(true)}
      >
        <span>Add User</span> <IconUserPlus size={18} />
      </Button>
    </div>
  );
}
