import axios  from "axios";

const BASE_URL='https://youtube.googleapis.com/youtube/v3';
// const access_token= sessionStorage.getItem('access-token')

const AxiosConfig = axios.create({
    baseURL:BASE_URL,
    headers:{
        Accept:"application/json",
    }
})
// eslint-disable-next-line react-refresh/only-export-components
export {AxiosConfig,BASE_URL};