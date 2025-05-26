import { IconPlus } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { useTasks } from '@/pages/tasks/context/tasks-context';

export function TasksPrimaryButtons() {
  const { setOpen } = useTasks();
  return (
    <div className="hidden gap-2 sm:flex">
      <Button
        className="cursor-pointer space-x-1"
        onClick={() => setOpen('create')}
      >
        <span>Create</span> <IconPlus size={18} />
      </Button>
    </div>
  );
}
