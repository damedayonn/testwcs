import { useState, useEffect } from 'react'
import './App.css'
import lolStats from './csvtojson';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

function App() {
  const [champ, setChamp] = useState('Sylas');
  const getChamp = (champ: string) => {
    const champInfo = lolStats.filter(el => el.champion === champ);
    const rst = [
      {
        name: champInfo[0].champion,
        pick: champInfo[0].pick_rate.replace('%',''),
        ban: champInfo[0].ban_rate.replace('%',''),
        winrate_total: champInfo[0].winrate_total.replace('%','')
      }
    ]
    return rst;
  }
  const [data, setData] = useState(getChamp('Sylas'));
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChamp(e.target.value)
  }
  useEffect(()=>{
    setData(prev => getChamp(champ));
    return () => {
      setData(getChamp('Sylas'));
    }
  },[champ])
  return (
    <div className='test'>
      Champ Name<br></br>
      <select name="champs" onChange={handleChange}>
        {
          lolStats.map((data, i) => (
            <option key={i} value={data.champion}>{data.champion}</option>
          ))
        }
      </select>
      <h1>{champ}</h1>
      <ResponsiveContainer width={700} height={700}>
        <BarChart
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
          barGap={50}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0,100]}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="pick" fill="#8884d8" barSize={50} />
          <Bar dataKey="ban" fill="tomato" barSize={50} />
          <Bar dataKey="winrate_total" fill="#82ca9d" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App
