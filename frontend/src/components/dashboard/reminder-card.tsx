import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function ReminderCard() {
  const reminderData = [
    {
      id: 1,
      priority: 'Low',
      time: 'Today, 12:30',
      task: 'Create a design training for beginners.',
      tag: 'Design Education',
    },
    {
      id: 2,
      priority: 'Medium',
      time: 'Today, 10:00',
      task: 'Have a meeting with the new design team.',
      tag: 'Meeting',
    },
    {
      id: 3,
      priority: 'High',
      time: 'Tomorrow, 16:30',
      task: 'Respond to customer support emails.',
      tag: 'Customer Support',
    },
  ];

  const getDotColor = (priority: string) => {
    switch (priority) {
      case 'Low':
        return 'bg-gray-400';
      case 'Medium':
        return 'bg-yellow-400';
      case 'High':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="grid grid-cols-3 gap-x-3">
      {reminderData.map((item) => (
        <Card key={item.id}>
          <CardHeader className="mb-0 pb-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'h-2 w-2 rounded-full',
                    getDotColor(item.priority)
                  )}
                />
                <CardTitle className="text-base">{item.priority}</CardTitle>
              </div>
              <Link to={`/tasks/${item.id}`}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground h-6 w-6"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="mt-0 pt-0">
            <p className="text-muted-foreground mb-4 text-sm">{item.time}</p>
            <p className="text-sm">{item.task}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge variant="outline">{item.tag}</Badge>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
