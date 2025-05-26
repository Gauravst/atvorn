import ChatCard from '@/components/chats/chat-card';
import { ChatSidebar } from '@/components/chats/chat-menu-list';
import { ChatsPrimaryButtons } from '@/components/chats/chats-primary-buttons';
import { Main } from '@/components/layout/main';

import { useTitle } from '@/hooks/useTitle';
import UsersProvider from '@/pages/users/context/users-context';

const ChatsPages = () => {
  useTitle('Chats');
  return (
    <UsersProvider>
      <Main fixed={true}>
        <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Chats</h2>
            <p className="text-muted-foreground">
              Chat with your team in real time.
            </p>
          </div>
          <ChatsPrimaryButtons />
        </div>
        <div className="flex h-[50vh] flex-1 flex-col gap-x-4 lg:flex-row lg:space-y-0">
          <ChatSidebar />
          <ChatCard />
        </div>
      </Main>
    </UsersProvider>
  );
};

export default ChatsPages;
