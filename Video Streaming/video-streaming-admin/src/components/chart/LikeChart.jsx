import './likeChart.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title,datakey}){

    
const data = [
  {
    name: 'Sunday',
    Views: 4000,
    Likes: 400,
    amt: 2400,
  },
  {
    name: 'Monday',
    Views: 3000,
    Likes: 1398,
    amt: 2210,
  },
  {
    name: 'Tuesday',
    Views: 2000,
    Likes: 800,
    amt: 2290,
  },
  {
    name: 'Wednesday',
    Views: 2780,
    Likes: 908,
    amt: 2000,
  },
  {
    name: 'Thursday',
    Views: 1890,
    Likes: 800,
    amt: 2181,
  },
  {
    name: 'Friday',
    Views: 2390,
    Likes: 800,
    amt: 2500,
  },
  {
    name: 'Saturday',
    Views: 3490,
    Likes: 300,
    amt: 2100,
  },
];

  return(
 <div className='like'>
   <h3 className='ChartTitle'>User Likes</h3>
     <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />jk
          <Tooltip />
          <Legend />
          <Bar dataKey="Views" stackId="a" fill="#8884d8" />
          <Bar dataKey="Likes" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
 </div>

  )
}