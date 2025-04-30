import { showSubmittedData } from '@/utils/show-submitted-data';
import { ConfirmDialog } from '@/components/sidebar/confirm-dialog';
import { useTasks } from '@/pages/tasks/context/tasks-context';
import { TasksImportDialog } from './tasks-import-dialog';
import { TasksMutateDialog } from './tasks-mutate-drawer';

export function TasksDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useTasks();
  return (
    <>
      <TasksMutateDialog
        key="task-create"
        open={open === 'create'}
        onOpenChange={() => setOpen('create')}
      />

      <TasksImportDialog
        key="tasks-import"
        open={open === 'import'}
        onOpenChange={() => setOpen('import')}
      />

      {currentRow && (
        <>
          <TasksMutateDialog
            key={`task-update-${currentRow.id}`}
            open={open === 'update'}
            onOpenChange={() => {
              setOpen('update');
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          />

          <ConfirmDialog
            key="task-delete"
            destructive
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete');
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            handleConfirm={() => {
              setOpen(null);
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
              showSubmittedData(
                currentRow,
                'The following task has been deleted:'
              );
            }}
            className="max-w-md"
            title={`Delete this task: ${currentRow.id} ?`}
            desc={
              <>
                You are about to delete a task with the ID{' '}
                <strong>{currentRow.id}</strong>. <br />
                This action cannot be undone.
              </>
            }
            confirmText="Delete"
          />
        </>
      )}
    </>
  );
}
