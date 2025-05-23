import { columns } from '@/components/users/users-columns';
import { UsersDialogs } from '@/components/users/users-dialogs';
import { UsersPrimaryButtons } from '@/components/users/users-primary-buttons';
import { UsersTable } from '@/components/users/users-table';
import { Main } from '@/components/layout/main';

import UsersProvider from './context/users-context';
import { userListSchema } from './data/schema';
import { users } from './data/users';
import { useTitle } from '@/hooks/useTitle';

export default function Users() {
  useTitle('Members');

  const userList = userListSchema.parse(users);
  return (
    <UsersProvider>
      <Main>
        <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Members</h2>
            <p className="text-muted-foreground">
              Manage your members/users and their roles here.
            </p>
          </div>
          <UsersPrimaryButtons />
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
          <UsersTable data={userList} columns={columns} />
        </div>

        <UsersDialogs />
      </Main>
    </UsersProvider>
  );
}
