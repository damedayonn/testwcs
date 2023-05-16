import { useState, useEffect } from 'react'
import lolStats from '../csvtojson';
import Pickban from '../comp/Pickban';
export interface IChamp {
  name: string,
  pick: number,
  ban: number,
  winrate_total: number
}

const Pick = () => {
    const [champ, setChamp] = useState('Sylas');
    const getChamp = (champ: string) => {
      const champInfo = lolStats.filter(el => el.champion === champ);
      const rst = [
        {
          name: champInfo[0].champion,
          pick: Number(champInfo[0].pick_rate.replace('%','')),
          ban: Number(champInfo[0].ban_rate.replace('%','')),
          winrate_total: Number(champInfo[0].winrate_total.replace('%',''))
        }
      ]
      return rst;
    }
    const [data, setData] = useState<IChamp[]>(getChamp('Sylas'));
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setChamp(e.target.value)
    }
    useEffect(()=>{
      setData(getChamp(champ));
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
        <Pickban
          data={data}
          name={champ}
        />
    </div>
    );
}

export default Pick;