import { AppHeader } from '@/components/common/app-header';
import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { ProgressChart } from '@/components/dashboard/progress-chart';
import { Recommendations } from '@/components/dashboard/recommendations';

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <AppHeader title="Dashboard" />
      <main className="flex-1 p-4 overflow-auto md:p-6">
        <div className="grid gap-6">
          <DashboardStats />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ProgressChart />
            </div>
            <div className="lg:col-span-1">
              <Recommendations />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
