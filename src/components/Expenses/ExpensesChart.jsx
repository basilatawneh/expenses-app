
import './ExpensesChart.css'
import Chart from '../chart/chart'
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for(let item of props.items) {
    const monthInd = item.date.getMonth(); // starting from 0 => January - 11 => Des
    chartDataPoints[monthInd].value += parseInt(item.amount);
  }

  return (
    <Chart dataPoints={chartDataPoints} />
  )
};

export default ExpensesChart;