import { useTitle } from '@/hooks/useTitle';

import { Header } from '@/components/utils/header';
import { StarterTeam } from '@/components/starter/setup-team';

const StarterPage = () => {
  useTitle('');

  const user = {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  };

  return (
    <>
      <Header user={user} />
      <div className="flex h-[calc(100vh-100px)] w-full items-center justify-center">
        <StarterTeam />
      </div>
    </>
  );
};

export default StarterPage;
