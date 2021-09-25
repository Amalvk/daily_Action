import './signup.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Signup({title,datakey}) {

    
const data = [
    {
      name: 'Sun',
      "Active User": 2000,

    },
    {
        name: 'Mon',
        "Active User": 3000,
  
      },
      {
        name: 'Tue',
        "Active User": 1000,
  
      },
      {
        name: 'Wed',
        "Active User": 4000,
  
      },
      {
        name: 'Thu',
        "Active User": 6000,
  
      },
      {
        name: 'Fri',
        "Active User": 2000,
  
      },
      {
        name: 'Sat',
        "Active User": 8000,
  
      },
  ];
    return (
        <div className='chart'>
           <h3 className="chartTitle">User Signup</h3>
          
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey='name' stroke='#5550bd' />
                    <Line type='monotone' dataKey='Active User' stroke='#5550bd' />
                    <Tooltip/>
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>
                    <Legend />
                </LineChart>
           </ResponsiveContainer>
        </div>
    )
}
