import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/sidebar/dashboard-sidebar';
import { DashboardHeader } from '@/components/header/dashboard-header';
import { Outlet } from 'react-router-dom';
import { Main } from '@/components/layout/main';
import { ScrollArea } from './components/ui/scroll-area';

const Layout = () => {
  return (
    <ScrollArea className="h-screen flex-1 px-1">
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <DashboardHeader />
          <Main>
            <Outlet />
          </Main>
        </SidebarInset>
      </SidebarProvider>
    </ScrollArea>
  );
};

export default Layout;
