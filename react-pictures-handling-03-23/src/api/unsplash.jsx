import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID gWztzVG5rK0wth0stTgAmCSW5iUjPT6V0xKU795e0bw",
      },
})