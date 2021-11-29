import { FC } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ICHartProps } from '../../types/components/chartTypes';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      color: (context: any) => {
        const index = context.dataIndex;
        const value = context.dataset.data[index];
        return value > 0 ? '#F0556F' : '#AAD0F3';
      },
      borderColor: (context: any, options: any) => {
        const color = options.color;
        return color;
      },
      backgroundColor: (context: any, options: any) => {
        const color = options.color;
        return color;
      },
    },
  },
  scales: {
    y: {
      ticks: {
        font: {
          size: 14,
        },
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const Chart: FC<ICHartProps> = ({ data }) => {
  return <Bar options={options} data={data} />;
};

export default Chart;
