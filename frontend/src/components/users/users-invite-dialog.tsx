import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { IconMailPlus, IconSend, IconX } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SelectDropdown } from '@/components/utils/select-dropdown';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const formSchema = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
  role: z.string().min(1, { message: 'Role is required.' }),
  project: z.string().min(1, { message: 'Project is required.' }),
  desc: z.string().optional(),
});
type UserInviteForm = z.infer<typeof formSchema>;

interface User {
  id: string;
  name: string;
  email?: string;
  image?: string;
}

interface Option {
  label: string;
  value: string;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmitData: (data: UserInviteForm) => void;
  users: User[];
  roles: Option[];
  projects: Option[];
  title?: string;
  description?: string;
  defaultValues?: Partial<UserInviteForm>;
}

export function UsersInviteDialog({
  open,
  onOpenChange,
  onSubmitData,
  users,
  roles,
  projects,
  title = 'Invite User',
  description = 'Invite user to join your project. Assign a role to define their access level.',
  defaultValues,
}: Props) {
  const form = useForm<UserInviteForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      role: '',
      project: '',
      desc: '',
      ...defaultValues,
    },
  });

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredUsers = (users ?? []).filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!selectedUser) setPopoverOpen(true);
    else setPopoverOpen(false);
  }, [search, selectedUser]);

  const onSubmit = (values: UserInviteForm) => {
    form.reset();
    setSelectedUser(null);
    setSearch('');
    onSubmitData(values);
    onOpenChange(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        form.reset();
        setSelectedUser(null);
        setSearch('');
        onOpenChange(state);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-left">
          <DialogTitle className="flex items-center gap-2">
            <IconMailPlus /> {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            id="user-invite-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Username input with popover */}
            <FormField
              control={form.control}
              name="username"
              render={() => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <div className="relative">
                    {selectedUser ? (
                      <div className="flex items-center gap-2 rounded-md border px-3 py-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={selectedUser.image} />
                          <AvatarFallback>
                            {selectedUser.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-sm">{selectedUser.name}</div>
                        <button
                          type="button"
                          className="ml-auto"
                          onClick={() => {
                            setSelectedUser(null);
                            form.setValue('username', '');
                            setSearch('');
                            setTimeout(() => inputRef.current?.focus(), 0);
                          }}
                        >
                          <IconX className="text-muted-foreground h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Input
                          ref={inputRef}
                          placeholder="Search username..."
                          value={search}
                          onFocus={() => setPopoverOpen(true)}
                          onChange={(e) => {
                            setSearch(e.target.value);
                            form.setValue('username', '');
                          }}
                        />
                        {popoverOpen && filteredUsers.length > 0 && (
                          <div className="bg-background absolute z-10 mt-1 w-full rounded-md border shadow-md">
                            {filteredUsers.map((user) => (
                              <div
                                key={user.id}
                                className="hover:bg-muted flex cursor-pointer items-center px-3 py-2"
                                onClick={() => {
                                  setSelectedUser(user);
                                  form.setValue('username', user.name);
                                  setPopoverOpen(false);
                                }}
                              >
                                <Avatar className="mr-2 h-6 w-6">
                                  <AvatarImage src={user.image} />
                                  <AvatarFallback>
                                    {user.name[0]}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="text-sm">{user.name}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role & Project */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <SelectDropdown
                      className="w-full"
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select a role"
                      items={roles}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="project"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project</FormLabel>
                    <SelectDropdown
                      className="w-full"
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select a project"
                      items={projects}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Optional Description */}
            <FormField
              control={form.control}
              name="desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      placeholder="Add a personal note to your invitation (optional)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <DialogFooter className="gap-y-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" form="user-invite-form">
            Invite <IconSend />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
