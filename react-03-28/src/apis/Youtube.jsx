import axios from "axios"

const KEY = 'AIzaSyA0SJ4xTG19yEyFwZKJP8H1zm5yTLqvUM8'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})