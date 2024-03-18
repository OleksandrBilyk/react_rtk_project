import axios from "axios";

import {baseURL} from "../constants/urls";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request => {
    const token : string = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTE2Y2ZmZTk3NmZlYmE4ODRkN2M1MWIxMzU1M2RmYyIsInN1YiI6IjY1NGY0OTBiZDRmZTA0MDBlMWIwMmIzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E39hekTUeeZLpGQMKUNJOeTYyC-MKKh5T-xsrIl5Jy0`;
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }

    return request
})

export {
    apiService
}