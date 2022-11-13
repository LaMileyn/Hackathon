import axios from "axios";
import {ICurrency} from "../types/currency";

class CurrencyService {
    getCurrentCurrency(){
        return axios.get<ICurrency>("https://www.cbr-xml-daily.ru/daily_json.js")
    }
}
export default new CurrencyService();