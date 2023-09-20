import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
export default function LineChart() {
    const lineChartData = [
      {id: 1, name: "John Doe", physics: 33, chemistry: 88, biology: 55},
      {id: 2, name: "Alice Smith", physics: 25, chemistry: 33, biology: 90},
      {id: 3, name: "Bob Johnson", physics: 55, chemistry: 65, biology: 55},
      {id: 4, name: "Eva Brown", physics: 89, chemistry: 75, biology: 33},
      {id: 5, name: "Michael Lee", physics: 75, chemistry: 60, biology: 40}
  ]
  
  
      
      
  return (
    <div className='mx-auto text-center my-11'>
        <h2 className='text-3xl font-bold mb-8'>Line Chart</h2>

      <LChart className=' mx-auto py-9' width={900} height={400} data={lineChartData}>
          <XAxis dataKey={'name'}></XAxis>
          <YAxis></YAxis>
          <Line type={'Subject'} dataKey="physics" />
          <Line type={'Marks'} dataKey="biology" stroke='red'/>
          <Line type={'Marks'} dataKey="chemistry" stroke='green'/>
      </LChart>

    </div>
  )
}
