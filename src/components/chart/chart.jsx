import './chart.css';
import ChartBar from './chartBar';

const Chart = (props) => {
const dataPointsValues = props.dataPoints.map(item => item.value);
const maxVal = Math.max(...dataPointsValues);
  return (
  <div className='chart'>
    {
      props.dataPoints.map((item, index) => (
        <ChartBar 
          key={index}
          label={item.label}
          value={item.value}
          maxValue={maxVal}
        />
      ))
    }
  </div>
  )
}

export default Chart;