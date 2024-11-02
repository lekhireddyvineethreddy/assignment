import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Registrations',
        data: [700, 600, 500, 450, 400, 350, 300],
        borderColor: '#4a90e2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        pointBackgroundColor: '#4a90e2',
        fill: true,
        tension: 0.4, 
      },
      {
        label: 'Referrals',
        data: [300, 250, 200, 180, 160, 140, 120],
        borderColor: '#d94f4f',
        backgroundColor: 'rgba(217, 79, 79, 0.2)',
        pointBackgroundColor: '#d94f4f',
        fill: true,
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#4a4a4a', 
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#ffffff',
        titleColor: '#4a4a4a',
        bodyColor: '#4a4a4a',
        borderColor: '#e2e2e2',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#9e9e9e',
        },
      },
      y: {
        grid: {
          color: '#e2e2e2',
        },
        ticks: {
          color: '#9e9e9e',
          beginAtZero: true,
          stepSize: 100,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
