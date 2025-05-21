import { useTitle } from '@/hooks/useTitle';

import { StarterHeader } from '@/components/starter/setup-header';
import { StarterTeam } from '@/components/starter/setup-team';

const StarterPage = () => {
  useTitle('');

  return (
    <>
      <StarterHeader />
      <div className="flex h-[calc(100vh-100px)] w-full items-center justify-center">
        <StarterTeam />
      </div>
    </>
  );
};

export default StarterPage;
