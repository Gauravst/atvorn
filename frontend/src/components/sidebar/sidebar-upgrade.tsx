import { useSidebar } from '@/components/ui/sidebar';
import { Star } from 'lucide-react';
import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const SidebarUpgrade = () => {
  const { state } = useSidebar();

  const isCollapsed = state === 'collapsed';

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {isCollapsed ? (
          <div className="flex justify-center py-2">
            <Star className="h-5 w-5 text-yellow-400" />
          </div>
        ) : (
          <Card className="mx-0 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-2 text-white shadow-lg">
            <CardContent className="flex flex-col items-start space-y-3 px-4 py-2">
              <div className="flex w-full items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <h4 className="text-lg font-semibold">Upgrade to Pro</h4>
              </div>
              <p className="text-sm text-white/90">
                Unlock advanced features to manage your team better.
              </p>
              <Button
                variant="secondary"
                className="w-full cursor-pointer bg-white text-black hover:bg-white/90"
              >
                Upgrade
              </Button>
            </CardContent>
          </Card>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
