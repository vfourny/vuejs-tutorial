import axios from 'axios';

export const getRandomUser = async () => {
    const response: any = await axios.get(`https://randomuser.me/api/`);
    return response.data.results[0]
}
