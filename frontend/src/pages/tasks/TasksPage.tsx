import { columns } from '@/components/tasks/columns';
import { DataTable } from '@/components/tasks/data-table';
import { TasksDialogs } from '@/components/tasks/tasks-dialogs';
import { TasksPrimaryButtons } from '@/components/tasks/tasks-primary-buttons';
import TasksProvider from './context/tasks-context';
import { tasks } from './data/tasks';
import { useTitle } from '@/hooks/useTitle';

const TasksPage = () => {
  useTitle('Tasks');
  return (
    <TasksProvider>
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Tasks</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <TasksPrimaryButtons />
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
        <DataTable data={tasks} columns={columns} />
      </div>

      <TasksDialogs />
    </TasksProvider>
  );
};

export default TasksPage;
