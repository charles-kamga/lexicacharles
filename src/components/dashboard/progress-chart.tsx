'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { progressChartData } from '@/lib/data';
import {
  ChartTooltipContent,
  ChartContainer,
  type ChartConfig,
} from '@/components/ui/chart';

const chartConfig = {
  'Time Spent (min)': {
    label: 'Time Spent (min)',
    color: 'hsl(var(--chart-1))',
  },
  'Quizzes Taken': {
    label: 'Quizzes Taken',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function ProgressChart() {
  return (
    <Card className="overflow-visible">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-lg sm:text-xl">Weekly Progress</CardTitle>
        <CardDescription className="text-sm sm:text-base">Time spent and quizzes taken this week</CardDescription>
      </CardHeader>
      <CardContent className="px-0 sm:px-0 pb-4 w-full">
        <div className="w-full overflow-x-auto px-4 sm:px-6 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent pb-2">
          <div className="h-[250px] sm:h-[300px] w-[600px] min-w-full">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={progressChartData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 0,
                    bottom: 5,
                  }}
                  barCategoryGap="15%"
                  barGap={2}
                  maxBarSize={30}
                >
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    vertical={false} 
                    stroke="hsl(var(--muted))"
                  />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    width={30}
                    tickFormatter={value => `${value}m`}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    width={30}
                  />
                  <Tooltip
                    cursor={{ fill: 'hsl(var(--accent) / 0.3)' }}
                    content={<ChartTooltipContent />}
                    wrapperStyle={{ zIndex: 100 }}
                  />
                  <Legend 
                    wrapperStyle={{ 
                      paddingTop: '10px',
                      fontSize: '0.7rem',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap'
                    }}
                  />
                  <Bar
                    yAxisId="left"
                    dataKey="Time Spent (min)"
                    fill="var(--color-Time Spent (min))"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="Quizzes Taken"
                    fill="var(--color-Quizzes Taken)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
