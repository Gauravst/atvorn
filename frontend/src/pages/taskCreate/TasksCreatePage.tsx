import { TasksPrimaryButtons } from '@/components/tasks/tasks-primary-buttons';
import TasksProvider from '../tasks/context/tasks-context';
import { Editor } from '@/components/taskCreate/editor';
import { useTitle } from '@/hooks/useTitle';

const TaskCreatePage = () => {
  useTitle('New Task');
  const title =
    "You can't compress the program without quantifyin We need to bypass the neural TCP card!";
  return (
    <TasksProvider>
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Tasks Details</h2>
          <p className="text-muted-foreground">
            Here will be your task's detailed description.
          </p>
        </div>
        <TasksPrimaryButtons />
      </div>
      <h1 className="text-2xl"></h1>
      <Editor title={title} />
    </TasksProvider>
  );
};

export default TaskCreatePage;
