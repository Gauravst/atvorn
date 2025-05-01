import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreVertical } from 'lucide-react';

export const ChatMenuItem = () => {
  return (
    <div className="hover:bg-muted group flex items-center justify-between border-b p-3 px-6">
      {/* Left side: Avatar + info */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
        </div>

        <div className="text-sm">
          <div className="font-medium">Nami</div>
          <div className="text-muted-foreground w-36 truncate text-xs">
            Hey, let’s meet up later...
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <div className="text-muted-foreground text-xs">10 min</div>
        <Badge className="bg-green-500 text-xs hover:bg-green-600">2</Badge>

        <DropdownMenu>
          <DropdownMenuTrigger className="invisible group-hover:visible">
            <MoreVertical className="text-muted-foreground h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="left">
            <DropdownMenuItem>Mute</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem>Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
