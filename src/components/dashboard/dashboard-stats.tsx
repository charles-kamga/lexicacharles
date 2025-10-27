import { Clock, BookCheck, Star, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    title: 'Time Spent (Today)',
    value: '45m',
    change: '+15m from yesterday',
    icon: Clock,
    changeType: 'increase',
  },
  {
    title: 'Topics Covered',
    value: '3',
    change: '+1 from last week',
    icon: BookCheck,
    changeType: 'increase',
  },
  {
    title: 'Average Score',
    value: '88%',
    change: '-2% from last week',
    icon: Star,
    changeType: 'decrease',
  },
];

const StatCard = ({ title, value, change, icon: Icon, changeType }: (typeof stats)[0]) => (
  <Card className="min-w-[200px] flex-1">
    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="w-4 h-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="flex items-center text-xs text-muted-foreground">
        {changeType === 'increase' ? (
          <TrendingUp className="w-3 h-3 mr-1 text-accent-foreground" />
        ) : (
          <TrendingDown className="w-3 h-3 mr-1 text-destructive" />
        )}
        {change}
      </p>
    </CardContent>
  </Card>
);

export function DashboardStats() {
  return (
    <div className="w-full overflow-x-auto pb-2 -mx-1 px-1">
      <div className="flex gap-3 sm:gap-4 w-max min-w-full">
        {stats.map((stat) => (
          <div key={stat.title} className="flex-none" style={{ width: 'calc(100vw - 2rem)' }}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>
    </div>
  );
}
