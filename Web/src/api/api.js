import axios from 'axios'

const URL_API = 'http://localhost:5555/api/prompt'

export const makeRequest = async (message) =>{
    console.log(message)
    const {data} = await axios.post(URL_API, message)

    console.log(data)

    return data
}