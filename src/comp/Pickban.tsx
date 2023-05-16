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
import { IChamp } from '../routes/Pick';
interface ChampType {
    data: IChamp[],
    name: string
}
const Pickban = ({data, name}: ChampType) => {
    return(
    <>
      <h1>{name}</h1>
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
    </>
    )
};

export default Pickban;