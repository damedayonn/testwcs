import {lol} from './assets/wc';
interface lolType {
    "": string,
    "ban_rate": string,
    "champion": string,
    "lose_blue_side": string,
    "lose_red_side": string,
    "lose_total": string,
    "pick_ban_rate": string,
    "pick_rate": string,
    "sum_bans": string,
    "sum_blue_side": string,
    "sum_pick_ban": string,
    "sum_red_side": string,
    "sum_total": string,
    "win_blue_side": string,
    "win_red_side": string,
    "win_total": string,
    "winrate_blue_side": string,
    "winrate_red_side": string,
    "winrate_total": string
}
function csvToJson(csv: string) {
    const rows = csv.split('\n');

    const jsonArr: lolType[] = [];

    const header = rows[0].split(',');

    for(let i = 1; i < rows.length; i++) {
        let obj: any = {};
        let row = rows[i].split(',');
        for(let j=0; j < header.length; j++) {
            obj[header[j]] = row[j];
        }
        jsonArr.push(obj);
    }
    return jsonArr;
}

const lolStats = csvToJson(lol); 
export default lolStats;
