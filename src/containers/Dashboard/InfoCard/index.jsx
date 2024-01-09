import React, { useEffect } from 'react';
import { Stack } from '@fluentui/react';
import Checkbox from '@mui/material/Checkbox';
import { Text, Card, Dropdown, AmountText } from '@/atoms';
import { PieChart, Pie, Cell } from 'recharts';

import { useFluentTheme } from '@/theme';
import { useLazyGetTransactionsInsightsQuery } from '@/dataLayer/apis';
import { FILTER_YEAR_DROPDOWN, MONTHS } from '@/utils/constants';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const InfoCard = () => {
  const theme = useFluentTheme();

  const [selectedMonth, setSelectedMonth] = React.useState('January');
  const [selectedYear, setSelectedYear] = React.useState(2024);
  const [showFilters, setShowFilters] = React.useState(false);
  const [getInsights, { data }] = useLazyGetTransactionsInsightsQuery();

  const totalExpense = data?.data?.insights?.total_expense;
  const totalIncome = data?.data?.insights?.total_income;
  const categoryBreakup = data?.data?.category_breakup?.map((item) => ({
    name: `${item.category_name} (${item.amount_spent})`,
    value: item.amount_spent,
  }));

  useEffect(() => {
    getInsights({
      year: selectedYear,
      month: MONTHS.findIndex((f) => f === selectedMonth) + 1,
    });
  }, [selectedMonth, selectedYear, getInsights]);
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    console.log('index', index, categoryBreakup[index]);
    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <Card>
      <Stack tokens={{ childrenGap: 16 }} styles={{ root: { width: '100%' } }}>
        <Stack
          verticalAlign='center'
          horizontal
          horizontalAlign='space-between'
          tokens={{ childrenGap: 8 }}
        >
          <Text>Total expense - </Text>

          <AmountText amount={totalExpense} transactionType='expense' />
        </Stack>
        <Stack
          verticalAlign='center'
          horizontal
          horizontalAlign='space-between'
          tokens={{ childrenGap: 8 }}
        >
          <Text>Total income - </Text>

          <AmountText amount={totalIncome} transactionType='income' />
        </Stack>
        <Stack
          horizontal
          verticalAlign='center'
          tokens={{ childrenGap: 8 }}
          onClick={() => setShowFilters(!showFilters)}
        >
          <Checkbox style={{ padding: 0 }} />
          <Text variant='small'>Show filters</Text>
        </Stack>
        {showFilters && (
          <Stack horizontal tokens={{ childrenGap: 8 }}>
            <Dropdown
              selectedKey={selectedMonth}
              options={MONTHS.map((m) => ({ key: m, text: m }))}
              onChange={(e, item) => setSelectedMonth(item.key)}
            />
            <Dropdown
              selectedKey={selectedYear}
              options={FILTER_YEAR_DROPDOWN.map((y) => ({ key: y, text: y }))}
              onChange={(e, item) => setSelectedYear(item.key)}
            />
          </Stack>
        )}

        {categoryBreakup ? (
          <>
            <PieChart width={350} height={350}>
              <Pie
                data={categoryBreakup}
                cx='50%'
                cy='50%'
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                dataKey='value'
                paddingAngle={5}
              >
                {categoryBreakup.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <Stack
              horizontal
              styles={{ root: { margin: theme.spacing.s2 } }}
              tokens={{ childrenGap: 8 }}
              wrap
            >
              {categoryBreakup.map((entry, index) => (
                <Stack horizontal tokens={{ childrenGap: 16 }}>
                  <Stack
                    styles={{
                      root: {
                        backgroundColor: COLORS[index % COLORS.length],
                        width: '20px',
                        minHeight: '20px',
                      },
                    }}
                  ></Stack>
                  <Text variant='mediumSemibold'>{categoryBreakup[index].name}</Text>
                </Stack>
              ))}
            </Stack>
          </>
        ) : (
          <Text variant='mediumSemibold' style={{ width: '350px' }}>
            No data available
          </Text>
        )}
      </Stack>
    </Card>
  );
};

export default InfoCard;
