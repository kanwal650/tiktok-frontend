import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {

    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://tiktokcloneapi.azurewebsites.net'

    return {
        provide: { 
            axios: axios
        },
    }
})
