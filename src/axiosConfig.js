import axios from "axios";


const secretKey = "c69a586d"

const omdbAxios = axios.create({
    baseURL: "http://www.omdbapi.com/?apikey=" + secretKey
})

export default omdbAxios