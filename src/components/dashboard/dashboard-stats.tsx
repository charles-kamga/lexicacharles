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
  <Card>
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
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
