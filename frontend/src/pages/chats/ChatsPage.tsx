import ChatCard from '@/components/chats/chat-card';
import { ChatSidebar } from '@/components/chats/chat-menu-list';
import { UsersPrimaryButtons } from '@/components/users/users-primary-buttons';
import { useTitle } from '@/hooks/useTitle';
import UsersProvider from '@/pages/users/context/users-context';

const ChatsPages = () => {
  useTitle('Chats');
  return (
    <UsersProvider>
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">User List</h2>
          <p className="text-muted-foreground">
            Manage your users and their roles here.
          </p>
        </div>
        <UsersPrimaryButtons />
      </div>
      <div className="-ml-4 grid flex-1 grid-cols-2 px-4 py-1 lg:flex-row lg:space-y-0">
        <ChatSidebar />
        <ChatCard />
      </div>
    </UsersProvider>
  );
};

export default ChatsPages;
