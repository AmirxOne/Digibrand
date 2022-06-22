// Axios
import axios from 'axios'
const BaseApi = "https://react-api-23b25-default-rtdb.firebaseio.com/-N4wt8S-bN89-EtqpKyQ/phone/.json";

export const getApi = async () => {
    const result = await axios.get(`${BaseApi}`)
    return result.data
}
