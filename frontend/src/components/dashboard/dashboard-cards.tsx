import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderKanban, ListTodo, CheckCircle2, Users } from 'lucide-react';

export const DashboardCards = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
          <FolderKanban className="text-muted-foreground h-5 w-5" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">23</div>
          <p className="text-muted-foreground text-xs">
            2 new projects this month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
          <ListTodo className="text-muted-foreground h-5 w-5" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+50</div>
          <p className="text-muted-foreground text-xs">
            +34 tasks created this month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
          <CheckCircle2 className="text-muted-foreground h-5 w-5" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+134</div>
          <p className="text-muted-foreground text-xs">
            +20 tasks completed this week
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Members</CardTitle>
          <Users className="text-muted-foreground h-5 w-5" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+73</div>
          <p className="text-muted-foreground text-xs">
            5 active in the last 24h
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
