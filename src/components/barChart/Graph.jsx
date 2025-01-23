import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const Graph = () => {
  return (
    <BarChart
      series={[
        { data: [400000] },
        { data: [100000] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Without Credsettle', 'With CredSettle'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
export default Graph;
