import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { day: 'Mon', assigned: 24, completed: 18 },
  { day: 'Tue', assigned: 30, completed: 20 },
  { day: 'Wed', assigned: 22, completed: 25 },
  { day: 'Thu', assigned: 28, completed: 20 },
  { day: 'Fri', assigned: 20, completed: 30 },
  { day: 'Sat', assigned: 15, completed: 12 },
  { day: 'Sun', assigned: 20, completed: 8 },
];

const chartConfig = {
  assigned: {
    label: 'Assigned',
    color: '#f9a653',
  },
  completed: {
    label: 'Completed',
    color: '#4BC0C0',
  },
} satisfies ChartConfig;

export const TaskOverviewChart = () => {
  return (
    <ChartContainer config={chartConfig} className="px-5">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="assigned"
          type="monotone"
          stroke="var(--color-assigned)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="completed"
          type="monotone"
          stroke="var(--color-completed)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};
