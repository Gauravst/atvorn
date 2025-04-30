import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/sidebar/dashboard-sidebar';
import { DashboardHeader } from '@/components/header/dashboard-header';
import { Outlet } from 'react-router-dom';
import { Main } from '@/components/layout/main';

const Layout = () => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardHeader />
        <Main>
          <Outlet />
        </Main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
