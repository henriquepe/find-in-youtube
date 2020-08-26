import axios from 'axios';



const api = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAUKQU347tUSVriaDxf5M4Vm1HwyH2HaxE`,
    
})

export default api;
