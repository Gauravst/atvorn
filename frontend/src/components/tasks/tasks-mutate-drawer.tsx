import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { showSubmittedData } from '@/utils/show-submitted-data';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SelectDropdown } from '@/components/select-dropdown';
import { Task } from '../data/schema';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentRow?: Task;
}

const formSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  status: z.string().min(1, 'Please select a status.'),
  label: z.string().min(1, 'Please select a label.'),
  priority: z.string().min(1, 'Please choose a priority.'),
  time: z.date({ required_error: 'A date and time is required.' }),
});

type TasksForm = z.infer<typeof formSchema>;

export const TasksMutateDialog = ({
  open,
  onOpenChange,
  currentRow,
}: Props) => {
  const isUpdate = !!currentRow;

  const form = useForm<TasksForm>({
    resolver: zodResolver(formSchema),
    defaultValues: currentRow ?? {
      title: '',
      status: '',
      label: '',
      priority: '',
    },
  });

  const onSubmit = (data: TasksForm) => {
    onOpenChange(false);
    form.reset();
    showSubmittedData(data);
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      form.setValue('time', date);
    }
  };

  const handleTimeChange = (
    type: 'hour' | 'minute' | 'ampm',
    value: string
  ) => {
    const currentDate = form.getValues('time') || new Date();
    const newDate = new Date(currentDate);

    if (type === 'hour') {
      let hour = parseInt(value, 10);
      const isPM = currentDate.getHours() >= 12;
      if (isPM && hour < 12) hour += 12;
      if (!isPM && hour === 12) hour = 0;
      newDate.setHours(hour);
    } else if (type === 'minute') {
      newDate.setMinutes(parseInt(value, 10));
    } else if (type === 'ampm') {
      const hours = newDate.getHours();
      if (value === 'AM' && hours >= 12) newDate.setHours(hours - 12);
      if (value === 'PM' && hours < 12) newDate.setHours(hours + 12);
    }

    form.setValue('time', newDate);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        form.reset();
      }}
    >
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{isUpdate ? 'Update' : 'Create'} Task</DialogTitle>
          <DialogDescription>
            {isUpdate
              ? 'Update the task by providing necessary info.'
              : "Add a new task by providing necessary info. Click save when you're done."}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            id="tasks-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter a title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-x-5">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Status</FormLabel>
                    <SelectDropdown
                      className="w-full"
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select dropdown"
                      items={[
                        { label: 'In Progress', value: 'in progress' },
                        { label: 'Backlog', value: 'backlog' },
                        { label: 'Todo', value: 'todo' },
                        { label: 'Canceled', value: 'canceled' },
                        { label: 'Done', value: 'done' },
                      ]}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Label</FormLabel>
                    <SelectDropdown
                      className="w-full"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      placeholder="Select dropdown"
                      items={[
                        { label: 'Documentation', value: 'documentation' },
                        { label: 'Feature', value: 'feature' },
                        { label: 'Bug', value: 'bug' },
                      ]}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-x-5">
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Priority</FormLabel>
                    <SelectDropdown
                      className="w-full"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      placeholder="Select dropdown"
                      items={[
                        { label: 'High', value: 'high' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Low', value: 'low' },
                      ]}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem className="flex w-1/2 flex-col">
                    <FormLabel>Task Deadline</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value
                              ? format(field.value, 'MM/dd/yyyy hh:mm aa')
                              : 'MM/DD/YYYY hh:mm aa'}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <div className="sm:flex">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={handleDateSelect}
                            initialFocus
                          />
                          <div className="flex flex-col divide-y sm:h-[300px] sm:flex-row sm:divide-x sm:divide-y-0">
                            <ScrollArea className="w-64 sm:w-auto">
                              <div className="flex p-2 sm:flex-col">
                                {Array.from({ length: 12 }, (_, i) => i + 1)
                                  .reverse()
                                  .map((hour) => (
                                    <Button
                                      key={hour}
                                      size="icon"
                                      variant={
                                        field.value &&
                                        field.value.getHours() % 12 ===
                                          hour % 12
                                          ? 'default'
                                          : 'ghost'
                                      }
                                      className="aspect-square shrink-0 sm:w-full"
                                      onClick={() =>
                                        handleTimeChange(
                                          'hour',
                                          hour.toString()
                                        )
                                      }
                                    >
                                      {hour}
                                    </Button>
                                  ))}
                              </div>
                              <ScrollBar
                                orientation="horizontal"
                                className="sm:hidden"
                              />
                            </ScrollArea>
                            <ScrollArea className="w-64 sm:w-auto">
                              <div className="flex p-2 sm:flex-col">
                                {Array.from(
                                  { length: 12 },
                                  (_, i) => i * 5
                                ).map((minute) => (
                                  <Button
                                    key={minute}
                                    size="icon"
                                    variant={
                                      field.value?.getMinutes() === minute
                                        ? 'default'
                                        : 'ghost'
                                    }
                                    className="aspect-square shrink-0 sm:w-full"
                                    onClick={() =>
                                      handleTimeChange(
                                        'minute',
                                        minute.toString()
                                      )
                                    }
                                  >
                                    {minute.toString().padStart(2, '0')}
                                  </Button>
                                ))}
                              </div>
                              <ScrollBar
                                orientation="horizontal"
                                className="sm:hidden"
                              />
                            </ScrollArea>
                            <ScrollArea>
                              <div className="flex p-2 sm:flex-col">
                                {['AM', 'PM'].map((ampm) => (
                                  <Button
                                    key={ampm}
                                    size="icon"
                                    variant={
                                      field.value &&
                                      ((ampm === 'AM' &&
                                        field.value.getHours() < 12) ||
                                        (ampm === 'PM' &&
                                          field.value.getHours() >= 12))
                                        ? 'default'
                                        : 'ghost'
                                    }
                                    className="aspect-square shrink-0 sm:w-full"
                                    onClick={() =>
                                      handleTimeChange('ampm', ampm)
                                    }
                                  >
                                    {ampm}
                                  </Button>
                                ))}
                              </div>
                            </ScrollArea>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>

        <DialogFooter className="mt-5 gap-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" form="tasks-form">
            Save & Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
