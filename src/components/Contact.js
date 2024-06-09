import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

// Register the required components for ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);



const Contact = () => {
  // Data for Bar Chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Random Data',
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for Bar Chart
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Random Data Bar Chart',
      },
    },
  };

  // Data for Line Chart
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Random Data',
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  // Options for Line Chart
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Random Data Line Chart',
      },
    },
  };

  // Data for Pie Chart
  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Random Data',
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for Pie Chart
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Random Data Pie Chart',
      },
    },
  };

  return (
    <div className="m-8">
      <h2 className="text-2xl text-center mb-4">Contact</h2>
      <div className="w-full max-w-lg mx-auto">
        <Bar data={barData} options={barOptions} />
      </div>
      <div className="w-full max-w-lg mx-auto mt-8">
        <Line data={lineData} options={lineOptions} />
      </div>
      <div className="w-full max-w-lg mx-auto mt-8">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default Contact;
