// Axios
import axios from 'axios'

export const getApi = async () => {
    const BaseApi = "https://react-api-23b25-default-rtdb.firebaseio.com/-N4vLzoDp01S6jPgCQhx/phone";

    const result = await axios.get(`${BaseApi}`)
    return result
}