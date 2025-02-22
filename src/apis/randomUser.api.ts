import axios from 'axios';

export const getRandomUser = async () => {
    const response: any = await axios.get(`https://randomuser.me/api/`);
    console.log(response.data)
    return response.data.results[0]
}
