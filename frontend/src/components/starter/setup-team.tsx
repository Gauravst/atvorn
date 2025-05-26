import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CreateTeamDialog } from '@/components/utils/create-team-dialog';
import { CreateProjectDialog } from '@/components/utils/create-project-dialog';

import { Plus, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const StarterTeam = () => {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(0);
  const [createTeamDialogOpen, setCreateTeamDialogOpen] = useState(false);
  const [createProjectDialogOpen, setCreateProjectDialogOpen] = useState(false);
  const navigate = useNavigate();

  const data = [
    {
      name: 'Personal',
      description: 'Private personal projects',
      teamSlug: 'personal',
      project: [
        {
          name: 'Frontend Website',
          description: 'React UI work',
          id: 'frontend',
          projectSlug: 'frontend',
        },
        {
          name: 'Backend Server',
          description: 'Node API server',
          id: 'backend',
          projectSlug: 'backend',
        },
      ],
    },
    {
      name: 'Sanggo',
      description: 'Sanggo tech team projects',
      teamSlug: 'sanggo',
      project: [
        {
          name: 'Website',
          description: 'Marketing site',
          id: 'sanggo-website',
          projectSlug: 'website',
        },
        {
          name: 'Mobile App',
          description: 'React Native app',
          id: 'sanggo-app',
          projectSlug: 'mobile-app',
        },
      ],
    },
    {
      name: 'Atvorn',
      description: 'Open source PM tool',
      teamSlug: 'atvorn',
      project: [],
    },
    {
      name: 'Freelance Clients',
      description: 'Work with various clients',
      teamSlug: 'freelance',
      project: [
        {
          name: 'Client A',
          description: 'Design system',
          id: 'client-a',
          projectSlug: 'client-a',
        },
        {
          name: 'Client B',
          description: 'Landing page',
          id: 'client-b',
          projectSlug: 'client-b',
        },
        {
          name: 'Client C',
          description: 'SaaS backend',
          id: 'client-c',
          projectSlug: 'client-c',
        },
      ],
    },
    {
      name: 'StartupX',
      description: 'Internal startup projects',
      teamSlug: 'startupx',
      project: [
        {
          name: 'AI Bot',
          description: 'Chatbot backend',
          id: 'startup-ai',
          projectSlug: 'ai-bot',
        },
      ],
    },
  ];

  const handleTeamClick = (index: number) => {
    setSelectedTeam(index);
  };

  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center gap-0 sm:flex-row">
      <CreateTeamDialog
        open={createTeamDialogOpen}
        setOpen={setCreateTeamDialogOpen}
      />

      <CreateProjectDialog
        open={createProjectDialogOpen}
        setOpen={setCreateProjectDialogOpen}
      />

      {/* Team Panel */}
      <Card className="w-[90%] sm:w-[30%] sm:rounded-r-none sm:border-r-0">
        <CardHeader className="flex justify-between">
          <div>
            <CardTitle>Teams</CardTitle>
            <CardDescription>All your teams</CardDescription>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCreateTeamDialogOpen(true)}
          >
            <Plus />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[300px] w-full">
            <div className="flex flex-col">
              {data.map((item, index) => (
                <div key={index}>
                  <div
                    className={`hover:bg-muted flex cursor-pointer items-center justify-between gap-x-4 px-5 py-4 ${
                      selectedTeam === index ? 'bg-muted' : ''
                    }`}
                    onClick={() => handleTeamClick(index)}
                  >
                    <div className="flex items-center gap-x-4">
                      <Avatar className="rounded-lg">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="mb-1 text-sm font-medium capitalize">
                          {item.name}
                        </p>
                        <p className="text-muted-foreground text-sm capitalize">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <Separator />
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Project Panel */}
      <Card className="hidden w-[30%] rounded-l-none sm:flex">
        <CardHeader className="flex justify-between">
          <div>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Projects under selected team</CardDescription>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setCreateProjectDialogOpen(true);
            }}
          >
            <Plus />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[300px] w-full">
            <div className="flex flex-col">
              {selectedTeam === null ? (
                <p className="text-muted-foreground py-6 text-center text-sm">
                  No team selected
                </p>
              ) : data[selectedTeam].project.length === 0 ? (
                <p className="text-muted-foreground py-6 text-center text-sm">
                  No projects available
                </p>
              ) : (
                data[selectedTeam].project.map((item, index) => {
                  const dashboardUrl = `/team/${data[selectedTeam].teamSlug}/project/${item.projectSlug}`;
                  return (
                    <div key={index}>
                      <div
                        className="hover:bg-muted flex cursor-pointer items-center justify-between gap-x-4 px-5 py-4"
                        onClick={() => navigate(dashboardUrl)}
                      >
                        <div className="flex items-center gap-x-4">
                          <Avatar className="rounded-lg">
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="mb-1 text-sm font-medium capitalize">
                              {item.name}
                            </p>
                            <p className="text-muted-foreground text-sm capitalize">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem
                              onClick={() => navigate(dashboardUrl)}
                            >
                              Dashboard
                            </DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <Separator />
                    </div>
                  );
                })
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
