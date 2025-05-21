import { Card } from '../ui/card';
import {
  Clipboard,
  MessageCircle,
  Layers,
  Upload,
  CheckCircle,
} from 'lucide-react';

const data = [
  {
    type: 'task',
    title: 'Task assigned',
    description: 'Design Landing Page assigned to Gaurav by Ananya',
  },
  {
    type: 'comment',
    title: 'New comment',
    description: '“Please check if it works on Firefox too.” – Raj',
  },
  {
    type: 'project',
    title: 'Project completed',
    description: 'Project "DUpload" finished on May 18, 2025',
  },
  {
    type: 'file',
    title: 'File uploaded',
    description: 'Anjali uploaded "Wireframe-v3.pdf" to Project Alpha',
  },
  {
    type: 'completed',
    title: 'Task completed',
    description: 'Gaurav completed "Integrate PayPal API"',
  },
  {
    type: 'file',
    title: 'File uploaded',
    description: 'Anjali uploaded "Wireframe-v3.pdf" to Project Alpha',
  },
  {
    type: 'completed',
    title: 'Task completed',
    description: 'Gaurav completed "Integrate PayPal API"',
  },
];

const getIconByType = (type: string) => {
  switch (type) {
    case 'task':
      return <Clipboard className="text-blue-500" size={15} />;
    case 'comment':
      return <MessageCircle className="text-green-500" size={15} />;
    case 'project':
      return <Layers className="text-purple-500" size={15} />;
    case 'file':
      return <Upload className="text-yellow-500" size={15} />;
    case 'completed':
      return <CheckCircle className="text-teal-500" size={15} />;
    default:
      return null;
  }
};

export const RecentActivity = () => {
  return (
    <div className="space-y-8">
      {data.slice(0, 5).map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <Card className="m-0 flex h-10 w-10 items-center justify-center rounded-full p-0">
            {getIconByType(item.type)}
          </Card>
          <div className="flex flex-1 flex-wrap items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm leading-none font-medium">{item.title}</p>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
