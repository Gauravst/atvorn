import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '../ui/input';

type EditorProps = {
  title: string;
};

export const Editor = ({ title }: EditorProps) => {
  return (
    <div className="mt-5 grid gap-y-6">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Detailed description</Label>
        <Input id="title" value={title} />
      </div>
      <div className="grid w-full flex-1 gap-1.5">
        <Label htmlFor="message">Detailed description</Label>
        <Textarea
          placeholder="Type in markdown here..."
          id="message"
          className="min-h-[40vh]"
        />
      </div>
    </div>
  );
};
