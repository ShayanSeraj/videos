import axios from "axios";

const KEY = 'AIzaSyAsv51aQP-fgcyJ9qjHJm8xNSdcCa43bn8';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
