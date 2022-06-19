// Axios
import axios from 'axios'

export const getApi = async () => {
    const BaseApi = "https://react-api-23b25-default-rtdb.firebaseio.com/-N4wt8S-bN89-EtqpKyQ/phone/.json";
    const result = await axios.get(`${BaseApi}`)
    return result.data
}
