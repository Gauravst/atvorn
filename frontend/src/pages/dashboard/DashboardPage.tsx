import { Link } from 'react-router-dom';
import { useTitle } from '@/hooks/useTitle';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DatePickerWithRange } from '@/components/dashboard/date-range-picker';
import { ReminderCard } from '@/components/dashboard/reminder-card';
import { DashboardCards } from '@/components/dashboard/dashboard-cards';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { TaskOverviewChart } from '@/components/dashboard/task-overview-chart';
import { Main } from '@/components/layout/main';

const DashboardPage = () => {
  useTitle('Dashboard');
  return (
    <Main>
      <div className="mb-2 flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="hidden items-center space-x-2 sm:flex">
          <DatePickerWithRange />
          <Button className="cursor-pointer">Download</Button>
        </div>
      </div>
      <Tabs
        orientation="vertical"
        defaultValue="overview"
        className="space-y-4"
      >
        <div className="w-full overflow-x-auto pb-2">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity" disabled>
              Activity
            </TabsTrigger>
            <TabsTrigger value="Analytics" disabled>
              Analytics
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="overview" className="space-y-4">
          <DashboardCards />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
            <Card className="col-span-1 lg:col-span-4">
              <CardHeader>
                <CardTitle>Tasks Overview</CardTitle>
                <CardDescription>
                  Overview of tasks assigned and completed.
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <TaskOverviewChart />
              </CardContent>
            </Card>
            <Card className="col-span-1 lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  What's been happening across your projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
          </div>

          <Card className="col-span-1 lg:col-span-3">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Tasks Reminder</CardTitle>
                  <CardDescription>
                    Your Task Reminder in this Project
                  </CardDescription>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Set Reminder
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-3">
              <ReminderCard />
            </CardContent>

            <CardFooter>
              <Link
                to="/reminders"
                className="text-muted-foreground hover:text-foreground ml-auto flex items-center gap-1 text-sm transition-colors hover:underline"
              >
                Show the other reminders
                <span className="text-base">→</span>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </Main>
  );
};

export default DashboardPage;
